import { createContext, useContext, useState, useCallback } from 'react'
import LegalDocumentModal from '../components/legal/LegalDocumentModal'

const LegalModalContext = createContext(null)

export function useLegalModal() {
  const ctx = useContext(LegalModalContext)
  if (!ctx) {
    throw new Error('useLegalModal must be used within LegalModalProvider')
  }
  return ctx
}

export function LegalModalProvider({ children }) {
  const [activeDoc, setActiveDoc] = useState(null)

  const openTerms = useCallback(() => setActiveDoc('terms'), [])
  const openPrivacy = useCallback(() => setActiveDoc('privacy'), [])
  const close = useCallback(() => setActiveDoc(null), [])

  return (
    <LegalModalContext.Provider value={{ openTerms, openPrivacy, close }}>
      {children}
      <LegalDocumentModal isOpen={Boolean(activeDoc)} onClose={close} type={activeDoc} />
    </LegalModalContext.Provider>
  )
}
