import User from '../models/User.js'
import Course from '../models/Course.js'
import Testimonial from '../models/Testimonial.js'
import ContactMessage from '../models/ContactMessage.js'
import InterestRegistration from '../models/InterestRegistration.js'
import NewsletterSubscriber from '../models/NewsletterSubscriber.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const getDashboardStats = asyncHandler(async (req, res) => {
  const [users, courses, testimonials, contacts, interests, subscribers] = await Promise.all([
    User.countDocuments(),
    Course.countDocuments(),
    Testimonial.countDocuments(),
    ContactMessage.countDocuments({ status: 'new' }),
    InterestRegistration.countDocuments({ status: 'new' }),
    NewsletterSubscriber.countDocuments({ isActive: true }),
  ])

  res.json({
    success: true,
    stats: { users, courses, testimonials, contacts, interests, subscribers },
  })
})

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 })
  res.json({ success: true, users })
})

export const deleteUser = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export const getAllTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 })
  res.json({ success: true, testimonials })
})

export const updateTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json({ success: true, testimonial })
})

export const deleteTestimonial = asyncHandler(async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await ContactMessage.find().sort({ createdAt: -1 })
  res.json({ success: true, contacts })
})

export const getInterests = asyncHandler(async (req, res) => {
  const interests = await InterestRegistration.find().sort({ createdAt: -1 })
  res.json({ success: true, interests })
})

export const getSubscribers = asyncHandler(async (req, res) => {
  const subscribers = await NewsletterSubscriber.find().sort({ createdAt: -1 })
  res.json({ success: true, subscribers })
})

export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 })
  res.json({ success: true, courses })
})

export const createCourse = asyncHandler(async (req, res) => {
  const course = await Course.create(req.body)
  res.status(201).json({ success: true, course })
})

export const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true })
  res.json({ success: true, course })
})

export const deleteCourse = asyncHandler(async (req, res) => {
  await Course.findOneAndDelete({ slug: req.params.slug })
  res.json({ success: true })
})
