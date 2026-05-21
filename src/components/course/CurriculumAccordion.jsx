import { useMemo, useState } from 'react'

function groupByMonth(items) {
  const months = []
  items.forEach((item, index) => {
    const monthTitle = item.month || 'Curriculum'
    const last = months[months.length - 1]
    if (!last || last.title !== monthTitle) {
      months.push({ title: monthTitle, weeks: [] })
    }
    months[months.length - 1].weeks.push({ ...item, weekIndex: index })
  })
  return months
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

function LockIcon({ locked }) {
  if (!locked) {
    return (
      <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    )
  }
  return (
    <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
}

function Chevron({ open }) {
  return (
    <svg
      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

/**
 * Nested curriculum: Month → Week → Chapters (topics).
 * Chapters stay locked until the learner has purchased/enrolled in the course.
 */
function CurriculumAccordion({ items = [], unlocked = false, isLoggedIn = false, onLockedChapter }) {
  const months = useMemo(() => groupByMonth(items), [items])
  const [openMonthIndex, setOpenMonthIndex] = useState(0)
  const [openWeekId, setOpenWeekId] = useState(months[0]?.weeks[0]?.id ?? null)
  const [openChapterKey, setOpenChapterKey] = useState(null)
  const [lockHint, setLockHint] = useState(null)

  const lockedMessage = isLoggedIn
    ? 'Complete enrollment to unlock this chapter and all course materials.'
    : 'Sign in and enroll to unlock this chapter and all course materials.'

  const lockedCtaLabel = isLoggedIn ? 'Go to checkout' : 'Sign in to enroll'

  const handleChapterClick = (chapterKey) => {
    if (!unlocked) {
      setLockHint(chapterKey)
      if (isLoggedIn) onLockedChapter?.()
      return
    }
    setLockHint(null)
    setOpenChapterKey((prev) => (prev === chapterKey ? null : chapterKey))
  }

  if (!items.length) return null

  return (
    <div className="space-y-3">
      {!unlocked && (
        <p className="text-sm text-neutral-600 text-center px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50">
          Preview the full syllabus below. Chapters are{' '}
          <span className="font-semibold text-neutral-900">locked</span> until you enroll.
        </p>
      )}

      {lockHint && !unlocked && (
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-amber-900 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50"
          role="status"
        >
          <p>{lockedMessage}</p>
          <button
            type="button"
            onClick={() => onLockedChapter?.()}
            className="shrink-0 font-semibold text-neutral-900 underline underline-offset-2 hover:no-underline"
          >
            {lockedCtaLabel} →
          </button>
        </div>
      )}

      {months.map((month, monthIndex) => {
        const monthOpen = openMonthIndex === monthIndex
        return (
          <div key={month.title} className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenMonthIndex(monthOpen ? -1 : monthIndex)}
              className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
              aria-expanded={monthOpen}
            >
              <span className="font-bold text-neutral-900 text-sm sm:text-base pr-2">{month.title}</span>
              <Chevron open={monthOpen} />
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                monthOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden border-t border-neutral-100">
                <div className="p-3 sm:p-4 space-y-2 bg-neutral-50/50">
                  {month.weeks.map((week) => {
                    const weekOpen = openWeekId === week.id
                    return (
                      <div
                        key={week.id}
                        className="rounded-lg border border-neutral-200 bg-white overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenWeekId(weekOpen ? null : week.id)}
                          className={`w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors ${
                            weekOpen ? 'bg-neutral-50' : 'hover:bg-neutral-50'
                          }`}
                          aria-expanded={weekOpen}
                        >
                          <span className="font-semibold text-neutral-900 text-sm sm:text-base pr-2">
                            {week.title}
                          </span>
                          <Chevron open={weekOpen} />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            weekOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden border-t border-neutral-100">
                            <ul className="divide-y divide-neutral-100">
                              {(week.topics || []).map((topic, topicIndex) => {
                                const chapterKey = `${week.id}-ch-${topicIndex}`
                                const chapterOpen = openChapterKey === chapterKey
                                const locked = !unlocked

                                return (
                                  <li key={chapterKey}>
                                    <button
                                      type="button"
                                      onClick={() => handleChapterClick(chapterKey)}
                                      className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors ${
                                        locked
                                          ? 'hover:bg-neutral-50 cursor-pointer'
                                          : chapterOpen
                                            ? 'bg-neutral-50'
                                            : 'hover:bg-neutral-50'
                                      }`}
                                      aria-expanded={chapterOpen && !locked}
                                    >
                                      <DocumentIcon />
                                      <span
                                        className={`flex-1 text-sm sm:text-base ${
                                          locked ? 'text-neutral-500' : 'text-neutral-800'
                                        }`}
                                      >
                                        {topic}
                                      </span>
                                      <LockIcon locked={locked} />
                                    </button>

                                    {chapterOpen && unlocked && (
                                      <div className="px-4 pb-4 pl-12 pr-4 border-t border-neutral-50 bg-white">
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                          This chapter is unlocked. Access lesson materials, assignments, and
                                          recordings from your{' '}
                                          <span className="font-semibold text-neutral-900">Dashboard</span> after
                                          the batch starts.
                                        </p>
                                      </div>
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CurriculumAccordion
