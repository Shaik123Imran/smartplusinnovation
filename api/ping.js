export default function handler(req, res) {
  console.log(`[PING] ${req.method} ${req.url}`)
  res.json({ status: 'ok', message: 'pong', url: req.url, method: req.method })
}
