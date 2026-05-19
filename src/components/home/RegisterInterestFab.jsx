function RegisterInterestFab({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/30 max-w-[calc(100vw-2rem)]"
      aria-label="Register your interest — open registration form"
    >
      <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      <span className="truncate">Register Your Interest</span>
    </button>
  )
}

export default RegisterInterestFab
