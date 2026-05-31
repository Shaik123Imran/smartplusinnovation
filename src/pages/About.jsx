import Layout from '../components/layout/Layout'
import AboutMissionSection from '../components/about/AboutMissionSection'
import AboutWhoWeAre from '../components/about/AboutWhoWeAre'
import AboutWhatWeDo from '../components/about/AboutWhatWeDo'
import AboutCoreValues from '../components/about/AboutCoreValues'
import AboutCoreTeam from '../components/about/AboutCoreTeam'
import AboutLegacyStory from '../components/about/AboutLegacyStory'
import { values } from '../data/team'
import { usePageTitle } from '../hooks/usePageTitle'

const DEMO_VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4'

function About() {
  usePageTitle('About Us')

  const iconMap = {
    star: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    rocket: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }

  return (
    <Layout>
      {/* Hero — existing */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="max-w-3xl mx-auto section-header-center mb-0">
            <span className="section-eyebrow bg-primary/10 text-primary">About Us</span>
            <h1 className="page-title">
              <span className="section-title-line">Future-Proof Your Career With</span>
              <span className="page-title-accent">AI-Enhanced Learning</span>
            </h1>
            <p className="section-subtitle-center max-w-none">
              EduGram Technologies Pvt Ltd is a dynamic EdTech platform committed to delivering the ultimate
              next-generation advantage. By merging cutting-edge innovation with educational excellence, we actively
              close the divide between traditional academic theory and modern industry requirements. Our AI-integrated
              curriculums are purposefully designed to equip students, recent graduates, and seasoned professionals
              with the practical experience and advanced skills necessary to succeed in today&apos;s digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* New: Our Mission cards */}
      <AboutMissionSection />

      {/* New: Who We Are */}
      <AboutWhoWeAre />

      {/* New: What We Do */}
      <AboutWhatWeDo />

      {/* New: Our Core Values */}
      <AboutCoreValues />

      {/* New: Meet Our Core Team */}
      <AboutCoreTeam />

      {/* Existing: mission narrative, vision, video */}
      <AboutLegacyStory videoUrl={DEMO_VIDEO_URL} />

      {/* Existing: founding values */}
      <section className="section-block bg-background" aria-labelledby="about-values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow bg-primary/10 text-primary">Founding Principles</span>
            <h2 id="about-values-heading" className="text-3xl lg:text-4xl font-extrabold text-text mb-4 mt-4">
              Our Values
            </h2>
            <p className="text-text/60 max-w-2xl mx-auto">
              These core values guide everything we do at EduGram Technologies Pvt Ltd
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="text-primary group-hover:text-white transition-colors">
                    {iconMap[value.icon]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{value.title}</h3>
                <p className="text-text/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
