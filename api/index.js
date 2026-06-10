import express from 'express'
import connectDB from '../server/config/db.js'

const app = express()
app.get('/api/ping', (req, res) => res.json({ ping: 'ok', db: !!connectDB }))

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
