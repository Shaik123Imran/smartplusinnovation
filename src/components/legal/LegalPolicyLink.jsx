import { useLegalModal } from '../../context/LegalModalContext'

const linkClass =
  'font-semibold text-primary underline-offset-2 hover:underline hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 rounded'

export function TermsPolicyLink({ className = '', children = 'Terms & Conditions' }) {
  const { openTerms } = useLegalModal()
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        openTerms()
      }}
      className={`${linkClass} ${className}`}
    >
      {children}
    </button>
  )
}

export function PrivacyPolicyLink({ className = '', children = 'Privacy Policy' }) {
  const { openPrivacy } = useLegalModal()
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        openPrivacy()
      }}
      className={`${linkClass} ${className}`}
    >
      {children}
    </button>
  )
}
