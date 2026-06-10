import express from 'express'

import authRoutes from '../server/routes/authRoutes.js'
import userRoutes from '../server/routes/userRoutes.js'
// import courseRoutes from '../server/routes/courseRoutes.js'
// import testimonialRoutes from '../server/routes/testimonialRoutes.js'
// import formRoutes from '../server/routes/formRoutes.js'
// import adminRoutes from '../server/routes/adminRoutes.js'
// import paymentRoutes from '../server/routes/paymentRoutes.js'
// import videoRoutes from '../server/routes/videoRoutes.js'

const app = express()
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.get('/api/ping', (req, res) => res.json({ ping: 'ok' }))

export default function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`)
  app(req, res)
}
