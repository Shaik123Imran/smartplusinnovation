import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import connectDB from '../config/db.js'
import User from '../models/User.js'
import Course from '../models/Course.js'
import Testimonial from '../models/Testimonial.js'
import { programs } from '../../src/data/programs.js'
import { testimonials } from '../../src/data/testimonials.js'

async function seed() {
  await connectDB()

  console.log('Clearing existing data...')
  await Promise.all([User.deleteMany({}), Course.deleteMany({}), Testimonial.deleteMany({})])

  const featuredIds = programs.slice(0, 6).map((p) => p.id)

  const courseDocs = programs.map((p) => ({
    slug: p.id,
    title: p.title,
    shortDescription: p.shortDescription,
    description: p.description,
    duration: p.duration,
    level: p.level,
    price: p.price,
    originalPrice: p.originalPrice,
    category: p.category,
    skills: p.skills,
    features: p.features,
    instructor: p.instructor,
    rating: p.rating,
    students: p.students,
    image: p.image,
    imageFile: p.imageFile || '',
    color: p.color,
    isPublished: true,
    isFeatured: featuredIds.includes(p.id),
  }))

  await Course.insertMany(courseDocs)
  console.log(`Seeded ${courseDocs.length} courses`)

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
