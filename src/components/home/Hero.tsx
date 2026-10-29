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
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Hero section"
    >
      {/* Ambient background glows matching reference image */}
      <div
        className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(224, 142, 69, 0.22) 0%, rgba(245, 158, 11, 0.08) 40%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-xl relative z-10">
        {/* Top Floating Pill Dock (Inspired by the top floating pill in reference) */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="glass-pill px-5 py-2 flex items-center gap-4 sm:gap-6 text-slate-300">
            <span className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <span className="glow-indicator-green" />
              Verified Sourcing House
            </span>
            <div className="w-[1px] h-3.5 bg-white/15" />
            <div className="flex items-center gap-3 text-white/60">
              <button aria-label="Search" className="hover:text-white transition-colors">
                <Search size={14} />
              </button>
              <button aria-label="Catalog Grid" className="hover:text-white transition-colors">
                <Grid size={14} />
              </button>
              <button aria-label="Shipment Calendar" className="hover:text-white transition-colors">
                <Calendar size={14} />
              </button>
              <button aria-label="Parameters" className="hover:text-white transition-colors">
                <Sliders size={14} />
              </button>
              <button aria-label="Alerts" className="hover:text-white transition-colors">
                <Bell size={14} />
              </button>
              <button aria-label="Dispatch Times" className="hover:text-white transition-colors">
                <Clock size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Headline Left + Liquid Glass Interactive Cards Right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-medium text-gold">
              <Sparkles size={13} className="text-gold" />
              <span>INDIA TO THE WORLD</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Connecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                Indian Quality
              </span> <br />
              to Global Markets.
            </h1>

            <p className="text-slate text-base sm:text-lg leading-relaxed max-w-lg">
              Your trusted partner for Indian spices, seeds, nuts, and agricultural products.
              We connect international buyers with reliable Indian suppliers through quality-focused
              sourcing and precise export coordination.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-2xl glass-pill text-white font-semibold text-sm hover:bg-white/[0.14] transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
            </div>

            {/* Trust Pill Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>Quality-Focused Sourcing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-cyan-accent" />
                <span>Export Documentation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gold" />
                <span>Custom Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) — Exact Liquid Glass Visual Composition from Image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">

              {/* Card 1: Featured Live Origin Sourcing (Reference Image Camera Box) */}
              <div className="sm:col-span-7 glass-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/40 text-white/90 border border-white/10">
                      Origin Sourcing: Gujarat
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-[11px] font-semibold text-red-300">
                    <span className="glow-indicator-red !w-2 !h-2" />
                    LIVE
                  </div>
                </div>

                {/* Simulated Farm / Commodity View with Frosted Sheen */}
                <div className="relative rounded-2xl overflow-hidden my-auto aspect-[16/9] bg-gradient-to-br from-amber-950/40 via-navy-deep to-slate-900 border border-white/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl select-none mb-1 block">🌿 🌶️ 🫙</span>
                    <p className="text-xs font-medium text-white/90">Premium Cumin & Turmeric Harvest</p>
                    <p className="text-[10px] text-slate">Batch #FE-2026 • Verified Standard</p>
                  </div>
                </div>

                {/* Bottom toolbar micro-buttons (just like in the camera card in the image) */}
                <div className="flex items-center justify-center gap-3 pt-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors">
                    <Layers size={13} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors">
                    <Sparkles size={13} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors">
                    <ShieldCheck size={13} />
                  </div>
                </div>
              </div>

              {/* Card 2: Export Quality & Weather Metrics (Reference Image Weather Box) */}
              <div className="sm:col-span-5 glass-card p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-white">99.8%</span>
                        <span className="text-xs text-slate font-medium">Purity</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Export Grade A</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">FEELEXIM</p>
                      <p className="text-[10px] text-slate-400">Certified Spec</p>
                    </div>
                  </div>

                  {/* 2 Micro-metrics with icons */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-cyan-accent">
                        <Thermometer size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">&lt; 8%</p>
                        <p className="text-[10px] text-slate">Moisture</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-emerald-accent">
                        <TrendingUp size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">99.4%</p>
                        <p className="text-[10px] text-slate">Clean Rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Mini Columns (Reference image 4-day forecast pill row) */}
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-4 gap-1 text-center">
                  <div className="p-1.5 rounded-xl bg-white/[0.04]">
                    <p className="text-[9px] text-slate font-medium">FSSAI</p>
                    <p className="text-[11px] font-bold text-emerald-400 mt-0.5">✓</p>
                    <p className="text-[9px] text-white/70">Gov</p>
                  </div>
                  <div className="p-1.5 rounded-xl bg-white/[0.04]">
                    <p className="text-[9px] text-slate font-medium">APEDA</p>
                    <p className="text-[11px] font-bold text-emerald-400 mt-0.5">✓</p>
                    <p className="text-[9px] text-white/70">Agri</p>
                  </div>
                  <div className="p-1.5 rounded-xl bg-white/[0.04]">
                    <p className="text-[9px] text-slate font-medium">SPICE</p>
                    <p className="text-[11px] font-bold text-emerald-400 mt-0.5">✓</p>
                    <p className="text-[9px] text-white/70">Board</p>
                  </div>
                  <div className="p-1.5 rounded-xl bg-white/[0.04]">
                    <p className="text-[9px] text-slate font-medium">IEC</p>
                    <p className="text-[11px] font-bold text-emerald-400 mt-0.5">✓</p>
                    <p className="text-[9px] text-white/70">Valid</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Quality Control Thermostat Arc Gauge (Reference image Air Conditioner dial) */}
              <div className="sm:col-span-5 glass-card p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs font-bold text-white">Quality Assurance</p>
                      <p className="text-[10px] text-slate">Climate Controlled</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-coral-accent">
                    ⚡
                  </div>
                </div>

                {/* Circular Gauge Graphic matching Reference image 18° dial */}
                <div className="my-3 flex flex-col items-center justify-center relative">
                  <div className="relative w-32 h-20 flex items-end justify-center">
                    <svg className="w-32 h-20 overflow-visible" viewBox="0 0 100 55">
                      {/* Gauge track */}
                      <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      {/* Active glowing electric blue arc */}
                      <path
                        d="M 10 50 A 40 40 0 0 1 78 22"
                        fill="none"
                        stroke="url(#arcGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#818CF8" />
                        </linearGradient>
                      </defs>
                      {/* Thumb dot */}
                      <circle cx="78" cy="22" r="4.5" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2.5" />
                    </svg>
                    <div className="absolute -bottom-1 text-center">
                      <span className="text-2xl font-black text-white tracking-tight">100%</span>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Sorted</p>
                    </div>
                  </div>
                </div>

                {/* 3 micro pills */}
                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/10 text-center text-[10px] text-slate">
                  <span>Cleaned</span>
                  <span>Tested</span>
                  <span>Certified</span>
                </div>
              </div>

              {/* Card 4: Curcumin / Natural Color Spectrum (Reference image Ambient LED slider) */}
              <div className="sm:col-span-7 glass-card p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="glow-indicator-green" />
                    <div>
                      <p className="text-xs font-bold text-white">Natural Color Index</p>
                      <p className="text-[10px] text-slate">High Curcumin & Natural Pigments</p>
                    </div>
                  </div>
                  <span className="text-xs text-gold font-bold">Grade A+</span>
                </div>

                <div className="my-3 space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate">
                    <span>Pigment Range</span>
                    <span className="text-white font-medium">Turmeric • Chilli • Coriander</span>
                  </div>
                  {/* Multi-color Spectrum Bar matching Reference Image */}
                  <div className="relative h-2.5 w-full rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 to-fuchsia-500 p-[1px]">
                    {/* Draggable-style thumb dot */}
                    <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-900 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate pt-2 border-t border-white/10">
                  <span>Export Packing: 25kg / 50kg Bags</span>
                  <Link href="/products" className="text-gold hover:underline font-semibold">
                    View Catalog →
                  </Link>
                </div>
              </div>

            </div>

            {/* Bottom Floating Room / Category Dock (Reference image bottom dock) */}
            <div className="mt-4 flex justify-center">
              <div className="glass-pill px-3 py-1.5 flex items-center gap-1.5 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#1C2533] text-white font-semibold flex items-center gap-1.5 shadow-sm">
                  🌶️ Whole Spices
                </span>
                <span className="px-3 py-1 rounded-full text-slate hover:text-white transition-colors cursor-pointer">
                  🫙 Powders
                </span>
                <span className="px-3 py-1 rounded-full text-slate hover:text-white transition-colors cursor-pointer">
                  🌱 Seeds
                </span>
                <span className="px-3 py-1 rounded-full text-slate hover:text-white transition-colors cursor-pointer">
                  🥜 Nuts
                </span>
                <Link
                  href="/products"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-1"
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
