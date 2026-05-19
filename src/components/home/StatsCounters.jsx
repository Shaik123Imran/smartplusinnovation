import { stats as companyStats } from '../../data/team'

const iconMap = {
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
}

function StatsCounters() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 max-w-xs w-full"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                {iconMap.building}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mb-1">{stat.number}</div>
              <div className="text-text/60 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounters
