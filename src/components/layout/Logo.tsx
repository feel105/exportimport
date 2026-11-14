import Image from 'next/image'

const SIZES = {
  sm: { emblem: 'h-8 w-8', wordmark: 'h-[17px]', gap: 'gap-2' },
  md: { emblem: 'h-9 w-9', wordmark: 'h-5', gap: 'gap-2.5' },
  lg: { emblem: 'h-11 w-11', wordmark: 'h-6', gap: 'gap-3' },
} as const

export type LogoSize = keyof typeof SIZES

type LogoProps = {
  size?: LogoSize
  priority?: boolean
  className?: string
}

export default function Logo({ size = 'md', priority = false, className = '' }: LogoProps) {
  const styles = SIZES[size]

  return (
    <span className={`inline-flex items-center ${styles.gap} ${className}`}>
      <Image
        src="/logo/emblem-round.png"
        alt=""
        width={256}
        height={256}
        priority={priority}
        className={`${styles.emblem} shrink-0 rounded-full object-contain ring-1 ring-white/15 shadow-[0_0_18px_rgba(122,229,255,0.22)] transition-transform duration-300 group-hover:scale-105`}
      />
      <Image
        src="/logo/wordmark.png"
        alt="FEELEXIM"
        width={552}
        height={103}
        priority={priority}
        className={`${styles.wordmark} w-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`}
      />
    </span>
  )
}
