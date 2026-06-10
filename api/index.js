export default async function handler(req, res) {
  try {
    const [express, cors] = await Promise.all([
      import('express').then(m => m.default),
      import('cors').then(m => m.default),
    ])
    const app = express()
    app.use(cors())
    app.get('/api/health', (rq, rs) => rs.json({ ok: true, id: process.env.GOOGLE_CLIENT_ID?.slice(0,10) }))
    app(req, res)
  } catch (err) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: err.message, stack: err.stack?.split('\n') }))
  }
}
