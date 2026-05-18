import express from 'express'
import { protect } from '../middleware/auth.js'
import { updateProfile, enrollCourse, unenrollCourse, getMySubmissions } from '../controllers/userController.js'

const router = express.Router()

router.use(protect)

router.put('/profile', updateProfile)
router.post('/enroll', enrollCourse)
router.delete('/enroll/:courseId', unenrollCourse)
router.get('/submissions', getMySubmissions)

export default router
