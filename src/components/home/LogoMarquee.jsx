import PartnerLogo from '../common/PartnerLogo'

/**
 * Accreditation logo row — static centered layout (reference design) with mobile scroll.
 */
function LogoMarquee({ logos }) {
  return (
    <>
      {/* Tablet & desktop: centered row, even spacing */}
      <div
        className="hidden sm:flex flex-wrap items-center justify-center gap-x-10 gap-y-12 lg:gap-x-14 xl:gap-x-20"
        role="list"
        aria-label="Accreditation and government partner logos"
      >
        {logos.map((logo) => (
          <div key={logo.id} role="listitem">
            <PartnerLogo logo={logo} variant="accreditation" />
          </div>
        ))}
      </div>

      {/* Mobile: horizontal snap scroll */}
      <div
        className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        role="list"
        aria-label="Accreditation and government partner logos"
      >
        <div className="flex items-center gap-8 w-max py-2">
          {logos.map((logo) => (
            <div key={logo.id} role="listitem" className="snap-center">
              <PartnerLogo logo={logo} variant="accreditation" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LogoMarquee
