import { useNavigate } from 'react-router-dom'

const learnPracticeTopics = [
  {
    title: 'Resume Building',
    description: 'Craft an ATS-friendly resume that highlights your skills, projects, and achievements.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Optimization',
    description: 'Optimize your profile, headline, and content to attract recruiters and opportunities.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: 'Interview Preparation',
    description: 'Prepare for technical and HR interviews with structured guidance and feedback.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Live Sessions',
    description: 'Join interactive live classes with expert instructors and real-time learning.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Q&A Sessions',
    description: 'Ask questions and get clear answers from mentors and industry professionals.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Doubt Solving',
    description: 'Resolve doubts quickly with dedicated support so you never fall behind.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Projects',
    description: 'Work on hands-on projects that reflect real industry workflows and tools.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mock Interviews',
    description: 'Practice realistic mock interviews and receive actionable improvement tips.',
    to: '/programs',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

function HowItWorks() {
  const navigate = useNavigate()

  const handleNavigate = (to) => {
    if (to) navigate(to)
  }

  return (
    <section className="section-block bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-center">
          <span className="section-eyebrow bg-primary/10 text-primary">
            How It Works
          </span>
          <h2 id="how-it-works-heading" className="section-title">
            <span className="section-title-line">Learn &amp;</span>
            <span className="section-title-accent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Practice
            </span>
          </h2>
          <p className="section-subtitle-center">
            Career-ready skills beyond coursework — from resume building to mock interviews, all in one place.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-b from-white to-primary/10 pt-8 pb-10 px-4 sm:px-6 lg:px-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {learnPracticeTopics.map((topic) => (
              <li key={topic.title} className="flex">
                <button
                  type="button"
                  onClick={() => handleNavigate(topic.to)}
                  aria-label={`${topic.title} — ${topic.description}`}
                  className="group flex w-full min-h-[210px] flex-col items-center text-center bg-white rounded-2xl shadow-md px-4 py-6 sm:px-5 sm:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                    {topic.icon}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-text mb-2 leading-snug px-1">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-text/60 leading-relaxed line-clamp-3 flex-1 px-1">
                    {topic.description}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
