/**
 * Static program catalog — intentionally empty.
 * Published courses are loaded from the API (MongoDB).
 * To add a course locally for seeding, use src/data/courses/listings.js
 */

export const DEFAULT_CATEGORIES = [
  { id: 'all', name: 'All Programs' },
  { id: 'technology-software', name: 'Technology & Software' },
  { id: 'cloud-devops', name: 'Cloud & DevOps' },
  { id: 'data-ai', name: 'Data & AI' },
  { id: 'cybersecurity-systems', name: 'Cybersecurity & Systems' },
  { id: 'design', name: 'Design' },
  { id: 'design-creativity', name: 'Design & Creativity' },
  { id: 'design-engineering', name: 'Design & Engineering' },
  { id: 'business', name: 'Business & Management' },
  { id: 'business-entrepreneurship', name: 'Business & Entrepreneurship' },
  { id: 'career-soft-skills', name: 'Career & Soft Skills' },
]

/** @deprecated Use API-backed programs from DataContext. Kept empty for fallback. */
export const programs = []
