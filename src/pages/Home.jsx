import { useState } from 'react'
import Layout from '../components/layout/Layout'
import { usePageTitle } from '../hooks/usePageTitle'
import Hero from '../components/home/Hero'
import FastTrackSpotlight from '../components/home/FastTrackSpotlight'
import WorkshopRegistration from '../components/home/WorkshopRegistration'
import HowItWorks from '../components/home/HowItWorks'
import Stats from '../components/home/Stats'
import Community from '../components/home/Community'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import ContactQuickForm from '../components/home/ContactQuickForm'
import RegisterInterestModal from '../components/home/RegisterInterestModal'
import RegisterInterestFab from '../components/home/RegisterInterestFab'

function Home() {
  usePageTitle()
  const [isQuickContactOpen, setIsQuickContactOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const openRegister = () => setIsRegisterOpen(true)

  return (
    <Layout>
      <Hero onRegisterInterest={openRegister} />
      <FastTrackSpotlight />
      <WorkshopRegistration onOpenModal={openRegister} />
      <HowItWorks />
      <Stats />
      <Community onContactClick={() => setIsQuickContactOpen(true)} />
      <Testimonials />
      <Newsletter />
      <ContactQuickForm
        open={isQuickContactOpen}
        onClose={() => setIsQuickContactOpen(false)}
      />
      <RegisterInterestModal
        open={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      <RegisterInterestFab onClick={openRegister} />
    </Layout>
  )
}

export default Home
