import Button from '../common/Button'
import { Link } from 'react-router-dom'

function Hero({ onRegisterInterest }) {
  const scrollToRegister = () => {
    const el = document.getElementById('register-interest')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    onRegisterInterest?.()
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-primary/5 section-block lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-primary font-medium text-sm">Transform Your Future Today</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.12] tracking-tight">
              <span className="block">Unlock Your</span>
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-[1.12] pb-1">
                Full Potential
              </span>
              <span className="block mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-text/90 leading-snug">
                With EduGram Technologies Pvt Ltd
              </span>
            </h1>

            <p className="text-lg text-text/60 max-w-xl leading-relaxed">
              Join thousands of learners who have transformed their careers with our industry-leading programs. 
              Get hands-on experience with real-world projects and expert mentorship.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                type="button"
                onClick={onRegisterInterest}
                size="lg"
                variant="secondary"
                className="shadow-lg shadow-secondary/25 ring-2 ring-white/20"
              >
                Register Your Interest
              </Button>
              <Button to="/programs" size="lg">
                Explore Programs
              </Button>
              <Button to="/about" variant="outline" size="lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-text/50">
              <button
                type="button"
                onClick={scrollToRegister}
                className="font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
              >
                Or scroll to the registration form
              </button>
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {['S', 'M', 'E', 'D'].map((letter, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary">{letter}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-text">10,000+</p>
                <p className="text-sm text-text/60">Happy Students</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 pt-10 pb-10 sm:pt-0 sm:pb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-5 transform hover:-rotate-1 transition-transform duration-500">
                <div className="aspect-[4/5] sm:aspect-square max-h-[min(68vh,480px)] sm:max-h-none w-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src="/hero/hero-student-ai.jpg"
                    alt="Student learning with laptop and books in a modern AI-powered education environment"
                    width={1200}
                    height={1200}
                    className="absolute inset-0 w-full h-full object-cover object-[center_15%] sm:object-[center_20%]"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <Link
                  to="/programs"
                  className="group mt-4 flex items-center gap-4 rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 via-white to-secondary/5 px-4 py-3.5 sm:px-5 sm:py-4 transition-all hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/20"
                  aria-label="Start Learning - Browse Programs"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="font-bold text-text group-hover:text-primary transition-colors">Start Learning</p>
                    <p className="text-sm text-text/60 truncate">Browse programs & enroll</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="absolute top-0 left-0 sm:-top-4 sm:-left-4 bg-white rounded-2xl shadow-lg p-3 sm:p-4 max-w-[calc(100%-1rem)] sm:max-w-none animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">Certification</p>
                  <p className="text-xs text-text/60">Industry Recognized</p>
                </div>
              </div>
            </div>

            <a
              href="#fast-track"
              className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 z-10 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white p-3 sm:p-4 shadow-lg ring-1 ring-primary/10 transition-all hover:shadow-xl hover:ring-primary/25 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30 max-w-[calc(100%-1rem)] sm:max-w-none"
              aria-label="Jump to Fast Track programs — shorter courses from 4 to 10 weeks, learn at your pace"
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/20 opacity-75" aria-hidden />
                <svg className="relative h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <span className="text-left pr-1">
                <span className="block font-semibold text-text text-sm">Fast Track</span>
                <span className="block text-xs text-text/60">4–10 week programs →</span>
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
