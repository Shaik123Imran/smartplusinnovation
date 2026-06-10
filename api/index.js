function runApp(app, req, res) {
  return new Promise((resolve, reject) => {
    const _end = res.end.bind(res)
    res.end = function (...args) {
      resolve()
      return _end(...args)
    }
    try {
      app(req, res)
    } catch (err) {
      reject(err)
    }
  })
}

async function getApp() {
  const mod = await import('../server/app.js')
  return mod.default
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  try {
    const app = await getApp()
    await runApp(app, req, res)
  } catch (err) {
    console.error('[API] Error:', err.message, err.stack)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('ERROR: ' + err.message + '\n' + (err.stack || ''))
  }
}
