import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'
import Layout from '../components/layout/Layout'
import { useData } from '../context/DataContext'
import { useAuth } from '../context/AuthContext'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import Modal from '../components/common/Modal'
import Loader from '../components/common/Loader'
import { usePageTitle } from '../hooks/usePageTitle'

const CourseDetailView = lazy(() => import('../components/course/CourseDetailView'))

function ProgramDetail() {
  const { slug: slugParam } = useParams()
  const slug = slugParam
  const navigate = useNavigate()
  const location = useLocation()
  const { getProgramById } = useData()
  const { user, isEnrolled } = useAuth()
  const [showEnrollModal, setShowEnrollModal] = useState(false)

  const program = getProgramById(slug)
  usePageTitle(program?.title ?? 'Program Not Found')

  useEffect(() => {
    if (location.state?.paymentSuccess) {
      setShowEnrollModal(true)
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location.state?.paymentSuccess, location.pathname, navigate])

  if (!program) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text mb-4">Program not found</h1>
            <Button to="/programs">Back to Programs</Button>
          </div>
        </div>
      </Layout>
    )
  }

  if (program.hasDetailPage && (program.syllabus?.length || program.hero)) {
    return (
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <CourseDetailView program={program} />
        </Suspense>
        <Modal
          isOpen={showEnrollModal}
          onClose={() => setShowEnrollModal(false)}
          title="Enrollment Successful! 🎉"
        >
          <div className="text-center py-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Welcome to {program.title}!</h3>
            <p className="text-text/60 mb-6">
              You&apos;ve successfully enrolled. Head to your dashboard to start learning!
            </p>
            <Button to="/dashboard" className="w-full">
              Go to Dashboard
            </Button>
          </div>
        </Modal>
      </Layout>
    )
  }

  const enrolled = user && isEnrolled(program.id)
  const detailImageFile = program.imageFile || (program.image ? `${program.image}.jpg` : null)
  const detailImageSrc = detailImageFile ? `/program-images/${detailImageFile}` : null

  const handleEnrollClick = () => {
    if (!user) {
      navigate('/login', { state: { from: `/programs/${slug}/checkout` } })
      return
    }
    navigate(`/programs/${slug}/checkout`)
  }

  return (
    <Layout>
      <section className="py-12 lg:py-20 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Button to="/programs" variant="ghost" className="mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Programs
                </Button>

                {detailImageSrc && (
                  <div className="mb-5 overflow-hidden rounded-2xl aspect-[16/9] bg-gray-100 shadow-sm">
                    <img
                      src={detailImageSrc}
                      alt={`${program.title} banner`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <Badge variant={program.color}>{program.category.replace('-', ' & ').toUpperCase()}</Badge>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-text mt-4 mb-4">
                  {program.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-text/60">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {program.level}
                  </span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-text mb-4">About This Program</h2>
                <div className="text-text/70 whitespace-pre-line leading-relaxed">
                  {program.description}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-text mb-4">Skills You&apos;ll Learn</h2>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, index) => (
                    <Badge key={index} variant="gray">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-text mb-4">What&apos;s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                {enrolled ? (
                  <p className="text-text/60 text-sm py-2 mb-4">You are enrolled in this program.</p>
                ) : (
                  <p className="text-text/60 text-sm py-2 mb-4">Enroll to access full pricing and materials.</p>
                )}
                {enrolled ? (
                  <Button to="/dashboard" className="w-full">
                    Go to Dashboard
                  </Button>
                ) : (
                  <Button onClick={handleEnrollClick} className="w-full" size="lg">
                    {user ? 'Buy Now — Proceed to Payment' : 'Login to Enroll'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        title="Enrollment Successful! 🎉"
      >
        <div className="text-center py-4">
          <h3 className="text-xl font-bold text-text mb-2">Welcome to {program.title}!</h3>
          <Button to="/dashboard" className="w-full">
            Go to Dashboard
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default ProgramDetail
