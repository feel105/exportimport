'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'
import { localeHref } from '@/i18n/href'
import type { Locale } from '@/i18n/config'

interface TerminalRow {
  label: string
  value: string
  highlight?: boolean
}

const CHAPTERS = [
  { id: 'quality', num: '01', actionHref: '/quality-compliance' },
  { id: 'origin', num: '02', actionHref: '/about' },
  { id: 'documentation', num: '03', actionHref: '/quality-compliance' },
  { id: 'packaging', num: '04', actionHref: '/contact' },
  { id: 'logistics', num: '05', actionHref: '/services' },
]

export default function TradePlatformShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const t = useTranslations('tradeShowcase')
  const locale = useLocale() as Locale

  const chapters = CHAPTERS.map((chapter) => ({
    ...chapter,
    tabLabel: t(`chapters.${chapter.id}.tabLabel`),
    heading: t(`chapters.${chapter.id}.heading`),
    description: t(`chapters.${chapter.id}.description`),
    bullets: t.raw(`chapters.${chapter.id}.bullets`) as string[],
    terminalData: t.raw(`chapters.${chapter.id}.terminalData`) as TerminalRow[],
    actionText: t(`chapters.${chapter.id}.actionText`),
  }))

  const currentChapter = chapters[activeTab]

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="platform-showcase-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12 lg:space-y-16">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h2
            id="platform-showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t('heading')}
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          <div className="lg:col-span-3 border border-hairline rounded-2xl bg-white/[0.02] p-2 space-y-1 lg:sticky lg:top-24">
            <div className="px-3 py-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-hairline flex items-center justify-between">
              <span>{t('chaptersLabel')}</span>
              <span className="text-gold">{t('steps')}</span>
            </div>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pt-1 scrollbar-none">
              {chapters.map((chapter, idx) => {
                const isActive = activeTab === idx
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-between w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 cursor-pointer flex-shrink-0 lg:flex-shrink ${
                      isActive
                        ? 'bg-white/10 text-white border border-white/15 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-gold text-navy'
                            : 'bg-white/[0.06] text-slate-400'
                        }`}
                      >
                        {chapter.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {chapter.tabLabel}
                      </span>
                    </div>
                    {isActive && <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-gold" />}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2.5">
              <span className="mono-tag text-emerald-400 font-bold">
                {t('phase', { num: currentChapter.num, label: currentChapter.tabLabel.toUpperCase() })}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {currentChapter.heading}
              </h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                {currentChapter.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-hairline">
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                {t('keySpecifications')}
              </p>
              <ul className="space-y-2">
                {currentChapter.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400 mt-0.5 flex-shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href={localeHref(locale, currentChapter.actionHref)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-light transition-colors group"
              >
                <span>{currentChapter.actionText}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-hairline bg-[#0c131d] shadow-2xl overflow-hidden">
              <div className="px-4 py-3 bg-white/[0.04] border-b border-hairline flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="mono-tag text-slate-400 text-[11px] ml-2 font-mono">
                    {currentChapter.id}.manifest
                  </span>
                </div>
                <span className="glow-indicator-green !w-2 !h-2" />
              </div>

              <div className="p-5 sm:p-6 space-y-3 font-mono text-xs">
                {currentChapter.terminalData.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-start justify-between py-1.5 border-b border-white/[0.04] last:border-0 ${
                      row.highlight ? 'bg-white/[0.03] px-2 rounded -mx-2' : ''
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] sm:text-xs">
                      {row.label}:
                    </span>
                    <span
                      className={`font-semibold text-right max-w-[55%] text-[11px] sm:text-xs ${
                        row.highlight ? 'text-amber-300 font-bold' : 'text-white'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}

                <div className="pt-4 border-t border-hairline flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t('realtime')}</span>
                  </span>
                  <Link
                    href={localeHref(locale, '/contact')}
                    className="text-gold hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>{t('requestBatch')}</span>
                    <ExternalLink size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
