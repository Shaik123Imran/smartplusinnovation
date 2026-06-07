const variants = {
  primary: 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary',
  secondary: 'bg-gradient-to-r from-secondary/10 to-emerald/10 text-secondary',
  accent: 'bg-gradient-to-r from-accent/10 to-rose/10 text-accent',
  success: 'bg-gradient-to-r from-emerald/10 to-emerald/5 text-emerald-700',
  warning: 'bg-gradient-to-r from-orange/10 to-orange/5 text-orange-700',
  danger: 'bg-gradient-to-r from-rose/10 to-rose/5 text-rose-700',
  gray: 'bg-gray-100 text-gray-700',
}

function Badge({ children, variant = 'primary', className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
