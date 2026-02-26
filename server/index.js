import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { configureCloudinary } from './config/cloudinary.js'
import videoRoutes from './routes/videoRoutes.js'

const app = express()

// Basic middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Smart Plus Innovation API is running' })
})

// Video routes
app.use('/api/videos', videoRoutes)

const PORT = process.env.PORT || 5000

async function start() {
  await connectDB()
  configureCloudinary()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start().catch((err) => {
  console.error('Failed to start server:', err)
})


