/**
 * Single partner / accreditation logo with consistent sizing.
 */
function PartnerLogo({ logo, className = '', variant = 'default' }) {
  const isAccreditation = variant === 'accreditation'

  return (
    <div
      className={`group flex shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-90 ${
        isAccreditation
          ? 'h-20 sm:h-24 lg:h-[6.5rem] min-w-[7rem] sm:min-w-[8.5rem] max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem] px-2 sm:px-3'
          : 'h-16 sm:h-20 w-32 sm:w-40 rounded-xl border border-transparent bg-white px-4 py-3 hover:border-primary/15 hover:shadow-md hover:shadow-primary/5'
      } ${className}`}
      title={logo.name}
    >
      <img
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        loading="lazy"
        decoding="async"
        className={
          isAccreditation
            ? logo.layout === 'tall'
              ? 'h-[4.5rem] sm:h-24 lg:h-28 w-auto max-w-[9rem] sm:max-w-[10rem] object-contain object-center'
              : 'h-16 sm:h-20 lg:h-24 w-auto max-w-full object-contain object-center'
            : 'h-9 sm:h-11 w-auto max-w-full object-contain object-center grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100'
        }
      />
    </div>
  )
}

export default PartnerLogo
