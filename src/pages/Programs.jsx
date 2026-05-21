import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { isFastTrackProgram, FAST_TRACK_MAX_WEEKS } from '../utils/fastTrack'
import { usePageTitle } from '../hooks/usePageTitle'
import { useData } from '../context/DataContext'
import ProgramCard from '../components/programs/ProgramCard'
import ProgramFilter from '../components/programs/ProgramFilter'
import ProgramsEmptyState from '../components/programs/ProgramsEmptyState'
import SearchBar from '../components/common/SearchBar'
import Loader from '../components/common/Loader'

function Programs() {
  usePageTitle('Programs')
  const { programs, categories, loading } = useData()
  const [searchParams] = useSearchParams()
  const fastTrackOnly = searchParams.get('track') === 'fast'
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const hasCatalog = programs.length > 0

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

    if (activeCategory !== 'all') {
      result = result.filter((program) => program.category === activeCategory)
    }

    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase()
      result = result.filter(
        (program) =>
          program.title.toLowerCase().includes(lowercaseQuery) ||
          program.shortDescription.toLowerCase().includes(lowercaseQuery) ||
          (program.skills || []).some((skill) => skill.toLowerCase().includes(lowercaseQuery))
      )
    }

    return result
  }, [programs, activeCategory, searchQuery, fastTrackOnly])

  const showFilters = hasCatalog && !loading

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
                : hasCatalog
                  ? 'Choose from our industry-aligned, career-focused programs'
                  : 'New industry-focused programs are being added soon'}
            </p>
          </div>

          {fastTrackOnly && hasCatalog && (
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <p className="text-sm text-text/60 text-center">
                Showing {filteredPrograms.length} Fast Track program
                {filteredPrograms.length !== 1 ? 's' : ''}
              </p>
              <Link
                to="/programs"
                className="text-sm font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
              >
                View all programs
              </Link>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader />
            </div>
          ) : !hasCatalog ? (
            <ProgramsEmptyState variant="catalog" />
          ) : (
            <>
              <div className="mb-8">
                <SearchBar
                  placeholder="Search programs by name or skill..."
                  value={searchQuery}
                  onChange={setSearchQuery}
                  className="max-w-md mx-auto"
                />
              </div>

              {showFilters && (
                <div className="mb-12">
                  <ProgramFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                  />
                </div>
              )}

              {filteredPrograms.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {filteredPrograms.map((program) => (
                    <div key={program.id} className="h-full min-h-0">
                      <ProgramCard program={program} />
                    </div>
                  ))}
                </div>
              ) : (
                <ProgramsEmptyState variant="filtered" />
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Programs
