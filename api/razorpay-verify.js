// Vercel serverless: verify Razorpay payment signature. Requires RAZORPAY_KEY_SECRET in env.
const crypto = require('crypto')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keySecret) {
    res.status(503).json({ error: 'Payment gateway not configured' })
    return
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {}
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      res.status(400).json({ success: false, error: 'Missing payment details' })
      return
    }

    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(body)
      .digest('hex')

    const isValid = expectedSignature === razorpay_signature
    if (!isValid) {
      res.status(400).json({ success: false, error: 'Invalid signature' })
      return
    }

    res.status(200).json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    })
  } catch (err) {
    console.error('Razorpay verify error:', err)
    res.status(500).json({ success: false, error: err.message || 'Verification failed' })
  }
}
