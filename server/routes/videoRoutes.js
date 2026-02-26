import express from 'express'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { cloudinary } from '../config/cloudinary.js'
import Video from '../models/Video.js'

const router = express.Router()

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ensure uploads folder exists (for temporary files)
const uploadDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    cb(null, uniqueSuffix + ext)
  },
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('video/')) {
      return cb(new Error('Only video files are allowed'))
    }
    cb(null, true)
  },
})

// POST /api/videos/upload
router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.status(503).json({ error: 'MongoDB is not configured. Please set MONGODB_URI.' })
    }

    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      return res.status(503).json({ error: 'Cloudinary is not configured. Please set Cloudinary env vars.' })
    }

    const { title, description } = req.body
    const file = req.file

    if (!title || !file) {
      if (file && file.path) fs.unlink(file.path, () => {})
      return res.status(400).json({ error: 'Title and video file are required.' })
    }

    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: 'smartplus_videos',
      resource_type: 'video',
    })

    // Remove local temp file
    fs.unlink(file.path, () => {})

    const video = await Video.create({
      title,
      description,
      videoUrl: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    })

    return res.status(201).json({ success: true, data: video })
  } catch (err) {
    console.error('Video upload error:', err)
    return res.status(500).json({ error: 'Failed to upload video.' })
  }
})

// GET /api/videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 })
    return res.json({ success: true, data: videos })
  } catch (err) {
    console.error('Get videos error:', err)
    return res.status(500).json({ error: 'Failed to fetch videos.' })
  }
})

// DELETE /api/videos/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const video = await Video.findById(id)

    if (!video) {
      return res.status(404).json({ error: 'Video not found.' })
    }

    // Delete from Cloudinary first
    if (video.public_id) {
      try {
        await cloudinary.uploader.destroy(video.public_id, { resource_type: 'video' })
      } catch (cloudErr) {
        console.error('Cloudinary delete error:', cloudErr)
      }
    }

    await video.deleteOne()

    return res.json({ success: true, message: 'Video deleted successfully.' })
  } catch (err) {
    console.error('Delete video error:', err)
    return res.status(500).json({ error: 'Failed to delete video.' })
  }
})

export default router

