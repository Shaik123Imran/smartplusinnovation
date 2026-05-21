import { getCourseDetail, hasCourseDetailPage } from '../data/courses'

/**
 * Merge API/DB listing fields with rich detail content from the course registry.
 * Works for any number of courses keyed by slug.
 */
export function mergeProgramWithDetail(program) {
  if (!program) return null

  const slug = program.slug || program.id
  const detail = getCourseDetail(slug)

  if (!detail && !program.hasDetailPage && !hasCourseDetailPage(slug)) {
    return { ...program, id: slug, slug }
  }

  if (program.hero && program.syllabus?.length) {
    return { ...program, id: slug, slug, hasDetailPage: true }
  }

  if (!detail) {
    return { ...program, id: slug, slug, hasDetailPage: hasCourseDetailPage(slug) }
  }

  return {
    ...program,
    id: slug,
    slug,
    hasDetailPage: true,
    meta: detail.meta ?? program.meta,
    hero: detail.hero ?? program.hero,
    about: detail.about ?? program.about,
    skillsCovered: detail.skillsCovered ?? program.skillsCovered,
    technologies: detail.technologies ?? program.technologies,
    learningOutcomes: detail.learningOutcomes ?? program.learningOutcomes,
    programFeatures: detail.programFeatures ?? program.programFeatures,
    careerRoles: detail.careerRoles ?? program.careerRoles,
    syllabus: detail.syllabus ?? program.syllabus,
    faqs: detail.faqs ?? program.faqs,
    whatsappMessage: detail.whatsappMessage ?? program.whatsappMessage,
    courseTestimonials: detail.testimonials ?? program.courseTestimonials,
    cta: detail.cta ?? program.cta,
    pricing: detail.pricing ?? program.pricing,
  }
}
