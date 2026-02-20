import { useState } from 'react'
import Modal from '../common/Modal'
import { Input, Textarea, Select } from '../common/Input'
import Button from '../common/Button'
import { useData } from '../../context/DataContext'
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

function ContactQuickForm({ open, onClose }) {
  const { submitContact } = useData()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    courseType: '',
    message: '',
  })

  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agree) {
      setStatus({ type: 'error', message: 'Please accept the terms and conditions to continue.' })
      return
    }

    setStatus({ type: 'loading' })

    try {
      // Save contact in app storage
      await submitContact(formData)

      // Try to send notification email (safe even if EmailJS not configured)
      try {
        await sendContactEmail({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\nCity: ${formData.city}\nCourse Type: ${formData.courseType}\n\nMessage:\n${formData.message || 'N/A'}`,
        })
      } catch (err) {
        console.log('Quick contact email could not be sent:', err)
      }

      setStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' })
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        courseType: '',
        message: '',
      })
      setAgree(false)

      setTimeout(() => {
        setStatus(null)
        onClose()
      }, 2000)
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <Modal isOpen={open} onClose={onClose} title="Contact Us">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
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
        </div>

        <div className="grid md:grid-cols-2 gap-4">
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
        </div>

        <Select
          label="Course Type"
          name="courseType"
          value={formData.courseType}
          onChange={handleChange}
          options={COURSE_OPTIONS}
          required
        />

        <Textarea
          label="Message (optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share any specific goals or questions..."
          rows={3}
        />

        <div className="space-y-2 border-t border-gray-100 pt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
            <span className="text-sm text-text/70">
              I agree to the{' '}
              <span className="font-semibold text-primary">Terms & Conditions</span> and{' '}
              <span className="font-semibold text-primary">Privacy Policy</span>. You can review the full
              documents from the links in the footer.
            </span>
          </label>
          <p className="text-xs text-text/50">
            Note: Please replace this text with your exact Terms & Conditions and Privacy Policy content from your
            documents.
          </p>
        </div>

        {status?.type === 'success' && (
          <p className="text-sm text-green-600 text-center">{status.message}</p>
        )}
        {status?.type === 'error' && (
          <p className="text-sm text-red-600 text-center">{status.message}</p>
        )}

        <Button
          type="submit"
          loading={status?.type === 'loading'}
          className="w-full"
        >
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default ContactQuickForm

