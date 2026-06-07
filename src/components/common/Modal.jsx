import { useEffect } from 'react'

function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={`relative bg-white rounded-2xl shadow-2xl shadow-primary/10 w-full ${sizes[size]} max-h-[90vh] overflow-hidden animate-slide`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary/[0.02] via-white to-secondary/[0.02]">
          <h3 id="modal-title" className="text-xl font-bold text-text">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-primary/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5 text-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
