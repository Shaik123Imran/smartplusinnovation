import { useEffect } from 'react'

export const SITE_NAME = 'EduGram Technologies Pvt Ltd'

/** Sets document.title to "Page | EduGram Technologies Pvt Ltd" (or site name only when pageTitle is omitted). */
export function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME
  }, [pageTitle])
}
