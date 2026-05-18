import mongoose from 'mongoose'

let isConnected = false

async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.error('MONGODB_URI is required. Set it in your .env file.')
    process.exit(1)
  }

  if (isConnected) return

  const conn = await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB_NAME || undefined,
  })
  isConnected = true
  console.log(`MongoDB connected: ${conn.connection.host}`)
}

export default connectDB
