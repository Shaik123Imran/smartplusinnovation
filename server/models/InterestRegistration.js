import mongoose from 'mongoose'

const interestRegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    city: { type: String, default: '' },
    courseType: { type: String, default: '' },
    message: { type: String, default: '' },
    source: { type: String, default: 'register-interest' },
    status: { type: String, enum: ['new', 'contacted', 'enrolled'], default: 'new' },
  },
  { timestamps: true }
)

export default mongoose.model('InterestRegistration', interestRegistrationSchema)
