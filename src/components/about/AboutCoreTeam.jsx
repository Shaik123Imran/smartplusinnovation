import { coreTeam } from '../../data/aboutPage'
import { AboutSectionHeader } from './aboutIcons'

function AboutCoreTeam() {
  return (
    <section className="section-block bg-white" aria-labelledby="about-core-team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSectionHeader
          eyebrow="Leadership"
          title="Meet Our Core Team"
          subtitle="The leaders and specialists driving EduGram Technologies forward."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreTeam.map((member) => (
            <article
              key={member.id}
              className="group bg-white rounded-2xl border border-text/10 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                {member.avatar}
              </div>
              <h3 className="text-lg font-bold text-text mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3 leading-snug">{member.role}</p>
              <p className="text-text/60 text-sm leading-relaxed">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCoreTeam
