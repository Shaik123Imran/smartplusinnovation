import api from './apiClient'

export const fetchCourses = async (params = {}) => {
  const { data } = await api.get('/courses', { params })
  return data.courses
}

export const fetchCourseBySlug = async (slug) => {
  const { data } = await api.get(`/courses/${slug}`)
  return data.course
}

export const fetchCategories = async () => {
  const { data } = await api.get('/courses/categories')
  return data.categories
}

/** Map catalog listing (pre-API) to program shape used by components */
export const mapListingToProgram = (listing) => ({
  id: listing.slug,
  slug: listing.slug,
  title: listing.title,
  shortDescription: listing.shortDescription,
  description: listing.description,
  duration: listing.duration,
  level: listing.level,
  price: listing.price,
  originalPrice: listing.originalPrice,
  category: listing.category,
  skills: listing.skills || [],
  features: listing.features || [],
  instructor: listing.instructor,
  rating: listing.rating,
  students: listing.students,
  image: listing.image,
  imageFile: listing.imageFile,
  bannerImage: listing.bannerImage || listing.imageFile,
  heroImage: listing.heroImage || listing.imageFile,
  thumbnail: listing.thumbnail || listing.imageFile,
  color: listing.color,
  hasDetailPage: listing.hasDetailPage,
  isFeatured: listing.isFeatured,
  isPublished: listing.isPublished,
})

/** Map API course document to program shape used by components */
export const mapCourseToProgram = (course) => ({
  id: course.slug,
  slug: course.slug,
  title: course.title,
  shortDescription: course.shortDescription,
  description: course.description,
  duration: course.duration,
  level: course.level,
  price: course.price,
  originalPrice: course.originalPrice,
  category: course.category,
  skills: course.skills || [],
  features: course.features || [],
  instructor: course.instructor,
  rating: course.rating,
  students: course.students,
  image: course.image,
  imageFile: course.imageFile,
  bannerImage: course.bannerImage || course.imageFile,
  heroImage: course.heroImage || course.imageFile,
  thumbnail: course.thumbnail || course.imageFile,
  color: course.color,
  hasDetailPage: course.hasDetailPage,
  isFeatured: course.isFeatured,
  isPublished: course.isPublished,
  meta: course.meta,
  hero: course.hero,
  about: course.about,
  skillsCovered: course.skillsCovered,
  technologies: course.technologies,
  learningOutcomes: course.learningOutcomes,
  programFeatures: course.programFeatures,
  careerRoles: course.careerRoles,
  syllabus: course.syllabus,
  faqs: course.faqs,
  whatsappMessage: course.whatsappMessage,
  courseTestimonials: course.courseTestimonials,
  cta: course.cta,
  curriculum: course.curriculum,
  realTimeProjects: course.realTimeProjects,
  projectsSection: course.projectsSection,
  portfolio: course.portfolio,
  showcaseSection: course.showcaseSection,
  businessShowcase: course.businessShowcase,
  trainingActivities: course.trainingActivities,
  trainingSection: course.trainingSection,
  technologiesSection: course.technologiesSection,
})
