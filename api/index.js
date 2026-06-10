import express from 'express'
import courseRoutes from '../server/routes/courseRoutes.js'

const app = express()
app.use('/api/courses', courseRoutes)
app.get('/api/ping', (req, res) => res.json({ ping: 'ok' }))

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
