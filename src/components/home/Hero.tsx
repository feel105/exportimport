'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Search,
  Grid,
  Calendar,
  Sliders,
  Bell,
  Clock,
  Sparkles,
  Thermometer,
  Layers,
  CheckCircle,
  TrendingUp,
  Copy,
  Check,
} from 'lucide-react'

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

          {/* Right Column: Liquid Glass Dashboard (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 w-full">

              {/* Card 1: Featured Live Origin Sourcing (7 Cols) */}
              <div className="sm:col-span-7 glass-card p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between mb-3 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-black/50 text-white border border-white/10 backdrop-blur-md">
                      Origin: Gujarat Belt
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-[11px] font-bold text-red-300">
                    <span className="glow-indicator-red !w-2 !h-2" />
                    LIVE
                  </div>
                </div>

                {/* Sourcing Visual Window */}
                <div className="relative rounded-xl overflow-hidden my-auto aspect-[16/9] bg-gradient-to-br from-amber-950/40 via-navy-deep to-slate-900 border border-white/10 flex items-center justify-center p-3.5 text-center shadow-inner">
                  <div className="space-y-1">
                    <div className="flex justify-center gap-2 text-2xl select-none">
                      <span>🌶️</span>
                      <span>🌿</span>
                      <span>🫙</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">Export-Ready Cumin & Turmeric Harvest</p>
                    <p className="text-[10px] text-slate-400">Batch #FE-2026 • Machine Cleaned 99.8%</p>
                  </div>
                </div>

                {/* Micro Action Dock */}
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/10 z-10">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer transition-colors shadow-sm" title="Layer Specs">
                    <Layers size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer transition-colors shadow-sm" title="Testing Grade">
                    <Sparkles size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer transition-colors shadow-sm" title="Phyto Compliance">
                    <ShieldCheck size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                  </div>
                </div>
              </div>

              {/* Card 2: Export Quality & Weather Metrics (5 Cols) */}
              <div className="sm:col-span-5 glass-card p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-black text-white">99.8%</span>
                        <span className="text-[11px] text-slate-300 font-semibold uppercase">Purity</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Export Grade A Standard</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-extrabold text-gold">FEELEXIM</p>
                      <p className="text-[10px] text-slate-400">Verified House</p>
                    </div>
                  </div>

                  {/* 2 Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white shadow-sm">
                        <Thermometer size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">&lt; 8%</p>
                        <p className="text-[10px] text-slate">Moisture</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white shadow-sm">
                        <TrendingUp size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">99.4%</p>
                        <p className="text-[10px] text-slate">Clean Rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Statutory Pills */}
                <div className="mt-3.5 pt-3 border-t border-white/10 grid grid-cols-4 gap-1.5 text-center">
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                    <p className="text-[9px] text-slate font-semibold">FSSAI</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                    <p className="text-[9px] text-slate font-semibold">APEDA</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                    <p className="text-[9px] text-slate font-semibold">SPICE</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                    <p className="text-[9px] text-slate font-semibold">IEC</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Quality Control Thermostat Arc Gauge (5 Cols) */}
              <div className="sm:col-span-5 glass-card p-5 sm:p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs font-bold text-white">Quality Assurance</p>
                      <p className="text-[10px] text-slate">Climate Controlled</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center text-coral-accent text-xs">
                    ⚡
                  </div>
                </div>

                {/* Circular Gauge Graphic matching Reference image */}
                <div className="my-2.5 flex flex-col items-center justify-center relative">
                  <div className="relative w-28 h-18 flex items-end justify-center">
                    <svg className="w-28 h-18 overflow-visible" viewBox="0 0 100 55">
                      <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 10 50 A 40 40 0 0 1 78 22"
                        fill="none"
                        stroke="url(#arcGradientWidescreen)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="arcGradientWidescreen" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#818CF8" />
                        </linearGradient>
                      </defs>
                      <circle cx="78" cy="22" r="4.5" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2.5" />
                    </svg>
                    <div className="absolute -bottom-1 text-center">
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">100%</span>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Sorted</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-2.5 border-t border-white/10 text-center text-[10px] text-slate">
                  <span>Cleaned</span>
                  <span>Tested</span>
                  <span>Certified</span>
                </div>
              </div>

              {/* Card 4: Curcumin / Natural Color Spectrum (7 Cols) */}
              <div className="sm:col-span-7 glass-card p-5 sm:p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs font-bold text-white">Natural Pigment & Curcumin</p>
                      <p className="text-[10px] text-slate">Volatile Oil & ASTA Values</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold font-bold">
                    Grade A+
                  </span>
                </div>

                <div className="my-2.5 space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate">
                    <span>Natural Spectrum</span>
                    <span className="text-white font-semibold">Turmeric • Chilli • Coriander</span>
                  </div>
                  {/* Multi-color Spectrum Bar matching Reference Image */}
                  <div className="relative h-2.5 w-full rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 to-fuchsia-500 p-[1px] shadow-sm">
                    <div className="absolute top-1/2 left-[48%] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-900 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate pt-2.5 border-t border-white/10">
                  <span>Export Bulk Packaging: 25kg / 50kg</span>
                  <Link href="/products" className="text-gold hover:underline font-bold flex items-center gap-1">
                    View Catalog <ArrowRight size={11} />
                  </Link>
                </div>
              </div>

            </div>

            {/* Bottom Floating Category Dock */}
            <div className="flex justify-center pt-0.5">
              <div className="glass-pill px-3 py-1 flex items-center gap-1.5 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#1C2533] text-white font-bold flex items-center gap-1.5 shadow-sm border border-white/10">
                  🌶️ Whole Spices
                </span>
                <Link href="/products?category=spice-powders" className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white transition-colors">
                  🫙 Powders
                </Link>
                <Link href="/products?category=seeds" className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white transition-colors">
                  🌱 Seeds
                </Link>
                <Link href="/products?category=nuts-other" className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white transition-colors">
                  🥜 Nuts
                </Link>
                <Link
                  href="/products"
                  className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-0.5 font-bold text-xs"
                  aria-label="View all categories"
                >
                  +
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
