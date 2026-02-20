import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/home/Hero'
import WorkshopRegistration from '../components/home/WorkshopRegistration'
import Stats from '../components/home/Stats'
import FeaturedPrograms from '../components/home/FeaturedPrograms'
import Community from '../components/home/Community'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import ContactQuickForm from '../components/home/ContactQuickForm'

function Home() {
  const [isQuickContactOpen, setIsQuickContactOpen] = useState(false)

  return (
    <Layout>
      <Hero />
      <WorkshopRegistration />
      <Stats />
      <FeaturedPrograms />
      <Community onContactClick={() => setIsQuickContactOpen(true)} />
      <Testimonials />
      <Newsletter />
      <ContactQuickForm
        open={isQuickContactOpen}
        onClose={() => setIsQuickContactOpen(false)}
      />
    </Layout>
  )
}

export default Home
