import { TermsPolicyLink, PrivacyPolicyLink } from '../legal/LegalPolicyLink'

/**
 * Terms & Privacy agreement checkbox — links open PDF modals; user checks manually.
 */
function TermsAgreementCheckbox({
  agree,
  onAgreeChange,
  error,
  requirePrivacy = true,
  id = 'terms-agreement',
}) {
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
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={Boolean(error)}
        />
        <span className="text-sm text-text/70">
          I agree to the <TermsPolicyLink />
          {requirePrivacy && (
            <>
              {' '}
              and <PrivacyPolicyLink />
            </>
          )}
          .
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
