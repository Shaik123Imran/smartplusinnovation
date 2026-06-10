import express from 'express'
import authRoutes from '../server/routes/authRoutes.js'

const app = express()
app.use('/api/auth', authRoutes)
app.get('/api/ping', (req, res) => res.json({ ping: 'ok' }))

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
