import 'dotenv/config'
import mongoose from 'mongoose'
import connectDB from '../config/db.js'
import User from '../models/User.js'
import Course from '../models/Course.js'
import Testimonial from '../models/Testimonial.js'
import { publishedCourseEntries } from '../../src/data/courses/catalog.js'
import { buildAllMongoCoursesFromCatalog } from '../../src/data/courses/buildMongoCourse.js'
import '../../src/data/courses/index.js'
import { testimonials } from '../../src/data/testimonials.js'

async function seed() {
  await connectDB()

  console.log('Clearing existing data...')
  await Promise.all([User.deleteMany({}), Course.deleteMany({}), Testimonial.deleteMany({})])

  const courseDocs = buildAllMongoCoursesFromCatalog(publishedCourseEntries)

  if (courseDocs.length > 0) {
    await Course.insertMany(courseDocs)
  }
  console.log(`Seeded ${courseDocs.length} course(s) from catalog`)

  const testimonialDocs = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.content,
    rating: t.rating,
    image: t.image,
    program: t.program || '',
    isApproved: true,
    isFeatured: true,
  }))

  await Testimonial.insertMany(testimonialDocs)
  console.log(`Seeded ${testimonialDocs.length} testimonials`)

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@edugram.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456'

  await User.create({
    fullName: process.env.ADMIN_NAME || 'EduGram Admin',
    email: adminEmail,
    phone: '',
    password: adminPassword,
    role: 'admin',
    termsAccepted: true,
    termsAcceptedAt: new Date(),
  })

  console.log(`Admin user created: ${adminEmail}`)
  console.log('Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
