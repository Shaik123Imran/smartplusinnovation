import express from 'express'
import { protect, admin } from '../middleware/auth.js'
import {
  getDashboardStats,
  getUsers,
  deleteUser,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
  getContacts,
  getInterests,
  getSubscribers,
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/adminController.js'

const router = express.Router()

router.use(protect, admin)

router.get('/stats', getDashboardStats)
router.get('/users', getUsers)
router.delete('/users/:id', deleteUser)
router.get('/testimonials', getAllTestimonials)
router.patch('/testimonials/:id', updateTestimonial)
router.delete('/testimonials/:id', deleteTestimonial)
router.get('/contacts', getContacts)
router.get('/interests', getInterests)
router.get('/subscribers', getSubscribers)
router.get('/courses', getAllCourses)
router.post('/courses', createCourse)
router.put('/courses/:slug', updateCourse)
router.delete('/courses/:slug', deleteCourse)

export default router
