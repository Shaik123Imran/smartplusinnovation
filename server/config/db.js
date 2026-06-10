import mongoose from 'mongoose'

let isConnected = false

async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.warn('[DB] MONGODB_URI not set — skipping database connection. Some features will be unavailable.')
    return
  }

  if (isConnected) return

  if (mongoose.connection.readyState === 1) {
    isConnected = true
    return
  }

  const conn = await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB_NAME || undefined,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
  isConnected = true
  console.log(`[DB] MongoDB connected: ${conn.connection.host}`)
}

export default connectDB
