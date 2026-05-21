import { getCourseDetail } from './index.js'
import { DEFAULT_INSTRUCTOR } from './schema.js'

/**
 * Build a MongoDB course document from a listing + optional rich detail.
 * @param {import('./schema.js').CourseListing} listing
 * @param {object | null} [detailOverride]
 */
export function buildMongoCourseFromListing(listing, detailOverride = null) {
  const detail = detailOverride ?? getCourseDetail(listing.slug)

  const base = {
    slug: listing.slug,
    title: listing.title,
    shortDescription: listing.shortDescription,
    description: listing.description || listing.shortDescription,
    duration: listing.duration,
    level: listing.level || 'All Levels',
    price: listing.price,
    originalPrice: listing.originalPrice,
    category: listing.category,
    skills: listing.skills || [],
    features: listing.features || [],
    instructor: listing.instructor || DEFAULT_INSTRUCTOR,
    rating: listing.rating ?? 4.8,
    students: listing.students ?? 0,
    image: listing.image || '',
    imageFile: listing.imageFile || '',
    color: listing.color || 'primary',
    isPublished: listing.isPublished !== false,
    isFeatured: Boolean(listing.isFeatured),
    hasDetailPage: Boolean(listing.hasDetailPage || detail),
  }

  if (!detail) return base

  return {
    ...base,
    hasDetailPage: true,
    meta: detail.meta,
    hero: detail.hero,
    about: detail.about,
    skillsCovered: detail.skillsCovered,
    technologies: detail.technologies,
    learningOutcomes: detail.learningOutcomes,
    programFeatures: detail.programFeatures,
    careerRoles: detail.careerRoles,
    syllabus: detail.syllabus,
    faqs: detail.faqs,
    whatsappMessage: detail.whatsappMessage,
    courseTestimonials: detail.testimonials || [],
    cta: detail.cta,
    curriculum: detail.curriculum,
    realTimeProjects: detail.realTimeProjects || [],
    projectsSection: detail.projectsSection,
    portfolio: detail.portfolio || [],
    showcaseSection: detail.showcaseSection,
    businessShowcase: detail.businessShowcase || [],
    trainingActivities: detail.trainingActivities || [],
    trainingSection: detail.trainingSection,
    technologiesSection: detail.technologiesSection,
  }
}

/** Build all MongoDB documents from the published catalog. */
export function buildAllMongoCoursesFromCatalog(entries) {
  return entries
    .filter(({ listing }) => listing.isPublished !== false)
    .map(({ listing, detail }) => buildMongoCourseFromListing(listing, detail))
}
