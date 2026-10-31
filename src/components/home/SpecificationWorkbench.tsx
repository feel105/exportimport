'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ShieldCheck, Box, FileText, Send } from 'lucide-react'

export default function SpecificationWorkbench() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy-deep/80"
      aria-labelledby="workbench-heading"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-12 sm:space-y-14 relative z-10">
        
        {/* Section Header (Sanity-Style Centered Display) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">INSTANT PROCUREMENT SPECS</span>
          </div>
          <h2
            id="workbench-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            Less talk, verified specifications.
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Direct commercial parameters, tariff classifications, and container payload metrics for international commodity buyers.
          </p>
        </div>

        {/* 3 Modular Workbench Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
          
          {/* Card 1: Direct Proforma Requisition */}
          <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-hairline-light transition-all space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-gold shadow-sm">
                <FileText size={18} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Instant Proforma RFQ
              </h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                Generate an official export price quotation with complete breakdown of FOB Indian port charges, freight, and mandatory phytosanitary documentation.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>TURNAROUND SLA:</span>
                <span className="text-emerald-400 font-bold">&lt; 24 HOURS</span>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(224,160,69,0.3)] hover:shadow-[0_0_28px_rgba(224,160,69,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Send size={13} />
                <span>Request Commercial Proforma</span>
              </Link>
            </div>
          </div>

          {/* Card 2: HS Code & Statutory Tariff Codes */}
          <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-hairline-light transition-all space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-cyan-accent shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                HS Tariff Reference
              </h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                Copy verified 6-digit Harmonized System export tariff codes for customs duty declarations at your destination clearance port.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>CLICK TO COPY HS CODE:</span>
                <span className="text-gold font-bold">WCO HARMONIZED</span>
              </div>

              {[
                { id: 'cumin', code: '0909.31', name: 'Cumin Seeds (Whole)' },
                { id: 'turmeric', code: '0910.30', name: 'Turmeric Fingers / Curcumin' },
                { id: 'sesame', code: '1207.40', name: 'Natural Sesame Seeds' },
              ].map(({ id, code, name }) => (
                <button
                  key={id}
                  onClick={() => handleCopy(code, id)}
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-hairline transition-colors text-left group cursor-pointer font-mono text-xs"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-gold font-bold">{code}</span>
                    <span className="text-slate-400 truncate text-[11px]">{name}</span>
                  </div>
                  {copiedCode === id ? (
                    <span className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                      <Check size={12} /> Copied
                    </span>
                  ) : (
                    <Copy size={12} className="text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Card 3: Container Payload Calculator */}
          <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-hairline-light transition-all space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-emerald-accent shadow-sm">
                <Box size={18} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Container Payload Matrix
              </h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">
                Standard stuffing payload capacities and palletization parameters for dry bulk agricultural ocean shipments.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>STUFFING CAPACITIES:</span>
                <span className="text-emerald-400 font-bold">MUNDRA PORT</span>
              </div>

              {[
                { label: '20ft FCL Standard', value: '18 - 20 Metric Tons' },
                { label: '40ft High Cube', value: '24 - 26 Metric Tons' },
                { label: 'Pallet Standard', value: 'ISPM-15 Heat Treated' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.04] border border-hairline text-xs font-mono"
                >
                  <span className="text-slate-300 text-[11px]">{label}</span>
                  <span className="text-white font-bold text-[11px]">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
