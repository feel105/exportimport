'use client'

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
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32 lg:pt-52 lg:pb-36"
      aria-label="Hero section"
    >
      {/* Expansive Ambient Background Glows */}
      <div
        className="absolute top-1/4 -left-32 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(224, 142, 69, 0.26) 0%, rgba(245, 158, 11, 0.09) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />
      <div
        className="absolute top-1/3 right-10 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-xl relative z-10 space-y-14 lg:space-y-18">

        {/* Top Floating Pill Dock (Inspired by the top floating pill in reference image) */}
        <div className="flex justify-center">
          <div className="glass-pill px-7 py-3 flex items-center gap-6 sm:gap-9 text-slate-300">
            <span className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
              <span className="glow-indicator-green" />
              Verified Indian Export House
            </span>
            <div className="w-[1px] h-4.5 bg-white/20" />
            <div className="flex items-center gap-4 sm:gap-6 text-white/70">
              <button aria-label="Search" className="hover:text-gold transition-colors">
                <Search size={16} />
              </button>
              <button aria-label="Catalog Grid" className="hover:text-gold transition-colors">
                <Grid size={16} />
              </button>
              <button aria-label="Shipment Schedule" className="hover:text-gold transition-colors">
                <Calendar size={16} />
              </button>
              <button aria-label="Commodity Parameters" className="hover:text-gold transition-colors">
                <Sliders size={16} />
              </button>
              <button aria-label="Trade Notifications" className="hover:text-gold transition-colors">
                <Bell size={16} />
              </button>
              <button aria-label="Timezone & Dispatch" className="hover:text-gold transition-colors">
                <Clock size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-Column Expansive Grid with Generous Gaps */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Grand Typography & Sourcing Trust */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <Sparkles size={14} className="text-gold" />
              <span>PREMIUM INDIAN EXPORT HOUSE</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
                Connecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Indian Quality
                </span> <br />
                to Global Markets.
              </h1>
              <p className="text-slate text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl pt-1">
                Your direct sourcing partner for whole spices, spice powders, seeds, and agricultural commodities. We bridge international buyers with dependable Indian producers through verified quality standards.
              </p>
            </div>

            {/* Global Trade Network Badges (Matching the "Members" row in reference image) */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/[0.08] space-y-3">
              <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                Destination Markets & Port Reach
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex -space-x-2 overflow-hidden py-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="United Kingdom">🇬🇧</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="United Arab Emirates">🇦🇪</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="United States">🇺🇸</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="Germany">🇩🇪</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="Japan">🇯🇵</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border-2 border-navy text-sm shadow" title="Singapore">🇸🇬</span>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.08] text-xs font-bold text-white border border-white/10">
                  +35 Active Trade Hubs
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-9 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm sm:text-base shadow-[0_0_28px_rgba(224,160,69,0.4)] hover:shadow-[0_0_36px_rgba(224,160,69,0.55)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <span>Explore Products</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="px-9 py-4 rounded-2xl glass-pill text-white font-semibold text-sm sm:text-base hover:bg-white/[0.14] transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-emerald-400 flex-shrink-0" />
                <span>Quality-Focused Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-cyan-accent flex-shrink-0" />
                <span>Documentation Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={17} className="text-gold flex-shrink-0" />
                <span>Custom Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Expansive Liquid Glass Interactive Dashboard (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-7">

              {/* Card 1: Featured Live Origin Sourcing (7 Cols) */}
              <div className="sm:col-span-7 glass-card p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div className="flex items-center justify-between mb-4 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-black/50 text-white border border-white/10 backdrop-blur-md">
                      Origin Sourcing: Gujarat Belt
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-xs font-bold text-red-300">
                    <span className="glow-indicator-red !w-2 !h-2" />
                    LIVE
                  </div>
                </div>

                {/* Sourcing Visual Window */}
                <div className="relative rounded-2xl overflow-hidden my-auto aspect-[16/9] bg-gradient-to-br from-amber-950/40 via-navy-deep to-slate-900 border border-white/10 flex items-center justify-center p-6 text-center shadow-inner">
                  <div className="space-y-2">
                    <div className="flex justify-center gap-3 text-4xl select-none">
                      <span>🌶️</span>
                      <span>🌿</span>
                      <span>🫙</span>
                    </div>
                    <p className="text-sm font-bold text-white">Export-Ready Cumin & Turmeric Harvest</p>
                    <p className="text-xs text-slate">Batch #FE-2026 • Machine Cleaned 99.8%</p>
                  </div>
                </div>

                {/* Micro Action Dock */}
                <div className="flex items-center justify-center gap-3.5 pt-4 border-t border-white/10 z-10">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors" title="Layer Specs">
                    <Layers size={15} />
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors" title="Testing Grade">
                    <Sparkles size={15} />
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer transition-colors" title="Phyto Compliance">
                    <ShieldCheck size={15} />
                  </div>
                </div>
              </div>

              {/* Card 2: Export Quality & Weather Metrics (5 Cols) */}
              <div className="sm:col-span-5 glass-card p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-black text-white">99.8%</span>
                        <span className="text-xs text-slate-300 font-semibold uppercase">Purity</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">Export Grade A Standard</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-extrabold text-gold">FEELEXIM</p>
                      <p className="text-[10px] text-slate-400">Verified House</p>
                    </div>
                  </div>

                  {/* 2 Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8.5 h-8.5 rounded-xl bg-white/[0.08] flex items-center justify-center text-cyan-accent">
                        <Thermometer size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">&lt; 8%</p>
                        <p className="text-[11px] text-slate">Moisture</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8.5 h-8.5 rounded-xl bg-white/[0.08] flex items-center justify-center text-emerald-accent">
                        <TrendingUp size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">99.4%</p>
                        <p className="text-[11px] text-slate">Clean Rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Statutory Pills */}
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-[10px] text-slate font-semibold">FSSAI</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-[10px] text-slate font-semibold">APEDA</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-[10px] text-slate font-semibold">SPICE</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-[10px] text-slate font-semibold">IEC</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">✓</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Quality Control Thermostat Arc Gauge (5 Cols) */}
              <div className="sm:col-span-5 glass-card p-7 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">Quality Assurance</p>
                      <p className="text-[10px] text-slate">Climate Controlled Bags</p>
                    </div>
                  </div>
                  <div className="w-8.5 h-8.5 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-coral-accent">
                    ⚡
                  </div>
                </div>

                {/* Circular Gauge Graphic matching Reference image */}
                <div className="my-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-36 h-24 flex items-end justify-center">
                    <svg className="w-36 h-24 overflow-visible" viewBox="0 0 100 55">
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
                      <circle cx="78" cy="22" r="5" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
                    </svg>
                    <div className="absolute -bottom-1 text-center">
                      <span className="text-3xl font-black text-white tracking-tight">100%</span>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sorted</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-3 border-t border-white/10 text-center text-xs text-slate">
                  <span>Cleaned</span>
                  <span>Tested</span>
                  <span>Certified</span>
                </div>
              </div>

              {/* Card 4: Curcumin / Natural Color Spectrum (7 Cols) */}
              <div className="sm:col-span-7 glass-card p-7 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">Natural Pigment & Curcumin Index</p>
                      <p className="text-[10px] text-slate">Volatile Oil & ASTA Color Value</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/20 text-gold font-bold">
                    Grade A+
                  </span>
                </div>

                <div className="my-4 space-y-2">
                  <div className="flex justify-between text-xs text-slate">
                    <span>Natural Spectrum</span>
                    <span className="text-white font-semibold">Turmeric • Chilli • Coriander</span>
                  </div>
                  {/* Multi-color Spectrum Bar matching Reference Image */}
                  <div className="relative h-3 w-full rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 to-fuchsia-500 p-[1px] shadow-sm">
                    <div className="absolute top-1/2 left-[48%] -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-white border-2 border-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate pt-3 border-t border-white/10">
                  <span>Export Bulk Packaging: 25kg / 50kg</span>
                  <Link href="/products" className="text-gold hover:underline font-bold flex items-center gap-1">
                    View Catalog <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

            </div>

            {/* Bottom Floating Room / Category Dock (Matching reference bottom dock) */}
            <div className="flex justify-center pt-2">
              <div className="glass-pill px-4 py-2 flex items-center gap-2 text-xs sm:text-sm">
                <span className="px-4 py-1.5 rounded-full bg-[#1C2533] text-white font-bold flex items-center gap-2 shadow-sm border border-white/10">
                  🌶️ Whole Spices
                </span>
                <Link href="/products?category=spice-powders" className="px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white transition-colors">
                  🫙 Powders
                </Link>
                <Link href="/products?category=seeds" className="px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white transition-colors">
                  🌱 Seeds
                </Link>
                <Link href="/products?category=nuts-other" className="px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white transition-colors">
                  🥜 Nuts
                </Link>
                <Link
                  href="/products"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-1 font-bold"
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
