import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { isFastTrackProgram, FAST_TRACK_MAX_WEEKS } from '../utils/fastTrack'
import { usePageTitle } from '../hooks/usePageTitle'
import { useData } from '../context/DataContext'
import ProgramCard from '../components/programs/ProgramCard'
import ProgramFilter from '../components/programs/ProgramFilter'
import SearchBar from '../components/common/SearchBar'

function Programs() {
  usePageTitle('Programs')
  const { programs, categories } = useData()
  const [searchParams] = useSearchParams()
  const fastTrackOnly = searchParams.get('track') === 'fast'
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (fastTrackOnly) {
      setActiveCategory('all')
    }
  }, [fastTrackOnly])

  const filteredPrograms = useMemo(() => {
    let result = programs

    if (fastTrackOnly) {
      result = result.filter(isFastTrackProgram)
    }

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(program => program.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase()
      result = result.filter(program =>
        program.title.toLowerCase().includes(lowercaseQuery) ||
        program.shortDescription.toLowerCase().includes(lowercaseQuery) ||
        program.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
      )
    }

    return result
  }, [programs, activeCategory, searchQuery, fastTrackOnly])

  return (
    <Layout>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="section-header-center mb-0">
            <span className="section-eyebrow bg-primary/10 text-primary">
              {fastTrackOnly ? 'Fast Track' : 'All Programs'}
            </span>
            <h1 className="page-title">
              {fastTrackOnly ? (
                <>
                  <span className="section-title-line">Fast Track</span>
                  <span className="page-title-accent">Programs</span>
                </>
              ) : (
                <>
                  <span className="section-title-line">Explore Our</span>
                  <span className="page-title-accent">Learning Programs</span>
                </>
              )}
            </h1>
            <p className="section-subtitle-center">
              {fastTrackOnly
                ? `Shorter courses (${FAST_TRACK_MAX_WEEKS} weeks or less) you can complete at your own pace.`
                : 'Choose from our comprehensive range of industry-aligned programs'}
            </p>
          </div>

          {fastTrackOnly && (
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <p className="text-sm text-text/60 text-center">
                Showing {filteredPrograms.length} Fast Track program{filteredPrograms.length !== 1 ? 's' : ''}
              </p>
              <Link
                to="/programs"
                className="text-sm font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
              >
                View all programs
              </Link>
            </div>
          )}

          <div className="mb-8">
            <SearchBar
              placeholder="Search programs by name or skill..."
              value={searchQuery}
              onChange={setSearchQuery}
              className="max-w-md mx-auto"
            />
          </div>

          <div className="mb-12">
            <ProgramFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-text/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text mb-2">No programs found</h3>
              <p className="text-text/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Programs
