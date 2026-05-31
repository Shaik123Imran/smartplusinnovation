import { useState, useEffect, lazy, Suspense } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { usePageMeta } from '../../hooks/usePageMeta'
import { PROGRAM_ROUTES } from '../../config/routes'
import { openWhatsAppChat } from '../../config/whatsapp'
import Button from '../common/Button'
import CurriculumAccordion from './CurriculumAccordion'
import PortfolioShowcase from './PortfolioShowcase'
import BusinessShowcase from './BusinessShowcase'

const ContactQuickForm = lazy(() => import('../home/ContactQuickForm'))

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 lg:mb-12 text-center max-w-3xl mx-auto">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-600 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function CourseDetailView({ program }) {
  const navigate = useNavigate()
  const { user, isEnrolled } = useAuth()
  const [openFaq, setOpenFaq] = useState(0)
  const [contactOpen, setContactOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const enrolled = user && isEnrolled(program.id)
  const courseSlug = program.slug || program.id
  const hero = program.hero || {}
  const about = program.about || {}
  const curriculum = program.curriculum || {}
  const cta = program.cta || {}
  const realTimeProjects = program.realTimeProjects || []
  const projectsSection = program.projectsSection || {}
  const portfolio = program.portfolio || []
  const businessShowcase = program.businessShowcase || []
  const showcaseSection = program.showcaseSection || {}
  const trainingActivities = program.trainingActivities || []
  const trainingSection = program.trainingSection || {}
  const technologiesSection = program.technologiesSection || {}
  const testimonials = program.courseTestimonials || program.testimonials || []
  const heroImageFile =
    hero.imageFile || program.imageFile || (program.image ? `${program.image}.jpg` : null)
  const heroImageSrc = heroImageFile ? `/program-images/${heroImageFile}` : null

  usePageMeta({
    title: program.meta?.title || program.title,
    description: program.meta?.description || program.shortDescription,
  })

  useEffect(() => {
    if (testimonials.length <= 1) return
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(t)
  }, [testimonials.length])

  const handleEnroll = () => {
    if (!user) {
      navigate('/login', { state: { from: PROGRAM_ROUTES.checkout(courseSlug) } })
      return
    }
    navigate(PROGRAM_ROUTES.checkout(courseSlug))
  }

  /** Locked chapter: guests → login; signed-in → checkout directly */
  const handleLockedChapter = () => {
    if (enrolled) return
    if (!user) {
      navigate('/login', { state: { from: PROGRAM_ROUTES.checkout(courseSlug) } })
      return
    }
    navigate(PROGRAM_ROUTES.checkout(courseSlug))
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const waMessage =
    program.whatsappMessage || `Hello EduGram Technologies, I am interested in ${program.title}.`

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-5">
              {hero.badge && (
                <span className="inline-block px-3 py-1 rounded-md border border-neutral-300 text-xs font-semibold text-neutral-700 uppercase tracking-wide">
                  {hero.badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900">
                {hero.title || program.title}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-800 font-medium">
                {hero.subtitle || program.shortDescription}
              </p>
              <p className="text-neutral-600 leading-relaxed max-w-xl">
                {hero.tagline || program.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.duration}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {program.level}
                </span>
                <span className="px-2.5 py-0.5 rounded border border-neutral-300 text-neutral-700 capitalize">
                  {program.category?.replace(/-/g, ' ')}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                {enrolled ? (
                  <Button to="/dashboard" size="lg">
                    Go to Dashboard
                  </Button>
                ) : (
                  <Button type="button" onClick={handleEnroll} size="lg">
                    Enroll Now
                  </Button>
                )}
                <Button type="button" size="lg" variant="outline" onClick={() => openWhatsAppChat(waMessage)}>
                  Talk to Counsellor
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="hidden sm:inline-flex"
                  onClick={() => scrollToSection('curriculum')}
                >
                  View Curriculum
                </Button>
              </div>
            </div>

            <div className="relative">
              {heroImageSrc ? (
                <div className="rounded-lg overflow-hidden border border-neutral-200">
                  <img
                    src={heroImageSrc}
                    alt={program.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                </div>
              ) : (
                <div className="rounded-lg border border-neutral-200 p-6">
                  <div className="flex flex-wrap gap-2">
                    {(program.technologies || []).slice(0, 8).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1.5 rounded border border-neutral-300 text-sm font-medium text-neutral-800"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus — 12 weeks (before About) */}
      <section id="curriculum" className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curriculum"
            title={curriculum.title || 'Course Curriculum'}
            subtitle={curriculum.subtitle}
          />
          <CurriculumAccordion
            items={program.syllabus || []}
            unlocked={enrolled}
            isLoggedIn={Boolean(user)}
            onLockedChapter={handleLockedChapter}
          />
        </div>
      </section>

      {/* About */}
      <section id="about-program" className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About the Program"
            title={about.heading || 'About the Program'}
            subtitle={about.intro}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {(about.sections || []).map((block) => (
              <div key={block.title} className="rounded-lg border border-neutral-200 p-6 lg:p-7">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{block.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Skills Covered" title="What You Will Master" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {(program.skillsCovered || []).map((skill) => (
              <div key={skill.name} className="rounded-lg border border-neutral-200 p-5">
                <h3 className="font-bold text-neutral-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & activities */}
      {trainingActivities.length > 0 && (
        <section className="py-14 lg:py-16 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Interactive Training"
              title={trainingSection.title || 'Training & Activities'}
              subtitle={trainingSection.subtitle}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trainingActivities.map((activity) => (
                <div
                  key={activity.name}
                  className="rounded-lg border border-neutral-200 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                >
                  <h3 className="font-bold text-neutral-900 mb-2">{activity.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Real-time projects */}
      {realTimeProjects.length > 0 && (
        <section className="py-14 lg:py-16 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Hands-On Learning"
              title={projectsSection.title || 'Real-Time Projects'}
              subtitle={projectsSection.subtitle}
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {realTimeProjects.map((project) => (
                <div key={project.title} className="rounded-lg border border-neutral-200 p-6">
                  <h3 className="font-bold text-neutral-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={technologiesSection.eyebrow || 'Tools & Platforms'}
            title={technologiesSection.title || 'Industry-Standard Tech Stack'}
            subtitle={technologiesSection.subtitle}
          />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {(program.technologies || []).map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 rounded-md border border-neutral-300 text-neutral-900 font-medium text-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Features */}
      <section className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Learning Outcomes</h2>
              <ul className="space-y-3">
                {(program.learningOutcomes || []).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-700">
                    <span className="text-neutral-900 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Program Features</h2>
              <ul className="space-y-2">
                {(program.programFeatures || program.features || []).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-neutral-700 border-b border-neutral-100 pb-2 last:border-0"
                  >
                    <span className="text-neutral-900 font-bold">✓</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Career Path" title="Roles You Can Pursue" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(program.careerRoles || []).map((role) => (
              <div key={role.title} className="rounded-lg border border-neutral-200 p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{role.title}</h3>
                <p className="text-sm text-neutral-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {portfolio.length > 0 && (
        <section className="py-14 lg:py-16 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Portfolio"
              title={showcaseSection.title || 'What You Will Build'}
              subtitle={
                showcaseSection.subtitle ||
                'Graduate with showcase-ready deliverables for interviews, clients, and mentors.'
              }
            />
            <PortfolioShowcase items={portfolio} />
          </div>
        </section>
      )}

      {/* Business / pitch showcase */}
      {businessShowcase.length > 0 && (
        <section className="py-14 lg:py-16 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Showcase"
              title={showcaseSection.title || 'Pitch & Business Showcase'}
              subtitle={showcaseSection.subtitle}
            />
            <BusinessShowcase items={businessShowcase} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section id="enroll-cta" className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            {cta.headline || 'Start Your Career Journey'}
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            {cta.subline ||
              `Take the next step with ${program.title}. Book counseling or enroll today with EduGram Technologies.`}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Button type="button" onClick={handleEnroll} size="lg" className="min-w-[10rem]">
              Enroll Now
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-w-[10rem]"
              onClick={() => setContactOpen(true)}
            >
              Book Free Counseling
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-w-[10rem]"
              onClick={() => openWhatsAppChat(waMessage)}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-16 border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-2">
            {(program.faqs || []).map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-neutral-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <span className="text-neutral-500 text-xl leading-none">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-14 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Success Stories" title="What Learners Say" />
            <div className="relative rounded-lg border border-neutral-200 p-8 sm:p-10 min-h-[220px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-opacity duration-500 ${
                    i === testimonialIndex ? 'opacity-100' : 'opacity-0 absolute inset-8 pointer-events-none'
                  }`}
                  aria-hidden={i !== testimonialIndex}
                >
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-900 font-bold text-sm">
                      {t.image || t.name?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{t.name}</p>
                      <p className="text-sm text-neutral-600">
                        {t.role}
                        {t.company ? ` · ${t.company}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTestimonialIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === testimonialIndex ? 'w-8 bg-neutral-900' : 'w-2 bg-neutral-300'
                      }`}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Sticky enroll bar mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-neutral-200 p-3 shadow-lg flex gap-2">
        <Button type="button" onClick={() => openWhatsAppChat(waMessage)} variant="outline" className="flex-1 text-sm py-2.5">
          Counselor
        </Button>
        <Button type="button" onClick={handleEnroll} className="flex-1 text-sm py-2.5">
          Enroll
        </Button>
      </div>

      <div className="h-16 lg:hidden" aria-hidden />

      <Suspense fallback={null}>
        <ContactQuickForm open={contactOpen} onClose={() => setContactOpen(false)} />
      </Suspense>
    </div>
  )
}

export default CourseDetailView
