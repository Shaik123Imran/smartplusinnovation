import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import { getDurationWeeks } from '../../utils/fastTrack'
import Button from '../common/Button'

function FastTrackSpotlight() {
  const { fastTrackPrograms } = useData()

  if (!fastTrackPrograms?.length) return null

  return (
    <section
      id="fast-track"
      className="scroll-mt-24 section-block bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-y border-primary/10"
      aria-labelledby="fast-track-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-md shadow-primary/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fast Track
            </span>
            <h2 id="fast-track-heading" className="section-title mt-4">
              <span className="section-title-line">Shorter programs.</span>
              <span className="section-title-accent bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Learn at your pace.
              </span>
            </h2>
            <p className="section-subtitle mt-3 max-w-none">
              Intensive {fastTrackPrograms.length} courses designed to finish in 4–10 weeks — ideal if you want
              skills quickly without a long-term commitment.
            </p>
          </div>
          <Button to="/programs?track=fast" variant="outline" size="lg" className="shrink-0 self-start lg:self-auto">
            View all Fast Track programs
          </Button>
        </div>

        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 mb-8">
          {fastTrackPrograms.map((program) => {
            const weeks = getDurationWeeks(program.duration)
            return (
              <li key={program.id}>
                <Link
                  to={`/programs/${program.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-white bg-white/90 p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="inline-flex items-center rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      {program.duration}
                    </span>
                    <span className="text-xs font-medium text-text/50 whitespace-nowrap">
                      Fast Track
                    </span>
                  </div>
                  <h3 className="font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-text/60 line-clamp-2 flex-1">
                    {program.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm font-semibold text-primary">
                      ₹{program.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm font-medium text-text/50 group-hover:text-primary transition-colors">
                      {weeks <= 6 ? 'Quick start →' : 'Enroll →'}
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="grid sm:grid-cols-3 gap-4 rounded-2xl bg-white/80 border border-primary/10 p-6">
          {[
            { title: 'Self-paced learning', desc: 'Recorded lessons + live doubt sessions on your schedule.' },
            { title: '4–10 week completion', desc: 'Focused curriculum without the long bootcamp timeline.' },
            { title: 'Same certification', desc: 'Industry-recognized certificate when you finish.' },
          ].map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <p className="font-semibold text-text text-sm">{item.title}</p>
              <p className="text-xs text-text/60 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FastTrackSpotlight
