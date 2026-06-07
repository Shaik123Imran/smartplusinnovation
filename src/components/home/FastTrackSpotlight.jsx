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
      className="scroll-mt-24 section-block bg-gradient-to-b from-white via-secondary/[0.02] via-emerald/[0.01] to-accent/[0.02] border-y border-primary/5 relative overflow-hidden"
      aria-labelledby="fast-track-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-primary/10 via-emerald/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-accent/10 via-rose/5 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary via-secondary to-emerald text-white text-sm font-semibold shadow-lg shadow-primary/25">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fast Track
            </span>
            <h2 id="fast-track-heading" className="section-title mt-4">
              <span className="section-title-line">Accelerate your career.</span>
              <span className="section-title-line mt-2 sm:mt-3">Master skills in weeks.</span>
            </h2>
            <p className="section-subtitle mt-3 max-w-none">
              Master new skills in just 10 to 12 weeks! Our fast track courses are perfect for levelling up quickly without getting tied down to a long term program.
            </p>
          </div>
          <Button to="/programs?track=fast" variant="outline" size="lg" className="shrink-0 self-start lg:self-auto hover:shadow-xl hover:shadow-primary/15 transition-all duration-300">
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
                  className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm border border-gray-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:shadow-secondary/5 hover:border-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-emerald/10 px-2.5 py-1 text-xs font-bold text-primary border border-primary/10">
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
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-sm font-medium text-primary/60 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                      {weeks <= 6 ? 'Quick start' : 'Enroll'}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="grid sm:grid-cols-3 gap-4 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-white to-emerald/[0.03] border border-primary/10 p-6 shadow-sm">
          {[
            { title: 'Self-paced learning', desc: 'Recorded lessons + live doubt sessions on your schedule.', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: '4–10 week completion', desc: 'Focused curriculum without the long bootcamp timeline.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            { title: 'Same certification', desc: 'Industry-recognized certificate when you finish.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
          ].map((item) => (
            <div key={item.title} className="text-center sm:text-left p-3 rounded-xl hover:bg-white/60 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-emerald/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
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
