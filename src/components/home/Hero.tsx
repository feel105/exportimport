'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Search,
  Grid,
  Calendar,
  Sliders,
  Bell,
  Clock,
  CheckCircle,
  Copy,
  Check,
  Leaf,
  Flame,
  Nut,
  Sprout,
  Coffee,
  Flower2,
  Wheat,
} from 'lucide-react'
import HeroBackgroundSlider from './HeroBackgroundSlider'

const CATEGORIES = [
  { label: 'Whole Spices', icon: Leaf, href: '/products?category=whole-spices' },
  { label: 'Spice Powders', icon: Flame, href: '/products?category=spice-powders' },
  { label: 'Nuts', icon: Nut, href: '/products?category=nuts-other' },
  { label: 'Seeds', icon: Sprout, href: '/products?category=seeds' },
  { label: 'Tea', icon: Coffee, href: '/products' },
  { label: 'Herbs', icon: Flower2, href: '/products' },
  { label: 'Agri Products', icon: Wheat, href: '/products?category=nuts-other' },
]

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopySpec = () => {
    navigator.clipboard.writeText('HS 0909.31 - CUMIN SEEDS 99.8% PURITY - MUNDRA PORT')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      className="relative isolate flex min-h-[640px] w-full items-center overflow-hidden border-b border-hairline pt-[calc(var(--header-h)+2.5rem)] pb-12 sm:min-h-[720px] sm:pt-[calc(var(--header-h)+3rem)] sm:pb-14 lg:min-h-[820px] lg:pb-16"
      aria-label="Hero section"
    >
      <HeroBackgroundSlider />

      {/* Brand ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 -left-40 h-[650px] w-[650px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(224, 142, 69, 0.18) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      <div className="container-xl relative z-10 space-y-8 w-full px-4 sm:space-y-10 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">

        {/* Top Floating Pill Dock (Sanity-Style Micro Control Strip) */}
        <div className="flex justify-center">
          <div className="glass-pill flex items-center gap-4 px-5 py-2 text-slate-300 sm:gap-6">
            <span className="flex items-center gap-2 text-xs font-bold text-white sm:text-sm">
              <span className="glow-indicator-green" />
              Verified Indian Export House
            </span>
            <div className="h-3.5 w-[1px] bg-white/20" />
            <div className="flex items-center gap-3 text-white/70 sm:gap-4">
              <button aria-label="Search" className="transition-colors hover:text-gold">
                <Search size={14} />
              </button>
              <button aria-label="Catalog Grid" className="transition-colors hover:text-gold">
                <Grid size={14} />
              </button>
              <button aria-label="Shipment Schedule" className="transition-colors hover:text-gold">
                <Calendar size={14} />
              </button>
              <button aria-label="Commodity Parameters" className="transition-colors hover:text-gold">
                <Sliders size={14} />
              </button>
              <button aria-label="Trade Notifications" className="transition-colors hover:text-gold">
                <Bell size={14} />
              </button>
              <button aria-label="Timezone & Dispatch" className="transition-colors hover:text-gold">
                <Clock size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Content overlaying the full-width product portfolio slider */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-3.5 py-1 text-xs font-semibold tracking-wide text-gold">
            <span className="mono-tag text-gold">EXPORT HOUSE • EST. INDIA</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              The Agricultural <br />
              <span className="bg-gradient-to-r from-amber-300 via-gold to-amber-200 bg-clip-text text-transparent">
                Export Platform.
              </span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate sm:text-base lg:text-lg">
              Direct farm-origin procurement, statutory laboratory verification, and ocean container logistics for international food brands, importers, and bulk packers.
            </p>
          </div>

          {/* Sanity-Style 3-Action Row */}
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
              Browse 25+ Products
            </Link>

            {/* Interactive Sourcing Terminal Pill Button */}
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
                  <span className="font-bold text-gold">HS 0909.31</span>
                  <span className="text-slate-400">• Mundra Port</span>
                  <Copy size={12} className="text-slate-400 transition-colors group-hover:text-white" />
                </>
              )}
            </button>
          </div>

          {/* Destination Markets & Port Reach Badges */}
          <div className="max-w-xl space-y-2 rounded-2xl border border-hairline bg-white/[0.03] p-4 sm:p-4.5">
            <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="uppercase tracking-wider">DESTINATION REACH</span>
              <span className="font-bold text-emerald-400">35+ PORTS</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="United Kingdom">🇬🇧</span>
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="United Arab Emirates">🇦🇪</span>
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="United States">🇺🇸</span>
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="Germany">🇩🇪</span>
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="Japan">🇯🇵</span>
                <span className="inline-flex h-6.5 w-6.5 items-center justify-center rounded-full border border-navy bg-slate-800 text-xs shadow" title="Singapore">🇸🇬</span>
              </div>
              <span className="text-xs text-slate-300">
                Direct FOB / CIF / CFR routes from Mundra & Nhava Sheva
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-0.5 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="flex-shrink-0 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
              <span>Quality Sourcing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="flex-shrink-0 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
              <span>Docs Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="flex-shrink-0 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
              <span>Custom Packing</span>
            </div>
          </div>

          {/* Product Category Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="mono-tag text-slate-500">CATEGORIES</span>
            {CATEGORIES.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur-md transition-colors hover:border-gold/40 hover:text-white"
              >
                <Icon size={11} className="text-gold" />
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
