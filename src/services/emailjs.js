import emailjs from '@emailjs/browser'

// EmailJS configuration - Replace with your own IDs from EmailJS dashboard
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

// Initialize EmailJS
emailjs.init(PUBLIC_KEY)

export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'Contact@edugramtechnologies.in',
      reply_to: formData.email
    })
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

export const sendEnrollmentConfirmation = async (userEmail, courseName) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: userEmail,
      subject: 'Course Enrollment Confirmation',
      message: `Congratulations! You have successfully enrolled in ${courseName}. We're excited to have you on board!`
    })
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

/** Send payment confirmation to the user's registered email after successful payment. */
export const sendPaymentConfirmation = async (userEmail, userName, courseName, amount, orderId, paymentId) => {
  try {
    const message = `Hi ${userName || 'Student'},\n\nYour payment for ${courseName} has been received successfully.\n\nAmount: ₹${typeof amount === 'number' ? amount.toLocaleString('en-IN') : amount}\nOrder ID: ${orderId || 'N/A'}\nPayment ID: ${paymentId || 'N/A'}\n\nYou are now enrolled in the course. Log in to your dashboard to start learning.\n\nThank you,\nEduGram Technologies Pvt Ltd`
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: userEmail,
      from_name: 'EduGram Technologies Pvt Ltd',
      subject: 'Payment received – ' + courseName,
      message,
    })
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}

export const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: userEmail,
      from_name: 'EduGram Technologies Pvt Ltd',
      subject: 'Welcome to EduGram Technologies Pvt Ltd!',
      message: `Hi ${userName},\n\nWelcome to EduGram Technologies Pvt Ltd! We're thrilled to have you join our learning community.\n\nExplore our programs and start your journey to success today!\n\nBest regards,\nEduGram Team`
    })
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}
