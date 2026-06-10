import 'dotenv/config'
import connectDB from './config/db.js'
import { configureCloudinary } from './config/cloudinary.js'
import app from './app.js'

const PORT = process.env.PORT || 5000

async function start() {
  await connectDB()
  configureCloudinary()

  if (!process.env.JWT_SECRET) {
    console.warn('[SERVER] WARNING: JWT_SECRET is not set. Authentication will fail.')
  }

  app.listen(PORT, () => {
    console.log(`[SERVER] EduGram API running on port ${PORT}`)
  })
}

start().catch((err) => {
  console.error('[SERVER] Failed to start server:', err)
  process.exit(1)
})
