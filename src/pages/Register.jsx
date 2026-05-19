import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import { Input } from '../components/common/Input'
import GoogleSignInButton from '../components/auth/GoogleSignInButton'
import { usePageTitle } from '../hooks/usePageTitle'
import toast from 'react-hot-toast'
import TermsAgreementCheckbox from '../components/forms/TermsAgreementCheckbox'

function Register() {
  usePageTitle('Create Account')
  const { register, googleLogin, error: authError } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [termsError, setTermsError] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!termsAccepted) {
      setTermsError('Please accept the Terms & Conditions to continue.')
      return
    }
    setTermsError('')
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    setError('')

    const result = await register({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      termsAccepted: true,
    })

    setLoading(false)
    if (result.success) {
      toast.success('Account created successfully')
      navigate('/dashboard')
    } else {
      setError(result.error || 'Failed to create account')
    }
  }

  const handleGoogleCredential = async (credential) => {
    setLoading(true)
    setError('')
    const result = await googleLogin(credential)
    setLoading(false)

    if (result.success) {
      toast.success('Signed up with Google')
      navigate('/dashboard')
    } else {
      setError(result.error || 'Failed to sign up with Google')
    }
  }

  return (
    <Layout hideAnnouncement>
      <section className="page-hero min-h-screen">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">EG</span>
              </div>
            </Link>
            <h1 className="text-3xl font-extrabold text-text mb-2">Create Your Account</h1>
            <p className="text-text/60">Start your learning journey today</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <GoogleSignInButton onSuccess={handleGoogleCredential} disabled={loading} label="signup_with" />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-text/50">or sign up with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                required
              />
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <TermsAgreementCheckbox
                id="register-terms"
                agree={termsAccepted}
                onAgreeChange={(checked) => {
                  setTermsAccepted(checked)
                  if (checked) setTermsError('')
                }}
                error={termsError}
              />

              {(error || authError) && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error || authError}
                </div>
              )}

              <Button type="submit" loading={loading} className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <p className="text-center mt-6 text-text/60">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register
