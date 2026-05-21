import { useState } from 'react'

function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const showMonthHeader =
          item.month && (index === 0 || items[index - 1].month !== item.month)

        return (
          <div key={item.id || item.title}>
            {showMonthHeader && (
              <div className="mb-3 mt-6 first:mt-0 px-1">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  {item.month}
                </h3>
              </div>
            )}
            <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-neutral-900 text-sm sm:text-base pr-2">
                  {item.title}
                </span>
                <span className="text-neutral-500 text-lg leading-none shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 sm:px-5 pb-4 space-y-2 border-t border-neutral-100 pt-3">
                    {(item.topics || []).map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-900" aria-hidden />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
