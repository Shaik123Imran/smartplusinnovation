import api from './apiClient'

export const fetchAdminStats = async () => {
  const { data } = await api.get('/admin/stats')
  return data.stats
}

export const fetchAdminUsers = async () => {
  const { data } = await api.get('/admin/users')
  return data.users
}

export const fetchAdminTestimonials = async () => {
  const { data } = await api.get('/admin/testimonials')
  return data.testimonials
}

export const approveTestimonial = async (id, body) => {
  const { data } = await api.patch(`/admin/testimonials/${id}`, body)
  return data.testimonial
}

export const deleteTestimonial = async (id) => {
  await api.delete(`/admin/testimonials/${id}`)
}

export const fetchAdminContacts = async () => {
  const { data } = await api.get('/admin/contacts')
  return data.contacts
}

export const fetchAdminInterests = async () => {
  const { data } = await api.get('/admin/interests')
  return data.interests
}

export const fetchAdminSubscribers = async () => {
  const { data } = await api.get('/admin/subscribers')
  return data.subscribers
}
