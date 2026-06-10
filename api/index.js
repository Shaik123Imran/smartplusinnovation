export default async function handler(req, res) {
  try {
    const mod = await import('../server/app.js')
    mod.default(req, res)
  } catch (err) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('ERROR: ' + err.message + '\n' + (err.stack || ''))
  }
}
