import { missionIntro, missionPoints } from '../../data/aboutPage'
import { aboutMissionIcons, AboutSectionHeader } from './aboutIcons'

function AboutMissionSection() {
  return (
    <section className="section-block bg-white" aria-labelledby="about-mission-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSectionHeader
          eyebrow="Our Mission"
          title="Shaping Tomorrow's Professionals"
          subtitle={missionIntro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {missionPoints.map((point) => (
            <article
              key={point.id}
              className="group relative bg-white rounded-2xl border border-text/10 p-6 lg:p-7 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/15 to-emerald/15 flex items-center justify-center text-primary mb-5 group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/25">
                {aboutMissionIcons[point.icon]}
              </div>
              <h3 className="text-lg font-bold text-text mb-3">{point.title}</h3>
              <p className="text-text/65 text-sm leading-relaxed">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMissionSection
