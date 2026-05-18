import api from './apiClient'

export async function createRazorpayOrder({ amount, currency = 'INR', courseId, courseName }) {
  const { data } = await api.post('/payments/create-order', {
    amount,
    currency,
    courseId,
    courseName,
  })
  return data
}

export async function verifyRazorpayPayment({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  courseId,
}) {
  const { data } = await api.post('/payments/verify', {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
  })
  return data
}

export function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Razorpay'))
    document.body.appendChild(script)
  })
}
