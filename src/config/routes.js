/** Central route paths for programs (multi-course). */
export const PROGRAM_ROUTES = {
  list: '/programs',
  detail: (slug) => `/programs/${slug}`,
  checkout: (slug) => `/programs/${slug}/checkout`,
}
