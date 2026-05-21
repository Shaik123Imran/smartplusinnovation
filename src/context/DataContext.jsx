import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import {
  fetchCourses,
  fetchCategories,
  mapCourseToProgram,
  mapListingToProgram,
} from '../services/courseService'
import { publishedCourseEntries } from '../data/courses/catalog'
import { fetchTestimonials, submitTestimonial as apiSubmitTestimonial } from '../services/testimonialService'
import { submitContact, submitInterest, subscribeNewsletter } from '../services/formService'
import { faqs, faqCategories, getFaqsByCategory } from '../data/faq'
import { team, values } from '../data/team'
import { pricingPlans, annualDiscount } from '../data/pricing'
import { isFastTrackProgram, FAST_TRACK_MAX_WEEKS } from '../utils/fastTrack'
import { mergeProgramWithDetail } from '../utils/mergeProgramWithDetail'
import { DEFAULT_CATEGORIES } from '../data/programs'

const DataContext = createContext()

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

function programsFromCatalog() {
  return publishedCourseEntries.map(({ listing }) =>
    mergeProgramWithDetail(mapListingToProgram(listing))
  )
}

export function DataProvider({ children }) {
  const [programs, setPrograms] = useState([])
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const [courses, cats, reviews] = await Promise.all([
          fetchCourses(),
          fetchCategories(),
          fetchTestimonials(),
        ])
        const apiPrograms = courses.map((c) => mergeProgramWithDetail(mapCourseToProgram(c)))
        setPrograms(apiPrograms.length > 0 ? apiPrograms : programsFromCatalog())
        setCategories(cats?.length > 1 ? cats : DEFAULT_CATEGORIES)
        setTestimonials(
          reviews.map((t) => ({
            id: t._id,
            name: t.name,
            role: t.role,
            company: t.company,
            content: t.content,
            rating: t.rating,
            image: t.image || t.name?.charAt(0) || 'U',
            program: t.program,
          }))
        )
        setError(null)
      } catch (err) {
        console.error('Failed to load data:', err)
        setError(err.message)
        setPrograms(programsFromCatalog())
        setCategories(DEFAULT_CATEGORIES)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const getProgramById = useCallback(
    (id) => mergeProgramWithDetail(programs.find((p) => p.id === id || p.slug === id)),
    [programs]
  )

  const getProgramsByCategory = useCallback(
    (category) => {
      if (category === 'all') return programs
      return programs.filter((p) => p.category === category)
    },
    [programs]
  )

  const searchPrograms = useCallback(
    (query) => {
      const q = query.toLowerCase()
      return programs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.skills || []).some((s) => s.toLowerCase().includes(q))
      )
    },
    [programs]
  )

  const featuredPrograms = useMemo(
    () => programs.filter((p) => p.isFeatured),
    [programs]
  )

  const fastTrackPrograms = useMemo(
    () => programs.filter(isFastTrackProgram),
    [programs]
  )

  const submitContactForm = async (formData) => {
    return submitContact(formData)
  }

  const submitInterestForm = async (formData) => {
    return submitInterest(formData)
  }

  const subscribe = async (email) => {
    try {
      await subscribeNewsletter(email)
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const addTestimonial = async (data) => {
    try {
      const res = await apiSubmitTestimonial(data)
      return { success: true, message: res.message }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const value = {
    programs,
    categories,
    testimonials,
    featuredPrograms,
    fastTrackPrograms,
    faqs,
    faqCategories,
    getFaqsByCategory,
    team,
    values,
    pricingPlans,
    annualDiscount,
    loading,
    error,
    getProgramById,
    getProgramsByCategory,
    searchPrograms,
    submitContact: submitContactForm,
    submitInterest: submitInterestForm,
    subscribe,
    addTestimonial,
    isFastTrackProgram,
    FAST_TRACK_MAX_WEEKS,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
