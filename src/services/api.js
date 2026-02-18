// Generic app data & auth service (currently demo/local mode).
// Designed to be replaced by a real MongoDB-backed API later.

const DEMO_USERS_KEY = 'smartplus_demo_users'
const DEMO_CURRENT_USER_KEY = 'smartplus_demo_current_user'
const BLOGS_KEY = 'smartplus_blogs'
const TESTIMONIALS_KEY = 'smartplus_testimonials'
const CONTACTS_KEY = 'smartplus_contacts'
const NEWSLETTER_KEY = 'smartplus_newsletter'

const getDemoUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(DEMO_USERS_KEY) || '{}')
  } catch {
    return {}
  }
}

const saveDemoUsers = (users) => {
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users))
}

const getDemoCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(DEMO_CURRENT_USER_KEY) || 'null')
  } catch {
    return null
  }
}

const saveDemoCurrentUser = (user) => {
  if (user) {
    localStorage.setItem(DEMO_CURRENT_USER_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(DEMO_CURRENT_USER_KEY)
  }
}

// In this setup there is no remote backend yet.
// Keep this flag for compatibility with UI but always false.
export const isFirebaseConfigured = false

// Auth functions (demo mode, localStorage)
export const registerUser = async (email, password, displayName) => {
  const users = getDemoUsers()
  if (users[email]) {
    throw new Error('Email already registered')
  }

  const uid = 'demo_' + Date.now()
  const user = {
    uid,
    email,
    displayName,
    enrolledCourses: [],
    createdAt: new Date().toISOString(),
  }

  users[email] = { ...user, password }
  saveDemoUsers(users)
  saveDemoCurrentUser(user)

  return user
}

export const loginUser = async (email, password) => {
  const users = getDemoUsers()
  const userData = users[email]

  if (!userData) {
    throw new Error('User not found. Please register first.')
  }

  if (userData.password !== password) {
    throw new Error('Invalid password')
  }

  const { password: _pw, ...user } = userData
  saveDemoCurrentUser(user)

  return user
}

export const loginWithGoogle = async () => {
  throw new Error('Google Sign-In is not available in demo mode. A MongoDB-backed auth API is required.')
}

export const logoutUser = async () => {
  saveDemoCurrentUser(null)
}

export const resetPassword = async (email) => {
  const users = getDemoUsers()
  if (!users[email]) {
    return {
      success: false,
      error: 'No account found with this email address. Please check your email or register a new account.',
    }
  }

  return {
    success: true,
    message:
      `Demo Mode: Password reset email would be sent to ${email}. ` +
      'Since there is no backend yet, please remember your password or register a new account. ' +
      'Once the MongoDB backend is configured, real reset emails can be sent.',
    demo: true,
  }
}

// User functions
export const getUserData = async (uid) => {
  const users = getDemoUsers()
  const user = Object.values(users).find((u) => u.uid === uid)
  if (!user) return null
  const { password, ...userData } = user
  return userData
}

export const updateUserData = async (uid, data) => {
  const users = getDemoUsers()
  const email = Object.keys(users).find((e) => users[e].uid === uid)
  if (!email) return

  users[email] = { ...users[email], ...data }
  saveDemoUsers(users)

  const currentUser = getDemoCurrentUser()
  if (currentUser && currentUser.uid === uid) {
    saveDemoCurrentUser({ ...currentUser, ...data })
  }
}

// Enrollment functions
export const enrollInCourse = async (uid, courseId) => {
  const users = getDemoUsers()
  const email = Object.keys(users).find((e) => users[e].uid === uid)
  if (!email) return

  const enrolledCourses = users[email].enrolledCourses || []
  if (!enrolledCourses.includes(courseId)) {
    users[email].enrolledCourses = [...enrolledCourses, courseId]
    saveDemoUsers(users)

    const currentUser = getDemoCurrentUser()
    if (currentUser && currentUser.uid === uid) {
      saveDemoCurrentUser({
        ...currentUser,
        enrolledCourses: users[email].enrolledCourses,
      })
    }
  }
}

export const unenrollFromCourse = async (uid, courseId) => {
  const users = getDemoUsers()
  const email = Object.keys(users).find((e) => users[e].uid === uid)
  if (!email) return

  users[email].enrolledCourses = (users[email].enrolledCourses || []).filter((id) => id !== courseId)
  saveDemoUsers(users)

  const currentUser = getDemoCurrentUser()
  if (currentUser && currentUser.uid === uid) {
    saveDemoCurrentUser({
      ...currentUser,
      enrolledCourses: users[email].enrolledCourses,
    })
  }
}

// Blog functions (demo/local only)
export const createBlogPost = async (postData) => {
  const blogs = JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]')
  const id = 'blog_' + Date.now()
  blogs.unshift({ id, ...postData, createdAt: new Date().toISOString() })
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs))
  return id
}

export const getBlogPosts = async () => {
  return JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]')
}

export const getBlogPost = async (id) => {
  const blogs = JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]')
  return blogs.find((b) => b.id === id) || null
}

export const updateBlogPost = async (id, data) => {
  const blogs = JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]')
  const index = blogs.findIndex((b) => b.id === id)
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...data, updatedAt: new Date().toISOString() }
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs))
  }
}

export const deleteBlogPost = async (id) => {
  const blogs = JSON.parse(localStorage.getItem(BLOGS_KEY) || '[]')
  const filtered = blogs.filter((b) => b.id !== id)
  localStorage.setItem(BLOGS_KEY, JSON.stringify(filtered))
}

// Testimonial functions
export const submitTestimonial = async (testimonialData) => {
  const testimonials = JSON.parse(localStorage.getItem(TESTIMONIALS_KEY) || '[]')
  const id = 'testimonial_' + Date.now()
  testimonials.push({
    id,
    ...testimonialData,
    approved: true,
    createdAt: new Date().toISOString(),
  })
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonials))
  return id
}

export const getApprovedTestimonials = async () => {
  return JSON.parse(localStorage.getItem(TESTIMONIALS_KEY) || '[]')
}

// Contact form submission
export const submitContactForm = async (formData) => {
  const contacts = JSON.parse(localStorage.getItem(CONTACTS_KEY) || '[]')
  const id = 'contact_' + Date.now()
  contacts.push({ id, ...formData, createdAt: new Date().toISOString() })
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  return id
}

// Newsletter subscription
export const subscribeNewsletter = async (email) => {
  const newsletter = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]')
  if (!newsletter.includes(email)) {
    newsletter.push(email)
    localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(newsletter))
    return true
  }
  return false
}

// Custom auth state observer (demo mode)
export const onAuthStateChangedCustom = (callback) => {
  const user = getDemoCurrentUser()
  // Call async to mimic real observer behaviour
  setTimeout(() => callback(user), 0)
  // Return unsubscribe function for compatibility
  return () => {}
}

