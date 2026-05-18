import RegisterInterestForm from '../forms/RegisterInterestForm'
import Button from '../common/Button'

function WorkshopRegistration({ onOpenModal }) {
  return (
    <section
      id="register-interest"
      className="scroll-mt-24 section-block bg-[#050816] text-white relative overflow-hidden"
      aria-labelledby="register-interest-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Register Your Interest
          </span>
          <h2 id="register-interest-heading" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
            <span className="block">Become</span>
            <span className="block mt-2 text-primary">Industry Ready</span>
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
              className="mt-6 lg:hidden"
            >
              Open quick registration form
            </Button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <ul className="space-y-3 text-sm sm:text-base text-white/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>Learn foundations and advanced concepts with hands-on projects.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>Get guidance from expert mentors to choose the right course.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>Secure your seat — our team will call you with next steps.</span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 bg-white rounded-2xl shadow-2xl ring-2 ring-primary/30 p-6 sm:p-8 text-text">
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
