import mongoose from 'mongoose'

let isConnected = false

async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.warn('MONGODB_URI is not set. MongoDB connection is skipped; video APIs will not work until it is configured.')
    return
  }

  if (isConnected) {
    return
  }

  try {
    const conn = await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || undefined,
    })
    isConnected = true
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
  }
}

export default connectDB


