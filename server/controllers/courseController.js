import Course from '../models/Course.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const getCourses = asyncHandler(async (req, res) => {
  const filter = { isPublished: true }
  if (req.query.category && req.query.category !== 'all') {
    filter.category = req.query.category
  }
  if (req.query.featured === 'true') {
    filter.isFeatured = true
  }

  const courses = await Course.find(filter).sort({ createdAt: -1 })
  res.json({ success: true, courses })
})

export const getCourseBySlug = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug, isPublished: true })
  if (!course) {
    res.status(404)
    throw new Error('Course not found')
  }
  res.json({ success: true, course })
})

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Course.distinct('category')
  res.json({
    success: true,
    categories: [
      { id: 'all', name: 'All Programs' },
      ...categories.map((id) => ({ id, name: id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) })),
    ],
  })
})
