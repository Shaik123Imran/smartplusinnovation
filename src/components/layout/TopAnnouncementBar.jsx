const announcements = [
  'Admissions Open – Reserve Your Spot!',
  'New Courses Launching This Month!',
  'Enroll Now & Get 20% Off',
  'Join 10,000+ Students Already Learning With Us',
  'Placement Assistance & Career Guidance Included',
  'Limited Seats Available – Enrol Before Deadline',
  'Industry-Recognized Certifications',
  'Learn from Experienced Industry Professionals',
  'Become Job-Ready with Hands-On Training',
  'Get Up to 20% Early Enrollment Discount',
]

function TopAnnouncementBar() {
  const items = [...announcements, ...announcements]

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary via-secondary to-emerald shadow-lg shadow-primary/20">
      <div className="flex animate-scroll whitespace-nowrap py-2.5">
        {items.map((msg, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-2 text-white/90 text-sm font-medium tracking-wide"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0 text-white/70" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TopAnnouncementBar
