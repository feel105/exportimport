import { cn } from '@/lib/utils'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export function GlassCard({
  hover = false,
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 sm:p-8 w-full',
        hover && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
