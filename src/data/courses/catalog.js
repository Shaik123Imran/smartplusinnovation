/**
 * MULTI-COURSE CATALOG — add every published program here.
 *
 * Each entry = one card on /programs + optional rich page at /programs/:slug
 *
 * Steps to add a course:
 * 1. Create detail file: src/data/courses/<slug>.js (copy from _template/course-detail.template.js)
 * 2. Import detail below and add definePublishedCourse(listing, detail)
 * 3. Run: npm run seed
 *
 * import myCourseDetail from './my-course-slug.js'
 */

import { normalizeCourseListing } from './schema.js'

import devopsCloudCareerLaunchpad from './devops-cloud-career-launchpad.js'

/**
 * @typedef {import('./schema.js').CourseListing} CourseListing
 * @typedef {{ listing: CourseListing, detail?: object | null }} PublishedCourseEntry
 */

/**
 * Register one course (listing + optional rich detail module).
 * @param {CourseListing} listing
 * @param {object | null} [detail] - full detail export (must include .slug)
 * @returns {PublishedCourseEntry}
 */
export function definePublishedCourse(listing, detail = null) {
  const normalized = normalizeCourseListing(listing)
  if (detail && detail.slug && detail.slug !== normalized.slug) {
    console.warn(
      `[courses] slug mismatch: listing "${normalized.slug}" vs detail "${detail.slug}"`
    )
  }
  return {
    listing: {
      ...normalized,
      hasDetailPage: Boolean(detail || normalized.hasDetailPage),
    },
    detail: detail || null,
  }
}

/**
 * All published courses — append new entries to this array.
 * @type {PublishedCourseEntry[]}
 */
export const publishedCourseEntries = [
  definePublishedCourse(
    {
      slug: 'devops-and-cloud-career-launchpad',
      title: 'DevOps and Cloud Career Launchpad',
      shortDescription:
        'Master Linux, Docker, Kubernetes, AWS, Jenkins, Terraform, and CI/CD with live mentorship, real projects, and placement support.',
      description:
        'An industry-aligned DevOps and cloud engineering program for students and professionals. Build automation pipelines, deploy to AWS, and prepare for DevOps Engineer, Cloud Engineer, and SRE roles.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'cloud-devops',
      skills: ['Linux', 'Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform'],
      features: [
        'Live instructor-led sessions',
        'Recorded session library',
        'Real-time capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
      ],
      rating: 4.9,
      students: 0,
      image: 'devops-cloud',
      imageFile: 'devops-cloud.svg',
      color: 'accent',
      isFeatured: true,
      hasDetailPage: true,
    },
    devopsCloudCareerLaunchpad
  ),
]

/** Listings only (Programs grid + MongoDB base fields) */
export function getCatalogListings() {
  return publishedCourseEntries.map((entry) => entry.listing)
}

/** Detail modules that power CourseDetailView */
export function getCatalogDetails() {
  return publishedCourseEntries.map((entry) => entry.detail).filter(Boolean)
}

export function getPublishedSlugs() {
  return publishedCourseEntries.map((entry) => entry.listing.slug)
}
