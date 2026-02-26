import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { useData } from '../context/DataContext'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import { createRazorpayOrder, verifyRazorpayPayment, loadRazorpayScript } from '../services/payment'
import { sendPaymentConfirmation } from '../services/emailjs'

function Checkout() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProgram } = useData()
  const { user, isEnrolled, enroll } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [demoMode, setDemoMode] = useState(false)

  const program = id ? getProgram(id) : null

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: `/programs/${id}/checkout` } })
      return
    }
    if (!program) return
    if (isEnrolled(program.id)) {
      navigate(`/programs/${id}`, { replace: true })
    }
  }, [user, program, id, isEnrolled, navigate])

  const amount = program?.price ?? 0
  const amountDisplay = amount ? `₹${amount.toLocaleString('en-IN')}` : ''

  const doEnrollAndSendEmail = async (orderId = 'demo_order', paymentId = 'demo_payment') => {
    await enroll(program.id)
    try {
      await sendPaymentConfirmation(
        user.email,
        user.displayName,
        program.title,
        program.price,
        orderId,
        paymentId
      )
    } catch (e) {
      console.warn('Payment confirmation email failed:', e)
    }
  }

  const handleProceedToPay = async () => {
    if (!program || !user) return
    setError('')
    setLoading(true)

    try {
      const orderData = await createRazorpayOrder({
        amount: program.price,
        currency: 'INR',
        courseId: program.id,
        courseName: program.title,
      })

      await loadRazorpayScript()
      if (!window.Razorpay) {
        setError('Payment script failed to load. Try again or use Demo payment if configured.')
        setLoading(false)
        return
      }

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Smart Plus Innovation',
        description: program.title,
        order_id: orderData.orderId,
        handler: async (response) => {
          setLoading(true)
          try {
            await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            await doEnrollAndSendEmail(response.razorpay_order_id, response.razorpay_payment_id)
            navigate(`/programs/${id}`, { state: { paymentSuccess: true }, replace: true })
          } catch (err) {
            setError(err.message || 'Payment verification failed.')
          } finally {
            setLoading(false)
          }
        },
        prefill: { email: user.email, name: user.displayName || '' },
        theme: { color: '#6366f1' },
      }

      const rzp = new window.Razorpay(options)
      rzp.on('payment.failed', () => {
        setError('Payment failed or was cancelled.')
        setLoading(false)
      })
      rzp.open()
    } catch (err) {
      if (err.message && err.message.includes('not configured')) {
        setDemoMode(true)
        setError('Payment gateway not configured. Use Demo payment below to test enrollment.')
      } else {
        setError(err.message || 'Could not start payment.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDemoPayment = async () => {
    if (!program || !user) return
    setError('')
    setLoading(true)
    try {
      await doEnrollAndSendEmail()
      navigate(`/programs/${id}`, { state: { paymentSuccess: true }, replace: true })
    } catch (err) {
      setError(err.message || 'Enrollment failed.')
    } finally {
      setLoading(false)
    }
  }

  if (!user || !program) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-text/60">Loading...</p>
        </div>
      </Layout>
    )
  }

  if (isEnrolled(program.id)) {
    return null
  }

  return (
    <Layout>
      <section className="py-12 lg:py-20 bg-gradient-to-b from-background to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-text mb-2">Checkout</h1>
          <p className="text-text/60 mb-8">Complete payment to enroll in this program.</p>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 mb-6">
            <h2 className="text-lg font-semibold text-text mb-4">{program.title}</h2>
            <p className="text-text/60 text-sm mb-4">{program.shortDescription}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-text/60">Amount</span>
              <span className="text-2xl font-bold text-text">{amountDisplay}</span>
            </div>
            {program.originalPrice && (
              <p className="text-sm text-text/50 mt-1 text-right">
                Original price ₹{program.originalPrice.toLocaleString('en-IN')} — you save ₹
                {(program.originalPrice - program.price).toLocaleString('en-IN')}
              </p>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleProceedToPay}
              loading={loading}
              className="flex-1"
              size="lg"
            >
              Proceed to Pay
            </Button>
            {demoMode && (
              <Button
                variant="outline"
                onClick={handleDemoPayment}
                loading={loading}
                className="flex-1"
                size="lg"
              >
                Demo payment (no gateway)
              </Button>
            )}
          </div>

          <p className="text-text/50 text-sm mt-6 text-center">
            Payment confirmation will be sent to <strong>{user.email}</strong> after successful payment.
          </p>

          <div className="mt-8 text-center">
            <Button to={`/programs/${id}`} variant="ghost">
              ← Back to program
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Checkout
