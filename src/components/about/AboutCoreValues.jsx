import { coreValues } from '../../data/aboutPage'
import { aboutCoreValueIcons, AboutSectionHeader } from './aboutIcons'

function AboutCoreValues() {
  return (
    <section className="section-block bg-gradient-to-b from-white via-primary/[0.02] to-background" aria-labelledby="about-core-values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSectionHeader
          eyebrow="Our Core Values"
          title="What Defines EduGram"
          subtitle="The principles that guide every curriculum, workshop, and learner interaction."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <article
              key={value.id}
              className="group rounded-2xl border border-text/10 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:border-primary/25 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center mb-4 group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:text-white transition-all duration-300 shadow-sm">
                {aboutCoreValueIcons[value.icon]}
              </div>
              <h3 className="text-base font-bold text-text mb-2 leading-snug">{value.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCoreValues
