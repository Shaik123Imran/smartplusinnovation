// Payment gateway helpers. Uses /api on same origin (Vercel); demo fallback when API unavailable.

const getApiBase = () => {
  if (typeof window === 'undefined') return ''
  return window.location.origin
}

export async function createRazorpayOrder({ amount, currency = 'INR', courseId, courseName }) {
  let res
  try {
    res = await fetch(`${getApiBase()}/api/razorpay-create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency, courseId, courseName }),
    })
  } catch (networkErr) {
    // Local dev: Vite doesn't run /api routes (they only work on Vercel)
    throw new Error('Payment gateway not configured (API not available). Use Demo payment to test.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    if (res.status === 404 || res.status === 503) {
      throw new Error('Payment gateway not configured (API not available). Use Demo payment to test.')
    }
    throw new Error(data.error || 'Failed to create order')
  }
  return data
}

export async function verifyRazorpayPayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
  const res = await fetch(`${getApiBase()}/api/razorpay-verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.error || 'Payment verification failed')
  return data
}

export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => resolve(new Error('Failed to load Razorpay'))
    document.body.appendChild(script)
  })
}
