import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

console.log(`[API] Initialized with baseURL: ${API_URL} | mode: ${import.meta.env.MODE}`)

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('edugram_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  console.log(`[API] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`)
  return config
})

api.interceptors.response.use(
  (response) => {
    console.log(`[API] ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    const status = error.response?.status
    const responseData = error.response?.data
    const message = responseData?.message || error.message || 'Something went wrong'
    console.error(`[API] ERROR ${status || 'NETWORK'} ${error.config?.url} | message: ${message} | data: ${JSON.stringify(responseData)} | origin: ${window.location.origin} | API_URL: ${API_URL}`)
    return Promise.reject(new Error(message))
  }
)

export default api
