import connectDB from '../server/config/db.js'
import { configureCloudinary } from '../server/config/cloudinary.js'
import app from '../server/app.js'

let initialized = false

async function init() {
  if (initialized) return
  console.log('[API] Cold start — initializing services...')
  try {
    await connectDB()
    configureCloudinary()
    console.log('[API] Services initialized')
  } catch (err) {
    console.error('[API] Init error:', err.message)
  }
  initialized = true
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url} | origin=${req.headers.origin || 'unknown'}`)
  await init()
  app(req, res)
}
