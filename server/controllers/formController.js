import ContactMessage from '../models/ContactMessage.js'
import InterestRegistration from '../models/InterestRegistration.js'
import NewsletterSubscriber from '../models/NewsletterSubscriber.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendContactNotification, sendInterestNotification } from '../services/emailService.js'

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message, city, source } = req.body

  const doc = await ContactMessage.create({
    name,
    email,
    phone: phone || '',
    subject: subject || '',
    message: message || subject || 'No message',
    city: city || '',
    source: source || 'contact-page',
  })

  try {
    await sendContactNotification(doc)
  } catch (e) {
    console.warn('Contact notification email failed:', e.message)
  }

  res.status(201).json({ success: true, message: 'Message sent successfully' })
})

export const submitInterest = asyncHandler(async (req, res) => {
  const { name, email, phone, city, courseType, source } = req.body

  const existing = await InterestRegistration.findOne({ email, courseType, createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } })
  if (existing) {
    res.status(400)
    throw new Error('You already submitted interest recently. We will contact you soon.')
  }

  const doc = await InterestRegistration.create({
    name,
    email,
    phone,
    city: city || '',
    courseType: courseType || '',
    source: source || 'register-interest',
  })

  try {
    await sendInterestNotification(doc)
  } catch (e) {
    console.warn('Interest notification email failed:', e.message)
  }

  res.status(201).json({ success: true, message: 'Registration submitted successfully' })
})

export const subscribeNewsletter = asyncHandler(async (req, res) => {
  const email = req.body.email?.toLowerCase().trim()
  if (!email) {
    res.status(400)
    throw new Error('Email is required')
  }

  try {
    await NewsletterSubscriber.create({ email })
    return res.status(201).json({ success: true, message: 'Subscribed successfully' })
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ success: true, message: 'You are already subscribed' })
    }
    throw err
  }
})
