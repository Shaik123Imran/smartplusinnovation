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

/** Map API course to legacy program shape used by components */
export const mapCourseToProgram = (course) => ({
  id: course.slug,
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
  color: course.color,
})
