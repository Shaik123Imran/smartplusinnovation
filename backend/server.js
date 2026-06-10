/**
 * backend/server.js
 * EduGram backend entry point — Express + MongoDB + Google Auth + JWT
 */

import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { OAuth2Client } from 'google-auth-library'

// ── DB connection ───────────────────────────────────────────────
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI

if (!MONGO_URI) {
  console.error('❌  MONGODB_URI is not set in .env')
  process.exit(1)
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅  MongoDB connected:', mongoose.connection.host))
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message)
    process.exit(1)
  })

// ── Express app ─────────────────────────────────────────────────
const app = express()

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://edugram-technologies-lnjr6z6m5.vercel.app',
  'https://www.edugramtechnologies.in',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true)
      } else {
        console.warn(`[CORS] Origin not in allowlist: ${origin}`)
        callback(null, true)
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
)
app.options('/{*path}', cors())

console.log(`[BACKEND] Allowed CORS origins:`, ALLOWED_ORIGINS)
console.log(`[BACKEND] GOOGLE_CLIENT_ID set: ${!!process.env.GOOGLE_CLIENT_ID}`)
console.log(`[BACKEND] VITE_GOOGLE_CLIENT_ID set: ${!!process.env.VITE_GOOGLE_CLIENT_ID}`)
app.use(express.json())

// ── Models ───────────────────────────────────────────────────────
import Course from '../server/models/Course.js'
import InterestRegistration from '../server/models/InterestRegistration.js'
import User from '../server/models/User.js'

// ── Helpers ──────────────────────────────────────────────────────
const JWT_SECRET = process.env.JWT_SECRET || 'edugram_dev_jwt_secret'
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d'

const generateToken = (userId) =>
  jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRE })

const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id)
  const userPayload = user.toJSON ? user.toJSON() : user
  res.status(statusCode).json({ success: true, token, user: userPayload })
}

const protect = async (req, res, next) => {
  try {
    const auth = req.headers.authorization
    if (!auth?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized — please log in' })
    }
    const token = auth.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await User.findById(decoded.id)
    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, message: 'User not found or inactive' })
    }
    req.user = user
    next()
  } catch {
    res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}

// Google OAuth client (initialized only when Client ID is set)
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const googleClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null

if (!GOOGLE_CLIENT_ID) {
  console.warn('⚠️   GOOGLE_CLIENT_ID not set — Google Sign-In will not work.')
  console.warn('     Add GOOGLE_CLIENT_ID=<your-id> to .env to enable it.')
} else {
  console.log('✅  Google OAuth configured with Client ID:', GOOGLE_CLIENT_ID.slice(0, 20) + '...')
}

// ─────────────────────────────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (_req, res) =>
  res.json({
    status: 'ok',
    message: 'EduGram API is running',
    googleAuth: !!GOOGLE_CLIENT_ID,
  })
)

// ─── AUTH ─────────────────────────────────────────────────────────

// POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, email, phone, password, termsAccepted } = req.body
    if (!termsAccepted) {
      return res.status(400).json({ success: false, message: 'You must accept the Terms & Conditions' })
    }
    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: 'fullName, email, and password are required' })
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' })
    }
    const exists = await User.findOne({ email: email.toLowerCase() })
    if (exists) {
      return res.status(400).json({ success: false, message: 'Email already registered' })
    }
    const user = await User.create({
      fullName,
      email,
      phone: phone || '',
      password,
      termsAccepted: true,
      termsAcceptedAt: new Date(),
    })
    console.log(`[AUTH] Registered: ${email}`)
    sendTokenResponse(user, 201, res)
  } catch (err) {
    console.error('[AUTH] Register error:', err.message)
    res.status(500).json({ success: false, message: err.message })
  }
})

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' })
    }
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password')
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }
    console.log(`[AUTH] Logged in: ${email}`)
    sendTokenResponse(user, 200, res)
  } catch (err) {
    console.error('[AUTH] Login error:', err.message)
    res.status(500).json({ success: false, message: err.message })
  }
})

// POST /api/auth/google — Google Sign-In / Sign-Up
app.post('/api/auth/google', async (req, res) => {
  try {
    const { credential } = req.body

    if (!googleClient) {
      return res.status(503).json({
        success: false,
        message: 'Google Sign-In is not configured on the server. Please add GOOGLE_CLIENT_ID to .env',
      })
    }
    if (!credential) {
      return res.status(400).json({ success: false, message: 'Google credential is required' })
    }

    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    })
    const payload = ticket.getPayload()

    const email = payload.email?.toLowerCase()
    const googleId = payload.sub
    const fullName = payload.name || 'Google User'
    const avatar = payload.picture || ''

    if (!email) {
      return res.status(400).json({ success: false, message: 'Google account has no email' })
    }

    // Find or create user
    let user = await User.findOne({ $or: [{ googleId }, { email }] })

    if (user) {
      // Link Google ID if signing in with email-registered account
      if (!user.googleId) {
        user.googleId = googleId
        if (!user.avatar) user.avatar = avatar
        await user.save()
      }
      console.log(`[AUTH] Google login: ${email} (existing user)`)
    } else {
      // Create new user
      user = await User.create({
        fullName,
        email,
        googleId,
        avatar,
        termsAccepted: true,
        termsAcceptedAt: new Date(),
      })
      console.log(`[AUTH] Google signup: ${email} (new user created in MongoDB)`)
    }

    sendTokenResponse(user, 200, res)
  } catch (err) {
    console.error('[AUTH] Google auth error:', err.message)
    if (err.message?.includes('Token used too late')) {
      return res.status(401).json({ success: false, message: 'Google token expired. Please try again.' })
    }
    if (err.message?.includes('Invalid token')) {
      return res.status(401).json({ success: false, message: 'Invalid Google token. Please try again.' })
    }
    res.status(500).json({ success: false, message: 'Google authentication failed: ' + err.message })
  }
})

// GET /api/auth/me — get current user (protected)
app.get('/api/auth/me', protect, (req, res) => {
  res.json({ success: true, user: req.user })
})

// POST /api/auth/logout
app.post('/api/auth/logout', (_req, res) => {
  res.json({ success: true, message: 'Logged out successfully' })
})

// ─── COURSES ─────────────────────────────────────────────────────

// GET /api/courses
app.get('/api/courses', async (req, res) => {
  try {
    const filter = { isPublished: true }
    if (req.query.category && req.query.category !== 'all') filter.category = req.query.category
    if (req.query.featured === 'true') filter.isFeatured = true
    const courses = await Course.find(filter).sort({ createdAt: -1 })
    console.log(`[API] GET /api/courses → ${courses.length} course(s)`)
    res.json({ success: true, courses })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// GET /api/courses/categories
app.get('/api/courses/categories', async (_req, res) => {
  try {
    const categories = await Course.distinct('category')
    res.json({
      success: true,
      categories: [
        { id: 'all', name: 'All Programs' },
        ...categories.map((id) => ({
          id,
          name: id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        })),
      ],
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// GET /api/courses/:slug
app.get('/api/courses/:slug', async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug, isPublished: true })
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' })
    res.json({ success: true, course })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// ─── REGISTRATION ────────────────────────────────────────────────

// POST /api/register  &  POST /api/forms/interest
const handleRegistration = async (req, res) => {
  try {
    const { name, fullName, email, phone, city, courseType, selectedCourse, message, source } = req.body
    if (!email || !(name || fullName) || !phone) {
      return res.status(400).json({ success: false, message: 'name, email, and phone are required' })
    }
    const resolvedCourse = courseType || selectedCourse || ''
    const existing = await InterestRegistration.findOne({
      email,
      courseType: resolvedCourse,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    })
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'You already submitted interest recently. We will contact you soon.',
      })
    }
    const doc = await InterestRegistration.create({
      name: name || fullName,
      email,
      phone,
      city: city || '',
      courseType: resolvedCourse,
      message: message || '',
      source: source || 'register-interest',
    })
    console.log(`[API] Registration saved for ${email} (${resolvedCourse})`)
    res.status(201).json({ success: true, message: 'Registration submitted successfully', id: doc._id })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

app.post('/api/register', handleRegistration)
app.post('/api/forms/interest', handleRegistration)

// POST /api/forms/contact
app.post('/api/forms/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, city, source } = req.body
    // Store as interest registration for now (reusing the model)
    await InterestRegistration.create({
      name: name || 'Contact Form',
      email,
      phone: phone || '',
      city: city || '',
      courseType: subject || '',
      message: message || '',
      source: source || 'contact-page',
    })
    console.log(`[API] Contact form from ${email}`)
    res.status(201).json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// POST /api/forms/newsletter
app.post('/api/forms/newsletter', async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ success: false, message: 'Email is required' })
    // Store in interest registrations as newsletter signup
    await InterestRegistration.create({
      name: 'Newsletter',
      email,
      phone: 'N/A',
      source: 'newsletter',
    })
    res.json({ success: true, message: 'Subscribed successfully' })
  } catch (err) {
    if (err.code === 11000) return res.json({ success: true, message: 'Already subscribed' })
    res.status(500).json({ success: false, message: err.message })
  }
})

// GET /api/testimonials
app.get('/api/testimonials', async (_req, res) => {
  try {
    const Testimonial = mongoose.models.Testimonial ||
      mongoose.model('Testimonial', new mongoose.Schema({
        name: String, role: String, company: String,
        content: String, rating: Number, image: String,
        program: String, isApproved: Boolean, isFeatured: Boolean,
      }, { timestamps: true }))
    const testimonials = await Testimonial.find({ isApproved: true })
    res.json({ success: true, testimonials })
  } catch (err) {
    res.json({ success: true, testimonials: [] })
  }
})

// ─── Start server ─────────────────────────────────────────────────
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`\n🚀  EduGram API → http://localhost:${PORT}`)
  console.log(`   GET  /api/health`)
  console.log(`   POST /api/auth/register`)
  console.log(`   POST /api/auth/login`)
  console.log(`   POST /api/auth/google   ${GOOGLE_CLIENT_ID ? '✅' : '❌ (needs GOOGLE_CLIENT_ID)'}`)
  console.log(`   GET  /api/auth/me`)
  console.log(`   GET  /api/courses`)
  console.log(`   POST /api/register\n`)
})
