import app from '../server/app.js'

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
