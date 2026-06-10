let app

async function getApp() {
  if (app) return app
  console.log('[API] Loading Express app...')
  try {
    const mod = await import('../server/app.js')
    app = mod.default
    console.log('[API] Express app loaded')
    return app
  } catch (err) {
    console.error('[API] Failed to load app:', err.message)
    console.error('[API] Stack:', err.stack)
    throw err
  }
}

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  try {
    const expressApp = await getApp()
    expressApp(req, res)
  } catch (err) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: false,
      message: 'App load failed: ' + err.message,
    }))
  }
}
