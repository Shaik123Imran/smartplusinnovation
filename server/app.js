import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { configureCloudinary } from './config/cloudinary.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js'
import formRoutes from './routes/formRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import videoRoutes from './routes/videoRoutes.js'

const app = express()

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://edugram-technologies-lnjr6z6m5.vercel.app',
  'https://www.edugramtechnologies.in',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(helmet())
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
app.options('*', cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

console.log(`[SERVER] Allowed CORS origins:`, ALLOWED_ORIGINS)
console.log(`[SERVER] GOOGLE_CLIENT_ID set: ${!!process.env.GOOGLE_CLIENT_ID}`)
console.log(`[SERVER] VITE_GOOGLE_CLIENT_ID set: ${!!process.env.VITE_GOOGLE_CLIENT_ID}`)

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

export default app
