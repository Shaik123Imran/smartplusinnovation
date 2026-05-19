import { useEffect } from 'react'
import LegalDocumentBody from './LegalDocumentBody'
import { termsSections } from '../../data/legal/termsContent'
import { privacySections } from '../../data/legal/privacyContent'

const DOCUMENTS = {
  terms: {
    title: 'Terms & Conditions',
    sections: termsSections,
  },
  privacy: {
    title: 'Privacy Policy',
    sections: privacySections,
  },
}

function LegalDocumentModal({ isOpen, onClose, type }) {
  const doc = type ? DOCUMENTS[type] : null

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !doc) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="legal-modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="legal-modal-panel relative flex w-full sm:max-w-3xl flex-col overflow-hidden rounded-t-3xl sm:rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 max-h-[94vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 sm:px-6 sm:py-4 bg-white sticky top-0 z-10">
          <h2 id="legal-modal-title" className="text-lg sm:text-xl font-bold text-text pr-2">
            {doc.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text/60 hover:bg-gray-100 hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Close and return"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white">
          <LegalDocumentBody sections={doc.sections} />
        </div>

        <div className="shrink-0 border-t border-gray-100 px-4 py-3 sm:px-6 sm:py-4 bg-gray-50/80">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto sm:min-w-[140px] rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalDocumentModal
