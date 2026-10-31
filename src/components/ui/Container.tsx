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
    narrow: 'w-full max-w-5xl mx-auto',
    default: 'w-full max-w-[1920px] mx-auto',
    wide: 'w-full max-w-[1920px] mx-auto',
    full: 'w-full max-w-full',
  }

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16',
        maxSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
