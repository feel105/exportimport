'use client'

import { useState } from 'react'
import Image from 'next/image'
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
} from 'lucide-react'
import ProductShowcaseSwiper from './ProductShowcaseSwiper'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopySpec = () => {
    navigator.clipboard.writeText('HS 0909.31 - CUMIN SEEDS 99.8% PURITY - MUNDRA PORT')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      className="relative overflow-hidden pt-[calc(var(--header-h)+3rem)] sm:pt-[calc(var(--header-h)+3.5rem)] lg:pt-[calc(var(--header-h)+4rem)] pb-8 sm:pb-10 lg:pb-12 w-full border-b border-hairline"
      aria-label="Hero section"
    >
      {/* Ship Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/home/ship.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F18]/88 via-[#0A0F18]/80 to-[#0A0F18]/96" />
      </div>

      {/* Background Architectural Grid Lines & Ambient Glow */}
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />
      <div
        className="absolute top-1/4 -left-32 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(224, 142, 69, 0.22) 0%, rgba(245, 158, 11, 0.07) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />
      <div
        className="absolute top-1/3 right-10 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(37, 99, 235, 0.06) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-xl relative z-10 space-y-6 sm:space-y-8 lg:space-y-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">

        {/* Top Floating Pill Dock (Sanity-Style Micro Control Strip) */}
        <div className="flex justify-center">
          <div className="glass-pill px-5 py-2 flex items-center gap-4 sm:gap-6 text-slate-300">
            <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
              <span className="glow-indicator-green" />
              Verified Indian Export House
            </span>
            <div className="w-[1px] h-3.5 bg-white/20" />
            <div className="flex items-center gap-3 sm:gap-4 text-white/70">
              <button aria-label="Search" className="hover:text-gold transition-colors">
                <Search size={14} />
              </button>
              <button aria-label="Catalog Grid" className="hover:text-gold transition-colors">
                <Grid size={14} />
              </button>
              <button aria-label="Shipment Schedule" className="hover:text-gold transition-colors">
                <Calendar size={14} />
              </button>
              <button aria-label="Commodity Parameters" className="hover:text-gold transition-colors">
                <Sliders size={14} />
              </button>
              <button aria-label="Trade Notifications" className="hover:text-gold transition-colors">
                <Bell size={14} />
              </button>
              <button aria-label="Timezone & Dispatch" className="hover:text-gold transition-colors">
                <Clock size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Grid with Calibrated Spacing */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
          
          {/* Left Column: Typography & Sourcing Trust */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <span className="mono-tag text-gold">EXPORT HOUSE • EST. INDIA</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08]">
                The Agricultural <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Export Platform.
                </span>
              </h1>
              <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                Direct farm-origin procurement, statutory laboratory verification, and ocean container logistics for international food brands, importers, and bulk packers.
              </p>
            </div>

            {/* Sanity-Style 3-Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </Link>
              
              <Link
                href="/products"
                className="px-5 py-3 rounded-full bg-white/[0.07] border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-0.5"
              >
                Browse 25+ Products
              </Link>

              {/* Sanity-Style Interactive Sourcing Terminal Pill Button */}
              <button
                onClick={handleCopySpec}
                className="code-pill group"
                title="Click to copy export specification"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-300 text-xs">Copied Spec!</span>
                  </>
                ) : (
                  <>
                    <span className="text-gold font-bold">HS 0909.31</span>
                    <span className="text-slate-400">• Mundra Port</span>
                    <Copy size={12} className="text-slate-400 group-hover:text-white transition-colors" />
                  </>
                )}
              </button>
            </div>

            {/* Destination Markets & Port Reach Badges */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-white/[0.03] border border-hairline space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="uppercase tracking-wider">DESTINATION REACH</span>
                <span className="text-emerald-400 font-bold">35+ PORTS</span>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="United Kingdom">🇬🇧</span>
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="United Arab Emirates">🇦🇪</span>
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="United States">🇺🇸</span>
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="Germany">🇩🇪</span>
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="Japan">🇯🇵</span>
                  <span className="inline-flex items-center justify-center w-6.5 h-6.5 rounded-full bg-slate-800 border border-navy text-xs shadow" title="Singapore">🇸🇬</span>
                </div>
                <span className="text-xs text-slate-300">
                  Direct FOB / CIF / CFR routes from Mundra & Nhava Sheva
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-0.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] flex-shrink-0" />
                <span>Quality Sourcing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] flex-shrink-0" />
                <span>Docs Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] flex-shrink-0" />
                <span>Custom Packing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Auto-Advancing Product Showcase Swiper (7 Cols) */}
          <div className="lg:col-span-7 w-full">
            <ProductShowcaseSwiper />
          </div>

        </div>

      </div>
    </section>
  )
}
