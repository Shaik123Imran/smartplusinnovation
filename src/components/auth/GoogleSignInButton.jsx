import { GoogleLogin } from '@react-oauth/google'
import toast from 'react-hot-toast'

function GoogleSignInButton({ onSuccess, disabled, label = 'continue_with' }) {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  if (!clientId) {
    return (
      <p className="text-center text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        Google Sign-In requires <code className="text-xs">VITE_GOOGLE_CLIENT_ID</code> in your .env file.
      </p>
    )
  }

  return (
    <div className={`flex justify-center ${disabled ? 'opacity-60 pointer-events-none' : ''}`}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse?.credential) {
            onSuccess(credentialResponse.credential)
          } else {
            toast.error('Google sign in failed')
          }
        }}
        onError={() => toast.error('Google sign in was cancelled or failed')}
        theme="outline"
        size="large"
        text={label}
        shape="rectangular"
        width="100%"
      />
    </div>
  )
}

export default GoogleSignInButton
