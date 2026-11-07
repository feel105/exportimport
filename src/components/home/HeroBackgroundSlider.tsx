'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  src: string
  label: string
  meta: string
}

const SLIDES: Slide[] = [
  { src: '/home/whole-spices.jpg', label: 'Whole Spices', meta: 'Machine Cleaned • ASTA' },
  { src: '/home/spice-powders.jpg', label: 'Spice Powders', meta: '60–100 Mesh • Pure' },
  { src: '/home/nuts.jpg', label: 'Nuts & Dry Fruits', meta: 'Export Grade • Assorted' },
  { src: '/home/seeds.jpg', label: 'Seeds', meta: 'Sortex 99.8% • Bulk' },
  { src: '/home/tea.jpg', label: 'Tea', meta: 'Single Origin • Bulk' },
  { src: '/home/herbs.jpg', label: 'Herbs', meta: 'Air-Dried • Aromatic' },
  { src: '/home/agri-products.jpg', label: 'Agri Products', meta: 'Farm Direct • FOB / CIF' },
]

const SLIDE_MS = 5500

export default function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0)
  const active = SLIDES[index]

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [index])

  const step = (direction: number) => {
    setIndex((current) => (current + direction + SLIDES.length) % SLIDES.length)
  }

  return (
    <>
      {/* Full-bleed background slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {SLIDES.map((slide, slideIndex) => {
          const isActive = slideIndex === index
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={slideIndex === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          )
        })}

        {/* Left-weighted scrim keeps the content readable while the produce stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F18] via-[#0A0F18]/88 to-[#0A0F18]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F18]/75 via-transparent to-[#0A0F18]/90" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-5 right-4 z-20 flex items-center gap-2 sm:bottom-7 sm:right-7">
        <div className="glass-pill flex items-center gap-2 px-2.5 py-1.5 sm:px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
          <span className="text-[10px] font-bold text-white">{active.label}</span>
          <span className="hidden text-[10px] text-slate-400 sm:inline">• {active.meta}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous background slide"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next background slide"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="glass-pill flex items-center gap-1.5 px-2.5 py-1.5">
          {SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show slide ${slideIndex + 1}: ${slide.label}`}
              aria-current={slideIndex === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slideIndex === index
                  ? 'w-4 bg-gold'
                  : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
          <span className="ml-1 font-mono text-[10px] tabular-nums text-slate-300">
            {String(index + 1).padStart(2, '0')}/{String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </>
  )
}
