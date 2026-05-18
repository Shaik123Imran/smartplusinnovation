import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    image: { type: String, default: '' },
    program: { type: String, default: '' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isApproved: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Testimonial', testimonialSchema)
