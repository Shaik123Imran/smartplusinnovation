import express from 'express'
import { getCourses, getCourseBySlug, getCategories } from '../controllers/courseController.js'

const router = express.Router()

router.get('/', getCourses)
router.get('/categories', getCategories)
router.get('/:slug', getCourseBySlug)

export default router
