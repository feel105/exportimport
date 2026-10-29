import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'outline' | 'outline-dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  loading?: boolean
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  loading = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg cursor-pointer text-center select-none disabled:opacity-50 disabled:pointer-events-none'

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variantStyles = {
    primary: 'bg-royal hover:bg-royal-dark text-white shadow-sm hover:shadow-[0_0_24px_rgba(29,78,216,0.35)]',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20',
    gold: 'bg-gold hover:bg-gold-light text-navy font-bold shadow-sm hover:shadow-[0_0_20px_rgba(214,181,116,0.25)]',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/10',
    outline: 'bg-transparent text-white border border-white/35 hover:bg-white/10 hover:border-white/60',
    'outline-dark': 'bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white',
  }

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </Link>
    )
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  )
}
