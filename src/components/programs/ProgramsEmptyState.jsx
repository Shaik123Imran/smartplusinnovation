import { Link } from 'react-router-dom'
import Button from '../common/Button'

function ProgramsEmptyState({ variant = 'catalog' }) {
  const isFiltered = variant === 'filtered'

  return (
    <div className="text-center py-16 sm:py-20 px-4">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-100 bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-8 sm:p-10 shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {isFiltered ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">
          {isFiltered ? 'No programs match your search' : 'New programs coming soon'}
        </h3>
        <p className="text-text/60 leading-relaxed mb-8">
          {isFiltered
            ? 'Try adjusting your search or filter criteria to find a program.'
            : 'New industry-focused programs are being added soon. Check back for career-ready courses in technology, cloud, and more.'}
        </p>

        {!isFiltered && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
            <Button to="/" variant="outline">
              Back to Home
            </Button>
          </div>
        )}

        {isFiltered && (
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View all programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProgramsEmptyState
