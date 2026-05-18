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
    <section className="section-block bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative order-2 lg:order-1 w-full min-w-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform -rotate-6 opacity-20 pointer-events-none" aria-hidden />
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-6 sm:p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl text-text leading-tight">50+</h4>
                    <p className="text-text/60 text-sm mt-1">Expert Mentors</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg sm:mt-8">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl text-text leading-tight">200+</h4>
                    <p className="text-text/60 text-sm mt-1">Partner Companies</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl text-text leading-tight">30+</h4>
                    <p className="text-text/60 text-sm mt-1">Countries Reached</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg sm:mt-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-2xl text-text leading-tight">5000+</h4>
                    <p className="text-text/60 text-sm mt-1">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full min-w-0 flex flex-col gap-10 lg:gap-12">
            <header className="space-y-4">
              <span className="section-eyebrow bg-secondary/10 text-secondary">
                Why Choose Us
              </span>
              <h2 className="section-title">
                <span className="section-title-line">Join Our Thriving</span>
                <span className="section-title-accent bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Learning Community
                </span>
              </h2>
              <p className="section-subtitle mt-0 max-w-xl">
                Be part of a supportive ecosystem that nurtures your growth, connects you with industry experts, and opens doors to exciting opportunities.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => handleFeatureClick(feature)}
                  className="group text-left w-full min-h-[7.5rem] p-4 sm:p-5 rounded-xl border border-transparent hover:border-primary/15 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <span className="text-primary group-hover:text-white transition-colors">{feature.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="font-bold text-text leading-snug group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-text/60 text-sm leading-relaxed">{feature.description}</p>
                      {feature.cta && (
                        <p className="text-primary text-xs font-semibold pt-1 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          {feature.cta} →
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Button to="/about" variant="secondary" size="lg">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={onContactClick}>
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
