import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
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

app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
)
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

const PORT = process.env.PORT || 5000

async function start() {
  await connectDB()
  configureCloudinary()

  if (!process.env.JWT_SECRET) {
    console.warn('WARNING: JWT_SECRET is not set. Authentication will fail.')
  }

  app.listen(PORT, () => {
    console.log(`EduGram API running on port ${PORT}`)
  })
}

start().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
