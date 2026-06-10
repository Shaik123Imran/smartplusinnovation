import api from './apiClient'

const TOKEN_KEY = 'edugram_token'
const USER_KEY = 'edugram_user'

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY)
export const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
  } catch {
    return null
  }
}

export const setSession = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export const register = async (data) => {
  const { data: res } = await api.post('/auth/register', data)
  setSession(res.token, res.user)
  return res
}

export const login = async (email, password) => {
  const { data: res } = await api.post('/auth/login', { email, password })
  setSession(res.token, res.user)
  return res
}

export const googleLogin = async (credential) => {
  const apiUrl = import.meta.env.VITE_API_URL || '/api (fallback)'
  console.log(`[AUTH] googleLogin called | credential length: ${credential?.length || 0} | API_URL: ${apiUrl} | mode: ${import.meta.env.MODE}`)
  try {
    const { data: res } = await api.post('/auth/google', { credential })
    console.log(`[AUTH] googleLogin success | user: ${res.user?.email}`)
    setSession(res.token, res.user)
    return res
  } catch (err) {
    console.error(`[AUTH] googleLogin failed | message: ${err.message} | status: ${err.response?.status} | data: ${JSON.stringify(err.response?.data)}`)
    throw err
  }
}

export const logout = async () => {
  try {
    await api.post('/auth/logout')
  } finally {
    clearSession()
  }
}

export const fetchMe = async () => {
  const { data: res } = await api.get('/auth/me')
  if (res.user) {
    const token = getStoredToken()
    if (token) setSession(token, res.user)
  }
  return res.user
}

export const forgotPassword = async (email) => {
  const { data: res } = await api.post('/auth/forgot-password', { email })
  return res
}

export const resetPassword = async (token, password) => {
  const { data: res } = await api.put(`/auth/reset-password/${token}`, { password })
  setSession(res.token, res.user)
  return res
}

export const updateProfile = async (data) => {
  const { data: res } = await api.put('/users/profile', data)
  const token = getStoredToken()
  if (token) setSession(token, res.user)
  return res.user
}

export const enrollCourse = async (courseId) => {
  const { data: res } = await api.post('/users/enroll', { courseId })
  const token = getStoredToken()
  if (token) setSession(token, res.user)
  return res.user
}

export const unenrollCourse = async (courseId) => {
  const { data: res } = await api.delete(`/users/enroll/${courseId}`)
  const token = getStoredToken()
  if (token) setSession(token, res.user)
  return res.user
}

export const getMySubmissions = async () => {
  const { data: res } = await api.get('/users/submissions')
  return res
}
