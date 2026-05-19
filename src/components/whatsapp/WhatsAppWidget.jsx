import { useCallback, useEffect, useId, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_QUICK_QUESTIONS,
  openWhatsAppChat,
} from '../../config/whatsapp'

const POPUP_STORAGE_KEY = 'edugram-whatsapp-popup-dismissed'
const AUTO_SHOW_DELAY_MS = 4000

function WhatsAppIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-[#25D366]/70 group-hover:text-[#25D366] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function WhatsAppWidget() {
  const popupId = useId()
  const location = useLocation()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [hasAutoShown, setHasAutoShown] = useState(false)
  const [typingDots, setTypingDots] = useState('')

  const isHomePage = location.pathname === '/'

  const dismissPopup = useCallback((persist = true) => {
    setIsPopupOpen(false)
    if (persist) {
      try {
        sessionStorage.setItem(POPUP_STORAGE_KEY, '1')
      } catch {
        /* ignore storage errors */
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingDots((prev) => (prev.length >= 3 ? '' : `${prev}.`))
    }, 450)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!isHomePage || hasAutoShown) return

    let dismissed = false
    try {
      dismissed = sessionStorage.getItem(POPUP_STORAGE_KEY) === '1'
    } catch {
      dismissed = false
    }
    if (dismissed) return

    const timer = window.setTimeout(() => {
      setIsPopupOpen(true)
      setHasAutoShown(true)
    }, AUTO_SHOW_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [isHomePage, hasAutoShown])

  useEffect(() => {
    if (!isPopupOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') dismissPopup(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isPopupOpen, dismissPopup])

  const handleMainButtonClick = () => {
    openWhatsAppChat(WHATSAPP_DEFAULT_MESSAGE)
  }

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3 max-w-[calc(100vw-1.5rem)] sm:max-w-[20rem] pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div
        id={popupId}
        role="dialog"
        aria-labelledby={`${popupId}-title`}
        aria-describedby={`${popupId}-desc`}
        aria-hidden={!isPopupOpen}
        className={`pointer-events-auto w-[min(100vw-1.5rem,20rem)] origin-bottom-right transition-all duration-300 ease-out ${
          isPopupOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-3 scale-95 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-black/5 bg-white">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#25D366] via-[#1ebe5d] to-[#128C7E] px-4 pt-4 pb-5">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" aria-hidden />
            <div className="relative flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-md text-[#25D366]">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-200" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-white/90">
                    Online now
                  </span>
                </div>
                <h2 id={`${popupId}-title`} className="text-white font-bold text-[15px] leading-snug">
                  Need Help?
                </h2>
                <p className="text-white/85 text-xs mt-0.5 leading-relaxed">
                  Chat with EduGram Technologies
                </p>
              </div>
              <button
                type="button"
                onClick={() => dismissPopup(true)}
                className="shrink-0 -mt-0.5 -mr-0.5 p-1.5 rounded-full text-white/80 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Close WhatsApp chat preview"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p
              id={`${popupId}-desc`}
              className="relative mt-3 text-[11px] text-white/75 flex items-center gap-1.5"
            >
              <span className="inline-flex gap-0.5" aria-hidden>
                <span className="w-1 h-1 rounded-full bg-white/60 animate-bounce [animation-delay:0ms]" />
                <span className="w-1 h-1 rounded-full bg-white/60 animate-bounce [animation-delay:150ms]" />
                <span className="w-1 h-1 rounded-full bg-white/60 animate-bounce [animation-delay:300ms]" />
              </span>
              Replies in a few minutes{typingDots}
            </p>
          </div>

          {/* Body */}
          <div className="px-3.5 py-3.5 bg-gradient-to-b from-slate-50 to-white">
            <p className="text-[13px] text-text/70 leading-relaxed mb-3 px-0.5">
              Hi there! Pick a topic below or start a free consultation on WhatsApp.
            </p>

            <div className="grid grid-cols-2 gap-2 max-h-[11rem] overflow-y-auto pr-0.5 scrollbar-hide">
              {WHATSAPP_QUICK_QUESTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openWhatsAppChat(item.message)}
                  className="group flex items-center justify-between gap-1 text-left rounded-xl border border-slate-200/80 bg-white px-2.5 py-2.5 shadow-sm hover:border-[#25D366]/40 hover:shadow-md hover:shadow-[#25D366]/10 hover:-translate-y-px transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30"
                >
                  <span className="text-[11px] font-semibold text-text/85 leading-tight group-hover:text-[#128C7E] transition-colors">
                    {item.label}
                  </span>
                  <ChevronIcon />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => openWhatsAppChat(WHATSAPP_DEFAULT_MESSAGE)}
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-3 shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Start Chat
            </button>
          </div>
        </div>
      </div>

      <div className="relative pointer-events-auto">
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-pulse-ring"
          aria-hidden
        />
        <button
          type="button"
          onClick={handleMainButtonClick}
          className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
          aria-label="Chat on WhatsApp with EduGram Technologies"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        {!isPopupOpen && (
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="absolute -top-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-text/70 shadow-md border border-slate-200 text-xs font-bold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Open WhatsApp help menu"
            aria-expanded={isPopupOpen}
            aria-controls={popupId}
          >
            ?
          </button>
        )}
      </div>
    </div>
  )
}

export default WhatsAppWidget
