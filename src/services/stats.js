const STATS_KEY = 'smartplus_stats'
const DEFAULT_STATS = {
  activeStudents: 10000,
  partnerCompanies: 200,
  placementRate: 95,
  expertMentors: 50,
  countries: 30,
  studentRating: 4.9
}

// Get stats from localStorage (demo mode only for now)
export const getStats = async () => {
  return getLocalStats()
}

// Get stats from localStorage (demo mode)
const getLocalStats = () => {
  try {
    const stored = localStorage.getItem(STATS_KEY)
    if (stored) {
      return JSON.parse(stored)
    } else {
      // Initialize with default stats
      localStorage.setItem(STATS_KEY, JSON.stringify(DEFAULT_STATS))
      return DEFAULT_STATS
    }
  } catch {
    return DEFAULT_STATS
  }
}

// Update stats (admin function)
export const updateStats = async (newStats) => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(newStats))
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Increment stats (when user registers, enrolls, etc.)
export const incrementStat = async (statName) => {
  const currentStats = await getStats()
  const updatedStats = {
    ...currentStats,
    [statName]: (currentStats[statName] || 0) + 1
  }
  return await updateStats(updatedStats)
}

// Calculate dynamic stats from user data
export const calculateDynamicStats = async () => {
  // Demo mode - calculate from localStorage only
  try {
    const users = JSON.parse(localStorage.getItem('smartplus_demo_users') || '{}')
    const totalUsers = Object.keys(users).length || DEFAULT_STATS.activeStudents
    
    let totalEnrollments = 0
    Object.values(users).forEach(user => {
      totalEnrollments += (user.enrolledCourses?.length || 0)
    })
    
    const testimonials = JSON.parse(localStorage.getItem('smartplus_testimonials') || '[]')
    const approvedTestimonials = testimonials.filter(t => t.approved !== false)
    
    let totalRating = 0
    approvedTestimonials.forEach(t => {
      if (t.rating) totalRating += t.rating
    })
    const avgRating = approvedTestimonials.length > 0 
      ? (totalRating / approvedTestimonials.length).toFixed(1) 
      : DEFAULT_STATS.studentRating
    
    return {
      activeStudents: totalUsers,
      partnerCompanies: DEFAULT_STATS.partnerCompanies,
      placementRate: DEFAULT_STATS.placementRate,
      expertMentors: DEFAULT_STATS.expertMentors,
      countries: DEFAULT_STATS.countries,
      studentRating: parseFloat(avgRating),
      totalEnrollments
    }
  } catch {
    return DEFAULT_STATS
  }
}

// Format stats for display
export const formatStats = (stats) => {
  return [
    {
      number: `${stats.activeStudents.toLocaleString('en-IN')}+`,
      label: 'Active Students',
      icon: 'users',
      color: 'primary'
    },
    {
      number: `${stats.partnerCompanies}+`,
      label: 'Partner Companies',
      icon: 'building',
      color: 'secondary'
    },
    {
      number: `${stats.placementRate}%`,
      label: 'Placement Rate',
      icon: 'briefcase',
      color: 'accent'
    },
    {
      number: `${stats.expertMentors}+`,
      label: 'Expert Mentors',
      icon: 'mentor',
      color: 'primary'
    },
    {
      number: `${stats.countries}+`,
      label: 'Countries',
      icon: 'globe',
      color: 'secondary'
    },
    {
      number: `${stats.studentRating}/5`,
      label: 'Student Rating',
      icon: 'star',
      color: 'accent'
    }
  ]
}
