import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import * as authService from '../services/authService'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getStoredUser())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const syncUser = useCallback((nextUser) => {
    setUser(nextUser)
  }, [])

  useEffect(() => {
    const init = async () => {
      const token = authService.getStoredToken()
      if (!token) {
        setLoading(false)
        return
      }
      try {
        const me = await authService.fetchMe()
        setUser(me)
      } catch {
        authService.clearSession()
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  const register = async (data) => {
    setError(null)
    try {
      const res = await authService.register(data)
      setUser(res.user)
      return { success: true, user: res.user }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const login = async (email, password) => {
    setError(null)
    try {
      const res = await authService.login(email, password)
      setUser(res.user)
      return { success: true, user: res.user }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const googleLogin = async (credential) => {
    setError(null)
    try {
      const res = await authService.googleLogin(credential)
      setUser(res.user)
      return { success: true, user: res.user }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const logout = async () => {
    setError(null)
    try {
      await authService.logout()
      setUser(null)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const forgotPassword = async (email) => {
    setError(null)
    try {
      const res = await authService.forgotPassword(email)
      return { success: true, message: res.message }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const resetPassword = async (token, password) => {
    setError(null)
    try {
      const res = await authService.resetPassword(token, password)
      setUser(res.user)
      return { success: true, user: res.user }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const updateProfile = async (data) => {
    setError(null)
    try {
      const updated = await authService.updateProfile(data)
      setUser(updated)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const enroll = async (courseId) => {
    if (!user) return { success: false, error: 'Not logged in' }
    try {
      const updated = await authService.enrollCourse(courseId)
      setUser(updated)
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const unenroll = async (courseId) => {
    if (!user) return { success: false, error: 'Not logged in' }
    try {
      const updated = await authService.unenrollCourse(courseId)
      setUser(updated)
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const isEnrolled = (courseId) => user?.enrolledCourses?.includes(courseId) || false

  const isAdmin = user?.role === 'admin'

  const value = {
    user,
    userData: user,
    loading,
    error,
    isAdmin,
    register,
    login,
    googleLogin,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    enroll,
    unenroll,
    isEnrolled,
    syncUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
