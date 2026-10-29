import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'mb-10 lg:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'flex items-center gap-2 mb-3',
            align === 'center' && 'justify-center'
          )}
        >
          <div className="w-6 h-[1.5px] bg-gold" />
          <span className="eyebrow">{eyebrow}</span>
          {align === 'center' && <div className="w-6 h-[1.5px] bg-gold" />}
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight',
          isDark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-slate-300' : 'text-slate'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
