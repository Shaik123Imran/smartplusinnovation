// Vercel serverless: create Razorpay order. Requires RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET in env.
const Razorpay = require('razorpay')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keySecret) {
    res.status(503).json({ error: 'Payment gateway not configured (RAZORPAY_KEY_SECRET missing)' })
    return
  }

  try {
    const { amount, currency = 'INR', courseId, courseName, receipt } = req.body || {}
    const amountInPaise = Math.round(Number(amount) * 100) // Razorpay expects paise
    if (!amountInPaise || amountInPaise < 100) {
      res.status(400).json({ error: 'Invalid amount' })
      return
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: keySecret,
    })

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: currency.toUpperCase(),
      receipt: receipt || `rcp_${courseId}_${Date.now()}`,
      notes: { courseId, courseName: courseName || courseId },
    })

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    })
  } catch (err) {
    console.error('Razorpay create order error:', err)
    res.status(500).json({ error: err.message || 'Failed to create order' })
  }
}
