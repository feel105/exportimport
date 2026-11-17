'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  href: string
  emoji: string
  images: string[]
  badge: string
  label: string
  desc: string
  specs: string
  viewGrades: string
  interval?: number
}

export default function CategoryCard({
  href,
  emoji,
  images,
  badge,
  label,
  desc,
  specs,
  viewGrades,
  interval = 3600,
}: CategoryCardProps) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length < 2 || isPaused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isPaused])

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white/[0.02] transition-all duration-300 hover:border-hairline-light hover:bg-white/[0.05]"
    >
      <div className="keep-dark relative h-40 w-full shrink-0 overflow-hidden sm:h-44">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover object-center transition-all duration-700 ease-out ${
              index === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
        ))}

        {/* Ambient gradient protection for badge and indicators */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        <div className="relative z-10 m-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-navy-deep/70 text-xl shadow-sm backdrop-blur">
          {emoji}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
            {images.map((src, index) => (
              <span
                key={src}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === active ? 'w-4 bg-gold' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col space-y-4 border-t border-hairline p-5 sm:p-6">
        <span className="mono-tag text-[10px] text-gold">{badge}</span>

        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-gold">
            {label}
          </h3>
          <p className="text-slate-200 text-xs leading-relaxed">{desc}</p>
        </div>

        <div className="mt-auto space-y-2 border-t border-hairline pt-3.5">
          <p className="font-mono text-[10px] text-slate-300">{specs}</p>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-200 transition-colors group-hover:text-white">
            <span className="font-mono text-[11px]">{viewGrades}</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline bg-white/[0.06] shadow-sm transition-all group-hover:bg-gold group-hover:text-navy">
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
