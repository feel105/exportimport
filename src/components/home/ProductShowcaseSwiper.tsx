'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Flame,
  Flower2,
  Leaf,
  MapPin,
  Nut,
  Pause,
  Play,
  Ship,
  Sprout,
  Wheat,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Slide = {
  id: string
  label: string
  short: string
  description: string
  specs: string[]
  metric: string
  origin: string
  icon: LucideIcon
  accent: string
  gradient: string
  href: string
}

const SLIDES: Slide[] = [
  {
    id: 'whole-spices',
    label: 'Whole Spices',
    short: 'Sortex Cleaned',
    description:
      'Cumin, coriander, turmeric fingers, black pepper, cloves and fennel from prime Gujarat and Kerala belts.',
    specs: ['99.8% Purity', '25kg / 50kg', 'HS 0909'],
    metric: '8 Varieties',
    origin: 'Gujarat Belt',
    icon: Leaf,
    accent: '#E0A045',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(224,160,69,0.40) 0%, rgba(90,58,22,0.36) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products?category=whole-spices',
  },
  {
    id: 'spice-powders',
    label: 'Spice Powders',
    short: 'Steam Sterilized',
    description:
      'Turmeric, red chilli, coriander, ginger, garlic, onion and moringa powders milled to buyer mesh.',
    specs: ['60–100 Mesh', 'Steam Treated', 'HS 0910'],
    metric: '7 Varieties',
    origin: 'Rajasthan Belt',
    icon: Flame,
    accent: '#F87171',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(248,113,113,0.36) 0%, rgba(120,53,15,0.36) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products?category=spice-powders',
  },
  {
    id: 'nuts',
    label: 'Nuts',
    short: 'Hand Sorted',
    description:
      'Assorted nuts, cashew kernels, peanuts and almonds graded for retail and industrial packing.',
    specs: ['Hand Sorted', 'Vacuum Pack', 'HS 0801'],
    metric: 'Assorted Lots',
    origin: 'Konkan Coast',
    icon: Nut,
    accent: '#D9A066',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(217,160,102,0.36) 0%, rgba(92,64,40,0.38) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products?category=nuts-other',
  },
  {
    id: 'seeds',
    label: 'Seeds',
    short: 'Food Grade',
    description:
      'Sesame, flax, chia, basil, kalonji and quinoa seeds cleaned and graded for global food brands.',
    specs: ['99% Purity', 'Food Grade', 'HS 1207'],
    metric: '7 Varieties',
    origin: 'Central India',
    icon: Sprout,
    accent: '#34D399',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(52,211,153,0.32) 0%, rgba(6,78,59,0.38) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products?category=seeds',
  },
  {
    id: 'tea',
    label: 'Tea',
    short: 'Garden Fresh',
    description:
      'CTC, orthodox, green and herbal tea blends sourced from Assam, Darjeeling and Nilgiri gardens.',
    specs: ['Garden Fresh', 'Bulk Bags', 'HS 0902'],
    metric: 'Bulk Lots',
    origin: 'Assam Hills',
    icon: Coffee,
    accent: '#4ADE80',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(74,222,128,0.30) 0%, rgba(20,83,45,0.40) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products',
  },
  {
    id: 'herbs',
    label: 'Herbs',
    short: 'Air Dried',
    description:
      'Moringa, basil, mint, oregano and dried culinary herbs processed for clean-label food lines.',
    specs: ['Air Dried', 'Cut & Sifted', 'HS 1211'],
    metric: 'Cut & Sifted',
    origin: 'Southern India',
    icon: Flower2,
    accent: '#A3E635',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(163,230,53,0.28) 0%, rgba(54,83,20,0.38) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products',
  },
  {
    id: 'agriculture',
    label: 'Agri Products',
    short: 'FCL / LCL',
    description:
      'Grains, pulses, oil seeds and bulk agricultural commodities shipped in fumigated export packing.',
    specs: ['Bulk FCL', 'Fumigated', 'HS 1006'],
    metric: 'FCL / LCL',
    origin: 'Pan-India',
    icon: Wheat,
    accent: '#FBBF24',
    gradient:
      'radial-gradient(120% 130% at 15% 8%, rgba(251,191,36,0.32) 0%, rgba(113,63,18,0.38) 35%, rgba(18,26,38,0.94) 66%, rgba(11,17,26,1) 100%)',
    href: '/products?category=nuts-other',
  },
]

const AUTOPLAY_MS = 4200

export default function ProductShowcaseSwiper() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const isPaused = paused
  const active = SLIDES[index]

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [index, isPaused])

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 45) return
    if (delta < 0) next()
    else prev()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    }
  }

  return (
    <div className="glass-card relative w-full overflow-hidden p-5 sm:p-6">
      {/* Ambient glow follows the active category */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full opacity-70 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(circle, ${active.accent}55, transparent 70%)` }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="glow-indicator-green" />
          <div>
            <p className="text-xs font-bold text-white">Export Product Portfolio</p>
            <p className="text-[10px] text-slate">7 categories • ready to ship worldwide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-slate tabular-nums">
            {String(index + 1).padStart(2, '0')}{' '}
            <span className="text-slate-dark">/ {String(SLIDES.length).padStart(2, '0')}</span>
          </span>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] text-white transition-colors hover:bg-white/20"
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div
        className="relative z-10 mt-4 overflow-hidden rounded-2xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Export product categories"
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, slideIndex) => {
            const Icon = slide.icon
            return (
              <div
                key={slide.id}
                className="w-full shrink-0"
                aria-hidden={slideIndex !== index}
              >
                <div
                  className="relative flex h-[260px] flex-col justify-between overflow-hidden p-5 sm:h-[300px] sm:p-6 xl:h-[330px]"
                  style={{ background: slide.gradient }}
                >
                  <div className="absolute inset-0 bg-grid opacity-25" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <Icon
                    className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 opacity-[0.07]"
                    strokeWidth={1}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                      <MapPin size={11} style={{ color: slide.accent }} />
                      {slide.origin}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                      <Ship size={10} />
                      FOB / CIF
                    </span>
                  </div>

                  <div className="relative z-10 max-w-[88%]">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md"
                        style={{ color: slide.accent }}
                      >
                        <Icon size={16} />
                      </span>
                      <span className="mono-tag" style={{ color: slide.accent }}>
                        {slide.short}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black leading-none tracking-tight text-white sm:text-3xl">
                      {slide.label}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[11px] leading-relaxed text-slate-200 sm:text-xs">
                      {slide.description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      {slide.specs.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-[9px] font-semibold text-white/90"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between gap-2 border-t border-white/10 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white">
                      <BadgeCheck size={12} style={{ color: slide.accent }} />
                      {slide.metric}
                    </span>
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-[10px] font-bold text-white transition-colors hover:bg-white/20"
                    >
                      Explore <ArrowUpRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous category"
          className="absolute left-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/65"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next category"
          className="absolute right-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/65"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Category thumbnails */}
      <div className="no-scrollbar relative z-10 mt-3 flex items-center gap-1.5 overflow-x-auto pb-0.5">
        {SLIDES.map((slide, slideIndex) => {
          const Icon = slide.icon
          const isActive = slideIndex === index
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => go(slideIndex)}
              aria-label={`Show ${slide.label}`}
              aria-current={isActive}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-white/35 bg-white/15 text-white shadow-[0_0_16px_rgba(255,255,255,0.08)]'
                  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white'
              }`}
            >
              <Icon size={11} style={isActive ? { color: slide.accent } : undefined} />
              {slide.label}
            </button>
          )
        })}
      </div>

      {/* Autoplay progress */}
      <div className="relative z-10 mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div
          key={`${index}-${isPaused}`}
          className="swiper-progress h-full rounded-full"
          data-paused={isPaused}
          style={{ background: `linear-gradient(90deg, ${active.accent}, #F5BE6B)` }}
        />
      </div>
    </div>
  )
}
