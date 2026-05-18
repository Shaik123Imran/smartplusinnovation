import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

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
