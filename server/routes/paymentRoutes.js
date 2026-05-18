import express from 'express'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { protect } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { enrollCourse } from '../controllers/userController.js'

const router = express.Router()

const getRazorpay = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return null
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })
}

router.post(
  '/create-order',
  protect,
  asyncHandler(async (req, res) => {
    const razorpay = getRazorpay()
    if (!razorpay) {
      res.status(503)
      throw new Error('Payment gateway not configured')
    }

    const { amount, currency = 'INR', courseId, courseName } = req.body
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency,
      receipt: `edugram_${courseId}_${Date.now()}`,
      notes: { courseId, courseName },
    })

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    })
  })
)

router.post(
  '/verify',
  protect,
  asyncHandler(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body

    const body = `${razorpay_order_id}|${razorpay_payment_id}`
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex')

    if (expected !== razorpay_signature) {
      res.status(400)
      throw new Error('Invalid payment signature')
    }

    if (courseId && !req.user.enrolledCourses.includes(courseId)) {
      req.user.enrolledCourses.push(courseId)
      await req.user.save()
    }

    res.json({ success: true, message: 'Payment verified and enrollment complete' })
  })
)

export default router
