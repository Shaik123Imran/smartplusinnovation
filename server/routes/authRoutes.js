import express from 'express'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import {
  register,
  login,
  googleLogin,
  getMe,
  forgotPassword,
  resetPassword,
  logout,
} from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { success: false, message: 'Too many attempts. Try again later.' },
})

const handleValidation = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg })
  }
  next()
}

router.post(
  '/register',
  authLimiter,
  [
    body('fullName').trim().notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  handleValidation,
  (req, res, next) => {
    if (!req.body.termsAccepted) {
      return res.status(400).json({ success: false, message: 'You must accept the Terms & Conditions' })
    }
    req.body.termsAccepted = true
    next()
  },
  register
)

router.post(
  '/login',
  authLimiter,
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  handleValidation,
  login
)

router.post('/google', (req, res, next) => {
  console.log(`[ROUTE] POST /api/auth/google | origin=${req.get('origin') || 'unknown'} | content-type=${req.get('content-type')}`)
  next()
}, authLimiter, googleLogin)
router.post('/forgot-password', authLimiter, forgotPassword)
router.put('/reset-password/:token', authLimiter, resetPassword)
router.get('/me', protect, getMe)
router.post('/logout', protect, logout)

export default router
