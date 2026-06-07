import { whatWeDo } from '../../data/aboutPage'
import { aboutPillarIcons, AboutSectionHeader } from './aboutIcons'

function AboutWhatWeDo() {
  return (
    <section className="section-block bg-white" aria-labelledby="about-what-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSectionHeader
          eyebrow="What We Do"
          title="Career-Accelerating AI-Infused Programs"
          subtitle={whatWeDo.heading}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {whatWeDo.pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="relative flex flex-col rounded-2xl border border-text/10 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-5xl font-extrabold text-primary/5 select-none" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                {aboutPillarIcons[pillar.icon]}
              </div>
              <h3 className="text-xl font-bold text-text mb-3 pr-12">{pillar.title}</h3>
              <p className="text-text/60 text-sm mb-4">{pillar.intro}</p>
              <ul className="space-y-2 mt-auto">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text/75 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutWhatWeDo
