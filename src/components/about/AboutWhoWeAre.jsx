import { whoWeAreContent } from '../../data/aboutPage'
import { AboutSectionHeader } from './aboutIcons'

function AboutWhoWeAre() {
  return (
    <section className="section-block bg-gradient-to-br from-primary/5 via-white to-secondary/5" aria-labelledby="about-who-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AboutSectionHeader
              eyebrow="Who We Are"
              title="A Catalyst for Change in Education"
              center={false}
            />
            {whoWeAreContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-text/70 text-lg leading-relaxed ${index === 0 ? 'mb-6' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" aria-hidden />
            <div className="relative bg-white rounded-3xl border border-text/10 p-8 lg:p-10 shadow-xl">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-text/10 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Educators · Innovators · Experts
                </p>
                <p className="text-text/60 text-sm max-w-xs leading-relaxed">
                  United to empower learners with premier skills and unmatched opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutWhoWeAre
