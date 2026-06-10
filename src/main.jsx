import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
console.log(`[APP] MODE: ${import.meta.env.MODE} | VITE_GOOGLE_CLIENT_ID set: ${!!googleClientId} | VITE_API_URL: ${import.meta.env.VITE_API_URL || '(fallback to /api)'}`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { borderRadius: '12px', padding: '12px 16px' },
        }}
      />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
