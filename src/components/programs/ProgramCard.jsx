import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { PROGRAM_ROUTES } from '../../config/routes'
import Button from '../common/Button'

const colorClasses = {
  primary: {
    light: 'bg-primary/10',
    text: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
  },
  secondary: {
    light: 'bg-secondary/10',
    text: 'text-secondary',
    gradient: 'from-secondary/20 to-secondary/5',
  },
  accent: {
    light: 'bg-accent/10',
    text: 'text-accent',
    gradient: 'from-accent/20 to-accent/5',
  },
}

const ProgramIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

function ProgramCard({ program, compact = false }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [showImage, setShowImage] = useState(true)
  const color = program.color || 'primary'
  const theme = colorClasses[color] || colorClasses.primary
  const courseSlug = program.slug || program.id
  const detailPath = PROGRAM_ROUTES.detail(courseSlug)
  const imageFile =
    program.imageFile ||
    (program.image?.includes('.') ? program.image : program.image ? `${program.image}.jpg` : null)
  const imageSrc = imageFile && showImage ? `/program-images/${imageFile}` : null

  const handleEnroll = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!user) {
      navigate('/login', { state: { from: PROGRAM_ROUTES.checkout(courseSlug) } })
      return
    }
    navigate(PROGRAM_ROUTES.checkout(courseSlug))
  }

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 lg:p-7 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      <div
        className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col min-h-0">
        {imageSrc ? (
          <Link to={detailPath} className="mb-5 block overflow-hidden rounded-xl aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-50">
            <img
              src={imageSrc}
              alt={`${program.title} program`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
              onError={() => setShowImage(false)}
            />
          </Link>
        ) : (
          <Link
            to={detailPath}
            className={`mb-5 flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br ${theme.gradient} border border-slate-100`}
          >
            <div
              className={`w-16 h-16 ${theme.light} rounded-2xl flex items-center justify-center ${theme.text} group-hover:scale-110 transition-transform duration-300`}
            >
              <ProgramIcon />
            </div>
          </Link>
        )}

        <Link to={detailPath} className="block flex-1 min-h-0">
          <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {program.title}
          </h3>

          <p className="text-text/60 mb-4 leading-relaxed text-sm line-clamp-3">
            {program.shortDescription}
          </p>

          {!compact && (
            <>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {(program.skills || []).slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-text/70"
                  >
                    {skill}
                  </span>
                ))}
                {(program.skills?.length || 0) > 4 && (
                  <span className="text-[11px] text-text/50">+{program.skills.length - 4}</span>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-text/50">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.duration}
                </span>
                {program.rating != null && (
                  <span className="flex items-center gap-1 text-yellow-600">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {program.rating}
                  </span>
                )}
              </div>
            </>
          )}
        </Link>

        <div className="mt-auto flex flex-col sm:flex-row gap-2 pt-4 border-t border-slate-100">
          <Button to={detailPath} variant="outline" size="sm" className="flex-1 justify-center">
            View Details
          </Button>
          <Button type="button" onClick={handleEnroll} size="sm" className="flex-1 justify-center">
            Enroll Now
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProgramCard
