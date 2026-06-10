import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from '../server/routes/authRoutes.js'
import userRoutes from '../server/routes/userRoutes.js'
import courseRoutes from '../server/routes/courseRoutes.js'
import testimonialRoutes from '../server/routes/testimonialRoutes.js'
import formRoutes from '../server/routes/formRoutes.js'
import adminRoutes from '../server/routes/adminRoutes.js'
import paymentRoutes from '../server/routes/paymentRoutes.js'
import videoRoutes from '../server/routes/videoRoutes.js'

import connectDB from '../server/config/db.js'
import { configureCloudinary } from '../server/config/cloudinary.js'
import { errorHandler, notFound } from '../server/middleware/errorHandler.js'

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://edugram-technologies-lnjr6z6m5.vercel.app',
  'https://www.edugramtechnologies.in',
  process.env.CLIENT_URL,
].filter(Boolean)

const app = express()

app.use(helmet())
app.use(cors({
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
}))
app.options('/{*path}', cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EduGram Technologies API' })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/forms', formRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/videos', videoRoutes)

app.use(notFound)
app.use(errorHandler)

let initialized = false

async function init() {
  if (initialized) return
  console.log('[API] Cold start — initializing...')
  try {
    await connectDB()
    configureCloudinary()
  } catch (err) {
    console.error('[API] Init error:', err.message)
  }
  initialized = true
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  await init()
  app(req, res)
}
