import { useState } from 'react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const { subscribe } = useData()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    const result = await subscribe(email)

    if (result.success) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }

    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section className="section-block bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-emerald/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-4">
            Stay Updated with Latest Tech Trends
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
            Subscribe to our newsletter and get weekly insights, course updates, and career tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-text focus:outline-none focus:ring-4 focus:ring-white/40 shadow-lg shadow-black/10"
              required
            />
            <Button 
              type="submit" 
              variant="outline" 
              size="lg"
              loading={status === 'loading'}
              className="bg-white text-primary border-white hover:bg-white/95 hover:text-primary shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-white font-medium bg-white/10 rounded-lg px-4 py-2 inline-block backdrop-blur-sm">
              🎉 Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-white/80 bg-white/10 rounded-lg px-4 py-2 inline-block backdrop-blur-sm">
              You&apos;re already subscribed or something went wrong. Please try again.
            </p>
          )}

          <p className="mt-4 text-white/60 text-sm">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
