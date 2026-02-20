const steps = [
  {
    title: 'Enroll',
    description: 'Choose your program and sign up.',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Learn & Practice',
    description: 'Resume, LinkedIn, interviews, soft skills.',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a1 1 0 001.447.894L8 18l2.553.894A1 1 0 0012 18V7a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13V5a2 2 0 00-2-2h-5" />
      </svg>
    ),
  },
  {
    title: 'Get Mentorship',
    description: 'Guidance from industry experts.',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
  },
  {
    title: 'Land a Job',
    description: '100% job assistance & referrals.',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.866 3.134-7 7-7v14a7 7 0 01-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h4v4H5zM5 15h4v4H5z" />
      </svg>
    ),
  },
]

function HowItWorks() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-text/70 mb-1">How It Works</h2>
          <p className="text-3xl lg:text-4xl font-extrabold text-text">Step by Step</p>
        </div>

        <div className="rounded-3xl bg-gradient-to-b from-white to-primary/10 pt-8 pb-10 px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 px-5 pt-8 pb-10"
              >
                <div className="mb-4 flex items-center justify-center rounded-full bg-primary/10 w-12 h-12">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text/60">{step.description}</p>

                <div className="absolute -bottom-6 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-4 border-primary bg-white" />
                  <div className="mt-1 h-1 w-12 bg-primary/60 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

