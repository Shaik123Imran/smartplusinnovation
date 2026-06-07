import { useState, useMemo } from 'react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import { Input, Select } from '../common/Input'
import TermsAgreementCheckbox from './TermsAgreementCheckbox'
import { sendContactEmail } from '../../services/emailjs'
import { openWhatsAppRegistration } from '../../services/whatsapp'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  courseType: '',
}

function RegisterInterestForm({ formId = 'register-interest-form', onSuccess }) {
  const { submitInterest, programs } = useData()

  const courseOptions = useMemo(
    () => [
      { value: '', label: 'Select course type' },
      ...programs.map((p) => ({ value: p.id, label: p.title })),
      { value: 'other', label: 'Other / Not sure yet' },
    ],
    [programs]
  )
  const [formData, setFormData] = useState(initialFormState)
  const [agree, setAgree] = useState(false)
  const [termsError, setTermsError] = useState('')
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (termsError) setTermsError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!agree) {
      setTermsError('Please accept the Terms & Conditions to continue.')
      setStatus(null)
      return
    }

    setTermsError('')
    setStatus({ type: 'loading' })

    try {
      await submitInterest({ ...formData, source: 'home-workshop-registration' })

      try {
        await sendContactEmail({
          name: formData.name,
          email: formData.email,
          message: `Register interest\nPhone: ${formData.phone}\nCity: ${formData.city}\nCourse Type: ${formData.courseType}`,
        })
      } catch (err) {
        console.log('Registration email not sent (optional):', err)
      }

      const courseLabel =
        courseOptions.find((o) => o.value === formData.courseType)?.label || formData.courseType
      openWhatsAppRegistration({ ...formData, courseLabel })

      setStatus({
        type: 'success',
        message: 'Registration submitted successfully!',
      })
      setFormData(initialFormState)
      setAgree(false)
      onSuccess?.()
    } catch (err) {
      setStatus({ type: 'error', message: err.response?.data?.message || 'Something went wrong. Please try again.' })
    }
  }

  const isLoading = status?.type === 'loading'

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        required
        autoComplete="name"
      />
      <Input
        label="Email ID"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
        required
        autoComplete="email"
      />
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+91 98765 43210"
        required
        autoComplete="tel"
      />
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Hyderabad"
        required
        autoComplete="address-level2"
      />
      <Select
        label="Course Type"
        name="courseType"
        value={formData.courseType}
        onChange={handleChange}
        options={courseOptions}
        required
      />

      <TermsAgreementCheckbox
        id={`${formId}-terms`}
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

      <Button
        type="submit"
        loading={isLoading}
        disabled={!agree || isLoading}
        className="w-full justify-center"
        size="lg"
      >
        Register now
      </Button>
    </form>
  )
}

export default RegisterInterestForm
