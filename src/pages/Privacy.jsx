import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLegalModal } from '../context/LegalModalContext'

/** /privacy opens the modal on the home page */
function Privacy() {
  const { openPrivacy } = useLegalModal()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
    openPrivacy()
  }, [navigate, openPrivacy])

  return null
}

export default Privacy
