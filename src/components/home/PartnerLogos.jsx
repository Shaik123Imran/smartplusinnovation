import { partnerLogos } from '../../data/partnerLogos'
import LogoMarquee from './LogoMarquee'

function PartnerLogos() {
  return (
    <section
      className="section-block bg-white border-y border-gray-100/80 overflow-hidden"
      aria-labelledby="partner-logos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="partner-logos-heading"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] tracking-tight mb-10 sm:mb-12 lg:mb-14"
        >
          We are accredited by
        </h2>

        <LogoMarquee logos={partnerLogos} />
      </div>
    </section>
  )
}

export default PartnerLogos
