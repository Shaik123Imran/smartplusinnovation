import express from 'express'
import rateLimit from 'express-rate-limit'
import { submitContact, submitInterest, subscribeNewsletter } from '../controllers/formController.js'

const router = express.Router()

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: { success: false, message: 'Too many submissions. Try again later.' },
})

router.post('/contact', formLimiter, submitContact)
router.post('/interest', formLimiter, submitInterest)
router.post('/newsletter', formLimiter, subscribeNewsletter)

export default router
