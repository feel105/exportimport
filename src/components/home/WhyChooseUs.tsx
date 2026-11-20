'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import {
  Tag,
  Package,
  Shield,
  FileCheck,
  MessageSquare,
  Search,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { localeHref } from '@/i18n/href'
import type { Locale } from '@/i18n/config'

const icons = [Tag, Package, Shield, FileCheck, MessageSquare, Search]

interface TerminalRow {
  label: string
  value: string
  highlight?: boolean
}

interface Feature {
  title: string
  heading?: string
  desc: string
  bullets?: string[]
  terminalData?: TerminalRow[]
  actionText?: string
  href?: string
}

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0)
  const t = useTranslations('whyChooseUs')
  const locale = useLocale() as Locale
  const features = t.raw('features') as Feature[]

  const currentFeature = features[activeTab]
  const currentNum = String(activeTab + 1).padStart(2, '0')
  const CurrentIcon = icons[activeTab]
  const terminalRows: TerminalRow[] = currentFeature.terminalData ?? [
    { label: currentFeature.title, value: t('status'), highlight: true },
    { label: t('verifiedStandard'), value: t('manifestFooter') },
  ]

  return (
    <section
      className="w-full border-b border-hairline py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-navy"
      aria-labelledby="why-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12 lg:space-y-16">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h2
            id="why-heading"
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
              <span>{t('tabsLabel')}</span>
              <span className="text-gold">{t('count')}</span>
            </div>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pt-1 scrollbar-none">
              {features.map((feature, idx) => {
                const isActive = activeTab === idx
                return (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    aria-pressed={isActive}
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
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {feature.title}
                      </span>
                    </div>
                    {isActive && (
                      <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-gold" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2.5">
              <span className="mono-tag text-emerald-400 font-bold">
                {t('phase', {
                  num: currentNum,
                  label: currentFeature.title.toUpperCase(),
                })}
              </span>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-white flex-shrink-0">
                  <CurrentIcon size={18} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {currentFeature.heading ?? currentFeature.title}
                </h3>
              </div>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                {currentFeature.desc}
              </p>
            </div>

            {currentFeature.bullets && currentFeature.bullets.length > 0 ? (
              <div className="space-y-2.5 pt-2 border-t border-hairline">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {t('keySpecifications')}
                </p>
                <ul className="space-y-2">
                  {currentFeature.bullets.map((bullet) => (
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
            ) : (
              <div className="space-y-2.5 pt-2 border-t border-hairline">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {t('verifiedStandard')}
                </p>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                  />
                  <span>{t('manifestFooter')}</span>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link
                href={localeHref(locale, currentFeature.href ?? '/contact')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-light transition-colors group"
              >
                <span>{currentFeature.actionText ?? t('cta')}</span>
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
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="mono-tag text-slate-400 text-[11px] ml-2 font-mono">
                    advantage.manifest
                  </span>
                </div>
                <span className="glow-indicator-green !w-2 !h-2" />
              </div>

              <div className="p-5 sm:p-6 space-y-3 font-mono text-xs">
                {terminalRows.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-start justify-between gap-3 py-1.5 border-b border-white/[0.04] last:border-0 ${
                      row.highlight ? 'bg-white/[0.03] px-2 rounded -mx-2' : ''
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] sm:text-xs">
                      {row.label}:
                    </span>
                    <span
                      className={`font-semibold text-right max-w-[55%] text-[11px] sm:text-xs ${
                        row.highlight ? 'text-gold-light font-bold' : 'text-white'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}

                <div className="pt-4 border-t border-hairline flex items-center justify-between gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t('manifestFooter')}</span>
                  </span>
                  <Link
                    href={localeHref(locale, '/contact')}
                    className="text-gold hover:underline font-bold inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>{t('footerLink')}</span>
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
