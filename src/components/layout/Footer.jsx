import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import { TermsPolicyLink, PrivacyPolicyLink } from '../legal/LegalPolicyLink'

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Quote', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
]

const supportLinks = [{ name: 'Contact Us', href: '/contact' }]

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState(null)
  const { subscribe, programs } = useData()

  const programLinks = useMemo(() => {
    if (programs.length === 0) {
      return [{ name: 'All Programs', href: '/programs' }]
    }
    return programs.slice(0, 6).map((p) => ({
      name: p.title,
      href: `/programs/${p.id}`,
    }))
  }, [programs])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setSubscribeStatus('loading')
    const result = await subscribe(email)
    
    if (result.success) {
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus(null), 3000)
    } else {
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus(null), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-[#0a0f2c] via-[#0d1333] to-[#0a1028] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 via-emerald/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-rose/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src="/assets/edugram-logo.jpg" alt="EduGram Technologies" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Empowering the next generation of tech professionals with industry-leading education and career support.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <p className="text-white font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 focus:shadow-lg focus:shadow-secondary/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="px-4 py-2 bg-gradient-to-r from-primary via-secondary to-emerald hover:shadow-xl hover:shadow-primary/25 hover:shadow-secondary/15 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5"
                >
                  {subscribeStatus === 'loading' ? '...' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2">Successfully subscribed!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Already subscribed or error occurred.</p>
              )}
            </form>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-secondary to-emerald bg-clip-text text-transparent">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/50 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/50 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-accent to-rose bg-clip-text text-transparent">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/50 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <PrivacyPolicyLink className="text-white/50 hover:text-primary font-normal transition-colors duration-200" />
              </li>
              <li>
                <TermsPolicyLink className="text-white/50 hover:text-primary font-normal transition-colors duration-200" />
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-primary to-emerald bg-clip-text text-transparent">Contact</h4>
              <a href="mailto:Contact@edugramtechnologies.in" className="text-white/50 hover:text-primary transition-colors duration-200 text-sm block">Contact@edugramtechnologies.in</a>
              <a href="tel:+919036284010" className="text-white/50 hover:text-primary transition-colors duration-200 text-sm block">+91-9036284010</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} EduGram Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <PrivacyPolicyLink className="text-white/40 hover:text-primary text-sm transition-colors duration-200" />
              <TermsPolicyLink className="text-white/40 hover:text-primary text-sm transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
