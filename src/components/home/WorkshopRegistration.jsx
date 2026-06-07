import RegisterInterestForm from '../forms/RegisterInterestForm'
import Button from '../common/Button'

function WorkshopRegistration({ onOpenModal }) {
  return (
    <section
      id="register-interest"
      className="scroll-mt-24 section-block bg-gradient-to-br from-[#0a0f2c] via-[#0d1333] to-[#0a1028] text-white relative overflow-hidden"
      aria-labelledby="register-interest-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/15 via-emerald/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-emerald text-white shadow-lg shadow-primary/25 ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Register Your Interest
          </span>
          <h2 id="register-interest-heading" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
            <span className="block">Become</span>
            <span className="block mt-2 bg-gradient-to-r from-secondary via-emerald to-accent bg-clip-text text-transparent">Industry Ready</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Tell us about yourself — we&apos;ll share batch dates, fees, and the right program for your goals.
          </p>
          {onOpenModal && (
            <Button
              type="button"
              onClick={onOpenModal}
              variant="secondary"
              size="lg"
              className="mt-6 lg:hidden shadow-lg shadow-secondary/25"
            >
              Open quick registration form
            </Button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <ul className="space-y-4 text-sm sm:text-base text-white/80">
              <li className="flex gap-4 group">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-md shadow-emerald-500/30">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">Learn foundations and advanced concepts with hands-on projects.</span>
              </li>
              <li className="flex gap-4 group">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-md shadow-emerald-500/30">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">Get guidance from expert mentors to choose the right course.</span>
              </li>
              <li className="flex gap-4 group">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-md shadow-emerald-500/30">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">Secure your seat — our team will call you with next steps.</span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-primary/20 ring-1 ring-white/30 p-6 sm:p-8 text-text">
            <h3 className="text-xl font-bold mb-2 text-text">Registration form</h3>
            <p className="text-text/60 text-sm mb-6">
              All fields are required. You must accept our Terms &amp; Conditions before submitting.
            </p>
            <RegisterInterestForm formId="register-interest-section-form" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkshopRegistration
