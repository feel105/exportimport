import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full'
  children: React.ReactNode
}

export function Container({
  size = 'default',
  children,
  className,
  ...props
}: ContainerProps) {
  const maxSizes = {
    narrow: 'w-full max-w-6xl mx-auto',
    default: 'w-full',
    wide: 'w-full',
    full: 'w-full',
  }

  return (
    <div
      className={cn(
        'w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20',
        maxSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
