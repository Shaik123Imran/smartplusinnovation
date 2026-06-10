import connectDB from '../server/config/db.js'
import { configureCloudinary } from '../server/config/cloudinary.js'
import app from '../server/app.js'

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
