import connectDB from '../server/config/db.js'
import { configureCloudinary } from '../server/config/cloudinary.js'
import app from '../server/app.js'

let isInitialized = false

async function init() {
  if (isInitialized) return
  await connectDB()
  try {
    configureCloudinary()
  } catch (e) {
    console.warn('Cloudinary config error:', e.message)
  }
  isInitialized = true
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  await init()
  app(req, res)
}
