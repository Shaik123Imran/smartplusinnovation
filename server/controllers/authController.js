import crypto from 'crypto'
import { OAuth2Client } from 'google-auth-library'
import User from '../models/User.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendTokenResponse } from '../utils/generateToken.js'
import { sendWelcomeEmail, sendPasswordResetEmail } from '../services/emailService.js'

const googleClient = process.env.GOOGLE_CLIENT_ID
  ? new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
  : null

const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U'

export const register = asyncHandler(async (req, res) => {
  const { fullName, email, phone, password, termsAccepted } = req.body

  if (!termsAccepted) {
    res.status(400)
    throw new Error('You must accept the Terms & Conditions')
  }

  const exists = await User.findOne({ email })
  if (exists) {
    res.status(400)
    throw new Error('Email already registered')
  }

  const user = await User.create({
    fullName,
    email,
    phone: phone || '',
    password,
    termsAccepted: true,
    termsAcceptedAt: new Date(),
  })

  try {
    await sendWelcomeEmail(user)
  } catch (e) {
    console.warn('Welcome email failed:', e.message)
  }

  sendTokenResponse(user, 201, res)
})

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')
  if (!user || !(await user.matchPassword(password))) {
    res.status(401)
    throw new Error('Invalid email or password')
  }

  sendTokenResponse(user, 200, res)
})

export const googleLogin = asyncHandler(async (req, res) => {
  const { credential } = req.body

  if (!googleClient || !credential) {
    res.status(400)
    throw new Error('Google Sign-In is not configured')
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  const payload = ticket.getPayload()
  const email = payload.email?.toLowerCase()
  const googleId = payload.sub
  const fullName = payload.name || 'Google User'
  const avatar = payload.picture || ''

  let user = await User.findOne({ $or: [{ googleId }, { email }] })

  if (user) {
    if (!user.googleId) {
      user.googleId = googleId
      if (!user.avatar) user.avatar = avatar
      await user.save()
    }
  } else {
    user = await User.create({
      fullName,
      email,
      googleId,
      avatar,
      termsAccepted: true,
      termsAcceptedAt: new Date(),
    })
    try {
      await sendWelcomeEmail(user)
    } catch (e) {
      console.warn('Welcome email failed:', e.message)
    }
  }

  sendTokenResponse(user, 200, res)
})

export const getMe = asyncHandler(async (req, res) => {
  res.json({ success: true, user: req.user })
})

export const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    return res.json({
      success: true,
      message: 'If that email exists, a reset link has been sent.',
    })
  }

  if (!user.password) {
    res.status(400)
    throw new Error('This account uses Google sign-in. Please log in with Google.')
  }

  const resetToken = crypto.randomBytes(32).toString('hex')
  user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
  user.resetPasswordExpire = Date.now() + 60 * 60 * 1000
  await user.save({ validateBeforeSave: false })

  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`

  try {
    await sendPasswordResetEmail(user, resetUrl)
  } catch (e) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({ validateBeforeSave: false })
    res.status(500)
    throw new Error('Email could not be sent')
  }

  res.json({
    success: true,
    message: 'If that email exists, a reset link has been sent.',
  })
})

export const resetPassword = asyncHandler(async (req, res) => {
  const hashed = crypto.createHash('sha256').update(req.params.token).digest('hex')

  const user = await User.findOne({
    resetPasswordToken: hashed,
    resetPasswordExpire: { $gt: Date.now() },
  })

  if (!user) {
    res.status(400)
    throw new Error('Invalid or expired reset token')
  }

  user.password = req.body.password
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined
  await user.save()

  sendTokenResponse(user, 200, res)
})

export const logout = asyncHandler(async (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' })
})

export { getInitials }
