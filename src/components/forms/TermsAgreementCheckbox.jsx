import { useState } from 'react'

/**
 * Terms acceptance control — matches Contact Us quick form behaviour.
 * Checkbox stays disabled until Terms (and Privacy, if enabled) links are opened.
 */
function TermsAgreementCheckbox({
  agree,
  onAgreeChange,
  error,
  requirePrivacy = true,
  id = 'terms-agreement',
}) {
  const [hasViewedTerms, setHasViewedTerms] = useState(false)
  const [hasViewedPrivacy, setHasViewedPrivacy] = useState(false)

  const canCheck = requirePrivacy ? hasViewedTerms && hasViewedPrivacy : hasViewedTerms

  const handleOpenTerms = () => {
    window.open('/terms', '_blank', 'noopener,noreferrer')
    setHasViewedTerms(true)
  }

  const handleOpenPrivacy = () => {
    window.open('/privacy', '_blank', 'noopener,noreferrer')
    setHasViewedPrivacy(true)
  }

  return (
    <div className="space-y-2 border-t border-gray-100 pt-4" role="group" aria-labelledby={`${id}-legend`}>
      <span id={`${id}-legend`} className="sr-only">
        Terms and conditions agreement
      </span>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={agree}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!canCheck}
          aria-describedby={error ? `${id}-error` : canCheck ? undefined : `${id}-hint`}
          aria-invalid={Boolean(error)}
        />
        <span className="text-sm text-text/70">
          I agree to the{' '}
          <button
            type="button"
            onClick={handleOpenTerms}
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Terms &amp; Conditions
          </button>
          {requirePrivacy && (
            <>
              {' '}
              and{' '}
              <button
                type="button"
                onClick={handleOpenPrivacy}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
            </>
          )}
          .
          {!canCheck && (
            <span className="block mt-1 text-xs text-text/50" id={`${id}-hint`}>
              Open the {requirePrivacy ? 'Terms & Conditions and Privacy Policy' : 'Terms & Conditions'} link
              {requirePrivacy ? 's' : ''} above before you can accept.
            </span>
          )}
        </span>
      </label>

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default TermsAgreementCheckbox
