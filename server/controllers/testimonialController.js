import Testimonial from '../models/Testimonial.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 })
  res.json({ success: true, testimonials })
})

export const createTestimonial = asyncHandler(async (req, res) => {
  const { content, rating, program, role, company } = req.body
  const name = req.user.fullName
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const testimonial = await Testimonial.create({
    name,
    role: role || 'Student',
    company: company || 'EduGram Graduate',
    content,
    rating: rating || 5,
    program: program || '',
    image: initials,
    userId: req.user._id,
    isApproved: false,
  })

  res.status(201).json({
    success: true,
    testimonial,
    message: 'Thank you! Your testimonial will appear after review.',
  })
})
