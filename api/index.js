async function getApp() {
  const mod = await import('../server/app.js')
  return mod.default
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  try {
    const app = await getApp()
    app(req, res)
  } catch (err) {
    console.error('[API] Error:', err.message, err.stack)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('ERROR: ' + err.message + '\n' + (err.stack || ''))
  }
}
