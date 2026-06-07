import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Global Network',
    description: 'Connect with 10,000+ learners and professionals worldwide',
    to: '/about',
    cta: 'View community stories',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Get help anytime from mentors and community members',
    to: '/contact',
    cta: 'Contact support',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Live Sessions',
    description: 'Weekly live Q&A and project review sessions',
    to: '/programs',
    cta: 'View live programs',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Job Assistance',
    description: 'Resume reviews, mock interviews, and job referrals',
    to: '/faq',
    cta: 'Explore career support',
  },
]

function Community({ onContactClick }) {
  const navigate = useNavigate()

  const handleFeatureClick = (feature) => {
    if (feature.to) {
      navigate(feature.to)
    }
  }

  return (
    <section className="section-block bg-gradient-to-b from-white via-accent/[0.02] via-emerald/[0.01] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10 lg:gap-12">
          <header className="section-header-center mb-0">
            <span className="section-eyebrow bg-gradient-to-r from-accent/10 to-rose/10 text-accent border border-accent/10 shadow-sm">
              Why Choose Us
            </span>
            <h2 className="section-title">
              <span className="section-title-line">Join Our Thriving</span>
              <span className="section-title-accent bg-gradient-to-r from-accent via-rose to-emerald bg-clip-text text-transparent">
                Learning Community
              </span>
            </h2>
            <p className="section-subtitle-center max-w-2xl mx-auto">
              Be part of a supportive ecosystem that nurtures your growth, connects you with industry experts, and opens doors to exciting opportunities.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => handleFeatureClick(feature)}
                className="group text-left w-full min-h-[7.5rem] p-5 sm:p-6 rounded-xl bg-white shadow-sm border border-gray-100/80 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 hover:shadow-secondary/5 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:shadow-lg group-hover:shadow-primary/25">
                    <span className="text-primary group-hover:text-white transition-colors duration-300">{feature.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <h4 className="font-bold text-text leading-snug group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-text/60 text-sm leading-relaxed">{feature.description}</p>
                    {feature.cta && (
                      <p className="text-primary text-xs font-semibold pt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                        {feature.cta} →
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button to="/about" variant="secondary" size="lg" className="shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 hover:shadow-emerald/20 transition-all duration-300">
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={onContactClick} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
