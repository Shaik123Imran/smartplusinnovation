import express from 'express'

const app = express()
app.get('/api/ping', (req, res) => res.json({ ping: 'ok' }))

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
