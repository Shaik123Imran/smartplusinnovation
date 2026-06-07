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
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero/hero-student-ai.jpg"
        >
          <source src="/hero/edugram-motion.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-white/85 to-emerald/10" />
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[35rem] h-[35rem] bg-gradient-to-br from-emerald/20 via-secondary/15 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-48 w-[30rem] h-[30rem] bg-gradient-to-tr from-accent/20 via-rose/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-t from-emerald/15 via-secondary/10 to-transparent rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.06)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.04)_0%,_transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald/10 to-secondary/10 rounded-full border border-emerald/15 shadow-md shadow-emerald/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
              </span>
              <span className="text-emerald font-semibold text-sm tracking-wide">Transform Your Future Today</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.05] tracking-tight">
              <span className="block">Unlock Your</span>
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-emerald via-secondary to-primary bg-clip-text text-transparent leading-[1.05] pb-1">
                Full Potential
              </span>
              <span className="block mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-text/90 leading-snug">
                With EduGram Technologies Pvt Ltd
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text/65 max-w-xl leading-relaxed">
              Transform your potential into professional success with EduGram Technologies. Our industry-focused programs combine practical learning, live projects, expert mentorship, and career guidance to help you build skills that matter in today&apos;s competitive job market. Whether you&apos;re a student, graduate, or working professional, we help you gain the confidence and experience needed to take the next step in your career.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <Button
                type="button"
                onClick={onRegisterInterest}
                size="lg"
                variant="secondary"
                className="shadow-xl shadow-secondary/25 hover:shadow-2xl hover:shadow-secondary/35 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/20"
              >
                Register Your Interest
              </Button>
                <Button
                  to="/programs"
                  size="lg"
                  className="shadow-xl shadow-emerald/25 hover:shadow-2xl hover:shadow-emerald/35 hover:shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/30"
                >
                  Explore Programs
                </Button>
                <Button
                  to="/about"
                  variant="outline"
                  size="lg"
                  className="hover:shadow-xl hover:shadow-emerald/15 hover:-translate-y-1 transition-all duration-300 border-2"
                >
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
                className="font-medium text-emerald hover:text-emerald/80 underline-offset-4 hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-emerald/30 rounded"
              >
                Or scroll to the registration form
              </button>
            </p>
          </div>

          <div className="relative lg:pl-8 pt-8 pb-4 sm:pt-0 sm:pb-0">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-emerald/30 via-secondary/20 to-primary/20 rounded-3xl blur-md" />
              <div className="relative bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl shadow-emerald/15 p-4 sm:p-5 transition-all duration-500 hover:shadow-3xl hover:shadow-emerald/20 border border-white/60">
                <div className="aspect-[4/5] sm:aspect-square max-h-[min(68vh,480px)] sm:max-h-none w-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-emerald/10 to-secondary/10 shadow-inner">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald/30 via-secondary/10 to-transparent pointer-events-none" />
                </div>

                <Link
                  to="/programs"
                  className="group mt-4 flex items-center gap-4 rounded-2xl border border-emerald/15 bg-gradient-to-r from-emerald/5 via-white to-secondary/5 px-4 py-3.5 sm:px-5 sm:py-4 transition-all hover:border-emerald/30 hover:shadow-xl hover:shadow-emerald/15 focus:outline-none focus:ring-4 focus:ring-emerald/20"
                  aria-label="Start Learning - Browse Programs"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald to-accent shadow-md shadow-emerald/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald/40">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="font-bold text-text group-hover:text-emerald transition-colors">Start Learning</p>
                    <p className="text-sm text-text/60 truncate">Browse programs & enroll</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-accent group-hover:text-white group-hover:shadow-md">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="absolute top-0 left-0 sm:-top-4 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-emerald/20 p-3 sm:p-4 max-w-[calc(100%-1rem)] sm:max-w-none animate-float border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">Certification</p>
                  <p className="text-xs text-text/60">Industry Recognized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 via-secondary/20 to-transparent" />

      <div className="absolute top-1/4 right-8 w-4 h-4 rounded-full bg-emerald/25 animate-pulse-slow hidden lg:block" />
      <div className="absolute top-1/3 left-12 w-3 h-3 rounded-full bg-accent/25 animate-pulse-slow hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-16 w-5 h-5 rounded-full bg-emerald/20 animate-pulse-slow hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/4 w-6 h-6 border-2 border-emerald/20 rounded-full hidden lg:block animate-float" />
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-rose/20 animate-pulse-slow hidden lg:block" style={{ animationDelay: '1.5s' }} />
    </section>
  )
}

export default Hero
