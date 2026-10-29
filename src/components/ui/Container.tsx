import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide'
  children: React.ReactNode
}

export function Container({
  size = 'default',
  children,
  className,
  ...props
}: ContainerProps) {
  const maxSizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
  }

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        maxSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
