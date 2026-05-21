import { useEffect } from 'react'
import { SITE_NAME } from './usePageTitle'

/**
 * Sets document title and meta description for SEO.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${SITE_NAME}`
    }
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) {
      meta.setAttribute('content', description)
    }
    return () => {
      if (meta) {
        meta.setAttribute(
          'content',
          'EduGram Technologies Pvt Ltd — Industry-aligned tech education, career-focused programs, and hands-on learning for students and professionals.'
        )
      }
    }
  }, [title, description])
}
