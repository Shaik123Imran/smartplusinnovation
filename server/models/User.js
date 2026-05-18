import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true, default: '' },
    password: { type: String, select: false },
    googleId: { type: String, sparse: true },
    avatar: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    enrolledCourses: [{ type: String }],
    termsAccepted: { type: Boolean, default: false },
    termsAcceptedAt: { type: Date },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password') || !this.password) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false
  return bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.password
  delete obj.resetPasswordToken
  delete obj.resetPasswordExpire
  obj.displayName = obj.fullName
  return obj
}

export default mongoose.model('User', userSchema)
