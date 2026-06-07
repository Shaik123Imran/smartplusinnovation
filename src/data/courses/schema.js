/**
 * Shared course data shapes for listings (Programs grid) and rich detail pages.
 * Used by the catalog, API mapping, and MongoDB seed.
 */

export const COURSE_COLORS = ['primary', 'secondary', 'accent']

export const DEFAULT_INSTRUCTOR = {
  name: 'EduGram Technologies Pvt Ltd',
  title: 'Expert Mentor',
  experience: '5+ years',
}

/**
 * @typedef {Object} CourseListing
 * @property {string} slug - URL segment: /programs/:slug
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} [description]
 * @property {string} duration
 * @property {string} [level]
 * @property {number} price
 * @property {number} [originalPrice]
 * @property {string} category
 * @property {string[]} [skills]
 * @property {string[]} [features]
 * @property {object} [instructor]
 * @property {number} [rating]
 * @property {number} [students]
 * @property {string} [image] - asset key under /program-images/
 * @property {string} [imageFile]
 * @property {string} [bannerImage]
 * @property {string} [heroImage]
 * @property {string} [thumbnail]
 * @property {'primary'|'secondary'|'accent'} [color]
 * @property {boolean} [isFeatured]
 * @property {boolean} [isPublished]
 * @property {boolean} [hasDetailPage]
 */

/**
 * Normalize listing fields for API/DB consistency.
 * @param {CourseListing} listing
 * @returns {CourseListing}
 */
export function normalizeCourseListing(listing) {
  if (!listing?.slug || !listing?.title) {
    throw new Error('Course listing requires slug and title')
  }

  return {
    slug: listing.slug.trim(),
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
    bannerImage: listing.bannerImage || listing.imageFile || '',
    heroImage: listing.heroImage || listing.imageFile || '',
    thumbnail: listing.thumbnail || listing.imageFile || '',
    color: COURSE_COLORS.includes(listing.color) ? listing.color : 'primary',
    isFeatured: Boolean(listing.isFeatured),
    isPublished: listing.isPublished !== false,
    hasDetailPage: Boolean(listing.hasDetailPage),
  }
}
