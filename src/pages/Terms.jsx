import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLegalModal } from '../context/LegalModalContext'

/** /terms opens the modal on the home page */
function Terms() {
  const { openTerms } = useLegalModal()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
    openTerms()
  }, [navigate, openTerms])

  return null
}

export default Terms
