import api from './apiClient'

export const submitContact = async (payload) => {
  const { data } = await api.post('/forms/contact', payload)
  return data
}

export const submitInterest = async (payload) => {
  const { data } = await api.post('/forms/interest', payload)
  return data
}

export const subscribeNewsletter = async (email) => {
  const { data } = await api.post('/forms/newsletter', { email })
  return data
}
