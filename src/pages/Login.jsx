import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import { Input } from '../components/common/Input'
import Modal from '../components/common/Modal'
import GoogleSignInButton from '../components/auth/GoogleSignInButton'
import { usePageTitle } from '../hooks/usePageTitle'
import toast from 'react-hot-toast'

function Login() {
  usePageTitle('Sign In')
  const { login, googleLogin, forgotPassword, error: authError } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/dashboard'

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetStatus, setResetStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await login(formData.email, formData.password)
    setLoading(false)

    if (result.success) {
      toast.success('Welcome back!')
      navigate(from, { replace: true })
    } else {
      setError(result.error || 'Invalid email or password')
    }
  }

  const handleGoogleCredential = async (credential) => {
    setLoading(true)
    setError('')
    const result = await googleLogin(credential)
    setLoading(false)

    if (result.success) {
      toast.success('Signed in with Google')
      navigate(from, { replace: true })
    } else {
      setError(result.error || 'Failed to login with Google')
      toast.error(result.error)
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!resetEmail) {
      setResetStatus({ type: 'error', message: 'Please enter your email address' })
      return
    }

    setResetStatus({ type: 'loading' })
    const result = await forgotPassword(resetEmail)

    if (result.success) {
      setResetStatus({ type: 'success', message: result.message })
      toast.success(result.message)
    } else {
      setResetStatus({ type: 'error', message: result.error })
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
            <h1 className="text-3xl font-extrabold text-text mb-2">Welcome Back</h1>
            <p className="text-text/60">Sign in to continue your learning journey</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <GoogleSignInButton onSuccess={handleGoogleCredential} disabled={loading} label="continue_with" />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-text/50">or sign in with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-text/70">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(true)
                    setResetEmail(formData.email)
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {(error || authError) && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error || authError}
                </div>
              )}

              <Button type="submit" loading={loading} className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            <p className="text-center mt-6 text-text/60">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showForgotPassword}
        onClose={() => {
          setShowForgotPassword(false)
          setResetStatus(null)
          setResetEmail('')
        }}
        title="Reset Password"
      >
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <p className="text-text/60 text-sm">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>
          <Input
            label="Email Address"
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          {resetStatus?.type === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {resetStatus.message}
            </div>
          )}
          {resetStatus?.type === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {resetStatus.message}
            </div>
          )}
          <Button type="submit" loading={resetStatus?.type === 'loading'} className="w-full">
            Send Reset Link
          </Button>
        </form>
      </Modal>
    </Layout>
  )
}

export default Login
