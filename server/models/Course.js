import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, default: 'All Levels' },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    category: { type: String, required: true },
    skills: [{ type: String }],
    features: [{ type: String }],
    instructor: {
      name: String,
      title: String,
      experience: String,
    },
    rating: { type: Number, default: 4.8 },
    students: { type: Number, default: 0 },
    image: { type: String, default: '' },
    imageFile: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    isPublished: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Course', courseSchema)
