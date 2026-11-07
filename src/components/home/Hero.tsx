'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Copy,
  Flame,
  Flower2,
  Leaf,
  MapPin,
  Nut,
  Sprout,
  Wheat,
} from 'lucide-react'
import HeroBackgroundSlider from './HeroBackgroundSlider'
import { HERO_SLIDES, SLIDE_MS } from './heroSlides'

const CATEGORIES = [
  { label: 'Whole Spices', icon: Leaf, href: '/products?category=whole-spices' },
  { label: 'Spice Powders', icon: Flame, href: '/products?category=spice-powders' },
  { label: 'Nuts', icon: Nut, href: '/products?category=nuts-other' },
  { label: 'Seeds', icon: Sprout, href: '/products?category=seeds' },
  { label: 'Tea', icon: Coffee, href: '/products' },
  { label: 'Herbs', icon: Flower2, href: '/products' },
  { label: 'Agri Products', icon: Wheat, href: '/products?category=nuts-other' },
]

const TRUST = ['Quality Sourcing', 'Docs Support', 'Custom Packing']

const FLAGS = [
  { code: '🇬🇧', label: 'United Kingdom' },
  { code: '🇦🇪', label: 'United Arab Emirates' },
  { code: '🇺🇸', label: 'United States' },
  { code: '🇩🇪', label: 'Germany' },
  { code: '🇯🇵', label: 'Japan' },
  { code: '🇸🇬', label: 'Singapore' },
]

const pad = (value: number) => String(value).padStart(2, '0')

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [copied, setCopied] = useState(false)

  const active = HERO_SLIDES[index]
  const total = HERO_SLIDES.length

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % total)
    }, SLIDE_MS)

    return () => window.clearTimeout(timer)
  }, [index, paused, total])

  const step = (direction: number) => {
    setIndex((current) => (current + direction + total) % total)
  }

  const handleCopySpec = () => {
    navigator.clipboard.writeText(`${active.hsCode} - ${active.label.toUpperCase()} - MUNDRA PORT`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      className="relative isolate flex min-h-[660px] w-full items-center overflow-hidden border-b border-hairline pt-[calc(var(--header-h)+2.5rem)] pb-8 sm:min-h-[720px] sm:pt-[calc(var(--header-h)+3rem)] sm:pb-10 lg:min-h-[780px] lg:pb-12"
      aria-label="Hero section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <HeroBackgroundSlider slides={HERO_SLIDES} index={index} />

      {/* Brand ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 -left-40 h-[650px] w-[650px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 142, 69, 0.18) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      <div className="container-xl relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-16">

          {/* Left column — aligned to the container edge */}
          <div className="max-w-[46rem] space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-white sm:text-xs">
                <span className="glow-indicator-green" />
                Verified Indian Export House
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-300 sm:text-xs">
                <MapPin size={12} className="text-gold" />
                Mundra • Nhava Sheva
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-3.5 py-1">
              <span className="mono-tag text-gold">Spices • Tea • Seeds • Herbs • Agri</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                The Agricultural <br />
                <span className="bg-gradient-to-r from-amber-300 via-gold to-amber-200 bg-clip-text text-transparent">
                  Export Platform.
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate sm:text-base lg:text-lg">
                From whole spices and milled powders to seeds, tea, herbs and agri commodities — sourced direct from Indian farms, lab-verified, and shipped FOB / CIF to 35+ ports.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-6 py-3 text-xs font-bold text-navy shadow-[0_0_24px_rgba(224,160,69,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] sm:text-sm"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] sm:text-sm"
              >
                Browse Product Range
              </Link>

              <button
                onClick={handleCopySpec}
                className="code-pill group"
                title="Click to copy export specification"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-xs text-emerald-300">Copied Spec!</span>
                  </>
                ) : (
                  <>
                    <span className="font-bold text-gold">{active.hsCode}</span>
                    <span className="text-slate-400">• Mundra Port</span>
                    <Copy size={12} className="text-slate-400 transition-colors group-hover:text-white" />
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-300">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="flex-shrink-0 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
                  <span>{item}</span>
                </div>
              ))}

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                  {FLAGS.map((flag) => (
                    <span
                      key={flag.label}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy bg-slate-800 text-[11px] shadow"
                      title={flag.label}
                    >
                      {flag.code}
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-white">35+</span>
                <span className="text-slate-400">export ports</span>
              </div>
            </div>

            {/* Compact active-slide card for mobile */}
            <div className="rounded-2xl border border-white/10 bg-[#0A0F18]/65 p-4 backdrop-blur-xl lg:hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="mono-tag text-gold">Now sourcing · {active.hsCode}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous product slide"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span className="min-w-8 text-center font-mono text-[10px] tabular-nums text-slate-400">
                    {pad(index + 1)}/{pad(total)}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next product slide"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="mt-2 flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-white">{active.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{active.description}</p>
                </div>
                <Link
                  href={active.href}
                  aria-label={`Explore ${active.label}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-gold transition-colors hover:bg-white/[0.12]"
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column — live slide context */}
          <aside className="hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#0A0F18]/85 via-[#0A0F18]/70 to-[#0A0F18]/90 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="mono-tag text-gold">Now sourcing · {active.hsCode}</span>
                <span className="font-mono text-[10px] tabular-nums text-slate-400">
                  {pad(index + 1)} / {pad(total)}
                </span>
              </div>

              <p className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Product category
              </p>
              <h2 className="relative mt-1.5 text-2xl font-black leading-tight text-white">
                {active.label}
              </h2>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-300">
                {active.description}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {active.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold text-slate-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <Link
                href={active.href}
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/[0.14]"
              >
                Explore {active.label}
                <ArrowUpRight size={13} className="text-gold" />
              </Link>

              <div className="relative mt-6 flex items-center gap-1.5">
                {HERO_SLIDES.map((slide, slideIndex) => (
                  <span
                    key={slide.src}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      slideIndex === index ? 'w-6 bg-gold' : 'w-3 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom rail — categories left, slide controls right */}
        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 sm:mt-11 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="mono-tag shrink-0 text-slate-500">Range</span>
            {CATEGORIES.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur-md transition-colors hover:border-gold/40 hover:text-white"
              >
                <Icon size={11} className="text-gold" />
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-between gap-3 lg:flex lg:justify-end">
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              <span className="text-white">{active.label}</span> • {active.meta}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous product slide"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next product slide"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="glass-pill flex items-center gap-1.5 px-2.5 py-1.5">
              {HERO_SLIDES.map((slide, slideIndex) => (
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
                {pad(index + 1)}/{pad(total)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
