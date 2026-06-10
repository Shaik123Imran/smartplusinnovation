import express from 'express'

const app = express()
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is alive', url: req.url })
})

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
