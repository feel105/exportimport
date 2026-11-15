'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import {
  // ArrowRight,
  ArrowUpRight,
  // Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Coffee,
  // Copy,
  Flame,
  Flower2,
  Leaf,
  MapPin,
  Nut,
  Sprout,
  Wheat,
} from 'lucide-react'
import HeroBackgroundSlider from './HeroBackgroundSlider'
import { HERO_SLIDES, SLIDE_MS, type HeroSlide } from './heroSlides'
import { localeHref } from '@/i18n/href'
import type { Locale } from '@/i18n/config'

const CATEGORIES = [
  { key: 'whole-spices', icon: Leaf, href: '/products?category=whole-spices' },
  { key: 'spice-powders', icon: Flame, href: '/products?category=spice-powders' },
  { key: 'nuts-other', icon: Nut, href: '/products?category=nuts-other' },
  { key: 'seeds', icon: Sprout, href: '/products?category=seeds' },
  { key: 'tea', icon: Coffee, href: '/products' },
  { key: 'herbs', icon: Flower2, href: '/products' },
  { key: 'agri', icon: Wheat, href: '/products?category=nuts-other' },
]

const FLAGS = [
  { code: '🇬🇧', key: 'uk' },
  { code: '🇦🇪', key: 'uae' },
  { code: '🇺🇸', key: 'us' },
  { code: '🇩🇪', key: 'de' },
  { code: '🇯🇵', key: 'jp' },
  { code: '🇸🇬', key: 'sg' },
]

const pad = (value: number) => String(value).padStart(2, '0')

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // const [copied, setCopied] = useState(false)
  const t = useTranslations('hero')
  const locale = useLocale() as Locale

  const slides: HeroSlide[] = HERO_SLIDES.map((slide) => ({
    ...slide,
    label: t(`slides.${slide.key}.label`),
    meta: t(`slides.${slide.key}.meta`),
    description: t(`slides.${slide.key}.description`),
    specs: t.raw(`slides.${slide.key}.specs`) as string[],
  }))

  const trust = t.raw('trust') as string[]
  const active = slides[index]
  const total = slides.length

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

  // const handleCopySpec = () => {
  //   navigator.clipboard.writeText(`${active.hsCode} - ${active.label.toUpperCase()} - MUNDRA PORT`)
  //   setCopied(true)
  //   setTimeout(() => setCopied(false), 2200)
  // }

  return (
    <section
      className="relative isolate flex min-h-[660px] w-full flex-col overflow-hidden border-b border-hairline pt-[calc(var(--header-h)+2.5rem)] pb-8 sm:min-h-[720px] sm:pt-[calc(var(--header-h)+3rem)] sm:pb-10 lg:min-h-[780px] lg:pb-12"
      aria-label={t('aria')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <HeroBackgroundSlider slides={slides} index={index} />

      <div
        className="pointer-events-none absolute top-1/4 -left-40 h-[650px] w-[650px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(56, 207, 255, 0.18) 0%, rgba(56, 207, 255, 0.05) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      <div className="container-xl relative z-10 flex w-full flex-1 flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-16">
          <div className="max-w-[46rem] space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-bold text-white sm:text-xs">
                <span className="glow-indicator-green" />
                {t('verified')}
              </span>
              {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-300 sm:text-xs">
                <MapPin size={12} className="text-gold" />
                {t('ports')}
              </span> */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-3.5 py-1">
                <span className="mono-tag text-gold">{t('range')}</span>
              </div>
            </div>



            <div className="space-y-3">
              <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                {t('titleLead')} <br />
                <span className="bg-gradient-to-r from-cyan-200 via-gold to-cyan-300 bg-clip-text text-transparent">
                  {t('titleHighlight')}
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate sm:text-base lg:text-lg">
                {t('description')}
              </p>
            </div>

            {/* <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={localeHref(locale, '/contact')}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-6 py-3 text-xs font-bold text-navy shadow-[0_0_24px_rgba(56,207,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(56,207,255,0.5)] sm:text-sm"
              >
                <span>{t('requestQuotation')}</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href={localeHref(locale, '/products')}
                className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] sm:text-sm"
              >
                {t('browseRange')}
              </Link>

              <button
                onClick={handleCopySpec}
                className="code-pill group"
                title={t('copyTitle')}
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-xs text-emerald-300">{t('copied')}</span>
                  </>
                ) : (
                  <>
                    <span className="font-bold text-gold">{active.hsCode}</span>
                    <span className="text-slate-400">• {t('mundraPort')}</span>
                    <Copy
                      size={12}
                      className="text-slate-400 transition-colors group-hover:text-white"
                    />
                  </>
                )}
              </button>
            </div> */}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-300">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle
                    size={14}
                    className="flex-shrink-0 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                  />
                  <span>{item}</span>
                </div>
              ))}

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                  {FLAGS.map((flag) => (
                    <span
                      key={flag.key}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy bg-slate-800 text-[11px] shadow"
                      title={t(`countries.${flag.key}`)}
                    >
                      {flag.code}
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-white">35+</span>
                <span className="text-slate-400">{t('exportPorts')}</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-white/[0.02] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22)] backdrop-blur-xl lg:hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.18] via-transparent to-transparent" />
              <div className="relative flex items-center justify-between gap-2">
                <span className="mono-tag text-gold">
                  {t('nowSourcing', { hsCode: active.hsCode })}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label={t('previousSlide')}
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
                    aria-label={t('nextSlide')}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="relative mt-2 flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-white">{active.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {active.description}
                  </p>
                </div>
                <Link
                  href={localeHref(locale, active.href)}
                  aria-label={t('explore', { label: active.label })}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-gold transition-colors hover:bg-white/[0.12]"
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.16] via-white/[0.06] to-white/[0.02] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.28)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.2] via-transparent to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="mono-tag text-gold">
                  {t('nowSourcing', { hsCode: active.hsCode })}
                </span>
                <span className="font-mono text-[10px] tabular-nums text-slate-300">
                  {pad(index + 1)} / {pad(total)}
                </span>
              </div>

              <p className="relative mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                {t('productCategory')}
              </p>
              <h2 className="relative mt-1.5 bg-gradient-to-r from-white via-white to-gold-light bg-clip-text text-2xl font-black leading-tight text-transparent">
                {active.label}
              </h2>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-200">
                {active.description}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {active.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/90"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <Link
                href={localeHref(locale, active.href)}
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/[0.14]"
              >
                {t('explore', { label: active.label })}
                <ArrowUpRight size={13} className="text-gold" />
              </Link>

              {/* <div className="relative mt-6 flex items-center gap-1.5">
                {slides.map((slide, slideIndex) => (
                  <span
                    key={slide.key}
                    className={`h-1 rounded-full transition-all duration-300 ${slideIndex === index ? 'w-6 bg-gold' : 'w-3 bg-white/20'
                      }`}
                  />
                ))}
              </div> */}
            </div>
          </aside>
        </div>
      </div>

      <div className="relative z-20 w-full border-t border-white/10">
        <div className="container-xl px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="mono-tag shrink-0 text-slate-500">{t('rangeLabel')}</span>
            {CATEGORIES.map(({ key, icon: Icon, href }) => (
              <Link
                key={key}
                href={localeHref(locale, href)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur-md transition-colors hover:border-gold/40 hover:text-white"
              >
                <Icon size={11} className="text-gold" />
                {t(`categories.${key}`)}
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
                aria-label={t('previousSlide')}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={t('nextSlide')}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-black/60"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="glass-pill flex items-center gap-1.5 px-2.5 py-1.5">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={t('showSlide', { index: slideIndex + 1, label: slide.label })}
                  aria-current={slideIndex === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${slideIndex === index
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
      </div>
    </section>
  )
}
