import ContactMessage from '../models/ContactMessage.js'
import InterestRegistration from '../models/InterestRegistration.js'
import NewsletterSubscriber from '../models/NewsletterSubscriber.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendContactNotification, sendInterestNotification } from '../services/emailService.js'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdIhnHhAjWuzzLYQXXK6xQrYSQEFzDpEbYFe57lOITDAMXeSw/formResponse'

/**
 * Silently forwards registration data to the Google Form in the background.
 * Fire-and-forget: never awaited, errors are caught and logged only.
 * NOTE: mode:'no-cors' is browser-only and must NOT be used in Node.js.
 */
function submitToGoogleForm(data) {
  const params = new URLSearchParams()
  params.append('entry.59240132', data.name || '')
  params.append('entry.1654006449', data.email || '')
  params.append('entry.843462197', data.phone || '')
  params.append('entry.1435585359', data.city || '')
  params.append('entry.342965658', data.courseType || '')

  // Fire-and-forget — do NOT await, never throws into the caller
  fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
    .then((res) => console.log(`[Google Form] Submitted for ${data.email} → status ${res.status}`))
    .catch((e) => console.warn('[Google Form] Submission failed:', e.message))
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
