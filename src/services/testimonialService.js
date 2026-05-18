import api from './apiClient'

export const fetchTestimonials = async () => {
  const { data } = await api.get('/testimonials')
  return data.testimonials
}

export const submitTestimonial = async (payload) => {
  const { data } = await api.post('/testimonials', payload)
  return data
}
