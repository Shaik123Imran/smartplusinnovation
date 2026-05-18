import User from '../models/User.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const updateProfile = asyncHandler(async (req, res) => {
  const { fullName, phone, avatar } = req.body
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { fullName, phone, avatar },
    { new: true, runValidators: true }
  )
  res.json({ success: true, user: user.toJSON() })
})

export const enrollCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.body
  const user = req.user

  if (!user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId)
    await user.save()
  }

  res.json({ success: true, user: user.toJSON() })
})

export const unenrollCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params
  const user = req.user

  user.enrolledCourses = user.enrolledCourses.filter((id) => id !== courseId)
  await user.save()

  res.json({ success: true, user: user.toJSON() })
})

export const getMySubmissions = asyncHandler(async (req, res) => {
  const InterestRegistration = (await import('../models/InterestRegistration.js')).default
  const ContactMessage = (await import('../models/ContactMessage.js')).default

  const [interests, contacts] = await Promise.all([
    InterestRegistration.find({ email: req.user.email }).sort({ createdAt: -1 }).limit(20),
    ContactMessage.find({ email: req.user.email }).sort({ createdAt: -1 }).limit(20),
  ])

  res.json({ success: true, interests, contacts })
})
