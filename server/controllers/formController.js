import ContactMessage from '../models/ContactMessage.js'
import InterestRegistration from '../models/InterestRegistration.js'
import NewsletterSubscriber from '../models/NewsletterSubscriber.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendContactNotification, sendInterestNotification } from '../services/emailService.js'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdIhnHhAjWuzzLYQXXK6xQrYSQEFzDpEbYFe57lOITDAMXeSw/formResponse'

async function submitToGoogleForm(data) {
  const params = new URLSearchParams({
    'entry.510307354': data.name || '',
    'entry.1280008216': data.email || '',
    'entry.79514962': data.phone || '',
    'entry.1241231701': data.city || '',
    'entry.1839725247': data.courseType || '',
  })

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  } catch (e) {
    console.warn('Google Form submission failed:', e.message)
  }
}

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
  const { name, email, phone, city, courseType, message, source } = req.body

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
    message: message || '',
    source: source || 'register-interest',
  })

  try {
    await sendInterestNotification(doc)
  } catch (e) {
    console.warn('Interest notification email failed:', e.message)
  }

  submitToGoogleForm(doc)

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
