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
    narrow: 'max-w-5xl',
    default: 'max-w-[1780px]',
    wide: 'max-w-[1880px]',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20',
        maxSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
