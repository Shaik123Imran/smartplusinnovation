import { useState, useMemo } from 'react'
import Modal from '../common/Modal'
import { Input, Textarea, Select } from '../common/Input'
import Button from '../common/Button'
import TermsAgreementCheckbox from '../forms/TermsAgreementCheckbox'
import { useData } from '../../context/DataContext'
import { sendContactEmail } from '../../services/emailjs'

function ContactQuickForm({ open, onClose }) {
  const { submitContact, programs } = useData()

  const courseOptions = useMemo(
    () => [
      { value: '', label: 'Select course type' },
      ...programs.map((p) => ({ value: p.id, label: p.title })),
      { value: 'other', label: 'Other / Not sure yet' },
    ],
    [programs]
  )

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    courseType: '',
    message: '',
  })

  const [agree, setAgree] = useState(false)
  const [termsError, setTermsError] = useState('')
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agree) {
      setTermsError('Please accept the Terms & Conditions to continue.')
      return
    }

    setTermsError('')
    setStatus({ type: 'loading' })

    try {
      await submitContact(formData)

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

  const isLoading = status?.type === 'loading'

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
            type="tel"
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
          options={courseOptions}
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

        <TermsAgreementCheckbox
          id="contact-quick-terms"
          agree={agree}
          onAgreeChange={(checked) => {
            setAgree(checked)
            if (checked) setTermsError('')
          }}
          error={termsError}
        />

        {status?.type === 'success' && (
          <p className="text-sm text-green-600 text-center" role="status">
            {status.message}
          </p>
        )}
        {status?.type === 'error' && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {status.message}
          </p>
        )}

        <Button type="submit" loading={isLoading} disabled={!agree || isLoading} className="w-full">
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default ContactQuickForm
