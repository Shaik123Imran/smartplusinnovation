import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import { Input } from '../components/common/Input'
import { usePageTitle } from '../hooks/usePageTitle'
import toast from 'react-hot-toast'

function ResetPassword() {
  usePageTitle('Reset Password')
  const { token } = useParams()
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    setLoading(true)
    const result = await resetPassword(token, password)
    setLoading(false)

    if (result.success) {
      toast.success('Password updated successfully')
      navigate('/dashboard', { replace: true })
    } else {
      toast.error(result.error || 'Reset failed')
    }
  }

  return (
    <Layout hideAnnouncement>
      <section className="page-hero min-h-screen">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-2xl font-bold text-text mb-2">Set new password</h1>
            <p className="text-text/60 mb-6 text-sm">Enter your new password below.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="New password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                label="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button type="submit" loading={loading} className="w-full" size="lg">
                Update password
              </Button>
            </form>
            <p className="text-center mt-6 text-sm text-text/60">
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ResetPassword
