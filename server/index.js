// Fix: Force Node.js to use Google's public DNS servers for all lookups.
// The default ISP/router DNS often silently drops MongoDB Atlas SRV queries,
// causing 'querySrv ETIMEOUT'. Google DNS (8.8.8.8) fully supports SRV records.
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1'])

import 'dotenv/config'
import connectDB from './config/db.js'
import { configureCloudinary } from './config/cloudinary.js'
import app from './app.js'

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await connectDB()
  } catch (err) {
    // Keep the server alive even if initial DB connection fails — Mongoose retries automatically.
    console.error('[SERVER] MongoDB connection failed (will retry):', err.message)
  }

  try {
    configureCloudinary()
  } catch (e) {
    console.warn('[SERVER] Cloudinary config error:', e.message)
  }

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
