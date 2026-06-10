async function getApp() {
  const express = (await import('express')).default
  const cors = (await import('cors')).default
  const app = express()
  app.use(cors())
  app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
  return app
}

export default async function handler(req, res) {
  try {
    const app = await getApp()
    app(req, res)
  } catch (err) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('ERROR: ' + err.message)
  }
}
