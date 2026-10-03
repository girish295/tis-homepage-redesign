const styles = {
  solid: 'bg-forest text-mist hover:bg-ink',
  accent: 'bg-saffron text-ink hover:bg-mist',
  outline: 'border border-current hover:bg-ink hover:text-mist',
}

export default function Button({ href, variant = 'solid', className = '', children, ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-pill px-7 py-3 font-semibold ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
