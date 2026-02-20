import { useState } from 'react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import { Input, Select } from '../common/Input'
import { sendContactEmail } from '../../services/emailjs'

const COURSE_OPTIONS = [
  { value: '', label: 'Select course type' },
  { value: 'web-development', label: 'Full Stack Web Development' },
  { value: 'data-science', label: 'Data Science & Analytics' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'cloud', label: 'Cloud Computing & DevOps' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'ai', label: 'AI & Deep Learning' },
  { value: 'other', label: 'Other / Not sure yet' },
]

function WorkshopRegistration() {
  const { submitContact } = useData()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    courseType: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      await submitContact({ ...formData, source: 'home-workshop-registration' })

      try {
        await sendContactEmail({
          name: formData.name,
          email: formData.email,
          message: `Workshop registration\nPhone: ${formData.phone}\nCity: ${formData.city}\nCourse Type: ${formData.courseType}`,
        })
      } catch (err) {
        console.log('Workshop registration email not sent (optional):', err)
      }

      setStatus({ type: 'success', message: 'Registration submitted! We will reach out to you soon.' })
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        courseType: '',
      })
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="py-16 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/10">
              Special Workshop
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Become <span className="text-primary">Industry Ready</span> with our
              <span className="block text-secondary mt-1">Smart Plus Innovation Programs</span>
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-white/80">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>Learn the foundations and advanced concepts with hands-on projects.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>Get guidance from expert mentors to choose the right course for you.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>Secure your seat and we will call you back with the next steps.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-text">
            <h3 className="text-xl font-bold mb-2 text-text">Register your interest</h3>
            <p className="text-text/60 text-sm mb-6">
              Share your details and our team will get back to you with batch dates, fees, and curriculum.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <Input
                label="Email ID"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Hyderabad"
                required
              />
              <Select
                label="Course Type"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                options={COURSE_OPTIONS}
                required
              />

              {status?.type === 'success' && (
                <p className="text-sm text-green-600 text-center">{status.message}</p>
              )}
              {status?.type === 'error' && (
                <p className="text-sm text-red-600 text-center">{status.message}</p>
              )}

              <Button
                type="submit"
                loading={status?.type === 'loading'}
                className="w-full justify-center"
              >
                Register now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkshopRegistration

