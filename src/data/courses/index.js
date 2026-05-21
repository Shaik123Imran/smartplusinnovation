/**
 * Course registry — initialized from catalog.js (multi-course).
 * Import this module once to hydrate detail pages for all published courses.
 */

import {
  publishedCourseEntries,
  getCatalogListings,
  getCatalogDetails,
  getPublishedSlugs,
  definePublishedCourse,
} from './catalog.js'

/** @type {Record<string, object>} */
const courseDetailRegistry = {}

publishedCourseEntries.forEach(({ listing, detail }) => {
  if (detail?.slug) {
    courseDetailRegistry[detail.slug] = detail
  } else if (listing.hasDetailPage) {
    console.warn(
      `[courses] "${listing.slug}" has hasDetailPage but no detail module registered`
    )
  }
})

export function registerCourseDetail(courseDetail) {
  if (courseDetail?.slug) {
    courseDetailRegistry[courseDetail.slug] = courseDetail
  }
}

export function getCourseDetail(slug) {
  return courseDetailRegistry[slug] ?? null
}

export function hasCourseDetailPage(slug) {
  return Boolean(courseDetailRegistry[slug])
}

export function getAllCourseDetails() {
  return Object.values(courseDetailRegistry)
}

/** @deprecated Use getCatalogListings() from catalog.js */
export const courseListings = getCatalogListings()

export {
  publishedCourseEntries,
  getCatalogListings,
  getCatalogDetails,
  getPublishedSlugs,
  definePublishedCourse,
}
