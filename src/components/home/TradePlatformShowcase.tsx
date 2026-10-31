'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

interface Chapter {
  id: string
  num: string
  tabLabel: string
  heading: string
  subheading: string
  description: string
  bullets: string[]
  terminalTitle: string
  terminalData: {
    label: string
    value: string
    highlight?: boolean
  }[]
  actionText: string
  actionHref: string
}

const chapters: Chapter[] = [
  {
    id: 'quality',
    num: '01',
    tabLabel: 'Quality Verification',
    heading: 'Laboratory-Verified Commodity Standards',
    subheading: 'Eliminate quality disputes with pre-shipment laboratory inspections.',
    description:
      'Every export lot undergoes comprehensive testing for physical cleanliness, moisture content, volatile oil percentages, and destination-specific pesticide MRLs before container loading.',
    bullets: [
      'NABL & ISO/IEC 17025 accredited laboratory testing',
      'Third-party inspection coordination (SGS, Geo-Chem, Bureau Veritas)',
      'Aflatoxin, Ochratoxin, and Salmonella microbiological screening',
      'Sortex optical sorting with 99.8% purity guarantee',
    ],
    terminalTitle: 'LAB_INSPECTION_MANIFEST.json',
    terminalData: [
      { label: 'Commodity Batch', value: 'FE-2026-CUMIN-A1' },
      { label: 'Purity Standard', value: '99.8% Machine Cleaned Sortex', highlight: true },
      { label: 'Moisture Content', value: '7.4% (Max Allowable: 8.0%)' },
      { label: 'Volatile Oil', value: '3.2% v/w (ASTA Standard)' },
      { label: 'Aflatoxin (B1+B2+G1+G2)', value: '< 2.0 ppb (Compliant EU/US)' },
      { label: 'Pesticide MRL Status', value: 'Zero Residue Exceedance' },
      { label: 'Issuing Lab', value: 'NABL Certified #TC-7892' },
    ],
    actionText: 'View Quality Protocols',
    actionHref: '/quality-compliance',
  },
  {
    id: 'origin',
    num: '02',
    tabLabel: 'Direct Origin Sourcing',
    heading: 'Direct Farm-Gate & APMC Terminal Procurement',
    subheading: 'Connected directly to prime growing belts across Gujarat and Rajasthan.',
    description:
      'We bypass unnecessary middle layers by maintaining direct aggregation networks across Saurashtra, Unjha, Nagaur, and Kota terminal markets—securing competitive crop arrivals at harvest peak.',
    bullets: [
      'Direct contracts with certified grower clusters and FPOs',
      'Daily mandi pricing parity with complete transparent breakdown',
      'Crop season tracking & forward price hedging discussions',
      'Traceability back to regional growing district and harvest batch',
    ],
    terminalTitle: 'ORIGIN_AGGREGATION_LOG.manifest',
    terminalData: [
      { label: 'Primary Mandi Hub', value: 'Unjha Terminal Market (Gujarat)' },
      { label: 'Harvest Season', value: 'Fresh Crop Arrival 2026', highlight: true },
      { label: 'Grower Aggregation', value: 'Verified Regional FPO Network' },
      { label: 'Grading Protocol', value: 'AGMARK Grade 1 / Export Special' },
      { label: 'Transit to Port', value: '360 km via Dedicated Freight Corridor' },
      { label: 'Traceability Index', value: '100% Regional Farm Block Mapped' },
    ],
    actionText: 'Learn About Our Sourcing',
    actionHref: '/about',
  },
  {
    id: 'documentation',
    num: '03',
    tabLabel: 'Export Documentation',
    heading: 'Zero-Friction Customs & Statutory Clearance',
    subheading: 'Complete paperwork handled seamlessly to guarantee prompt port release.',
    description:
      'Cross-border agricultural trade requires spotless paperwork. Our customs compliance desk prepares, verifies, and dispatches every statutory trade document prior to ocean vessel arrival.',
    bullets: [
      'Official Government Phytosanitary Certificate (Plant Quarantine)',
      'Certificate of Origin (Preferential / Non-Preferential via FIEO & Chamber)',
      'Customs Commercial Invoice, Packing List & Bill of Lading (B/L)',
      'Fumigation Certificate (Methyl Bromide / Phosphine treatment)',
    ],
    terminalTitle: 'STATUTORY_CUSTOMS_PACKET.xml',
    terminalData: [
      { label: 'Phytosanitary Cert', value: 'PSC-INDIA-2026-VALIDATED', highlight: true },
      { label: 'Certificate of Origin', value: 'COO-CHAMBER-ISSUED' },
      { label: 'Fumigation Standard', value: 'AFAS / IMO Approved 48h Cycle' },
      { label: 'Bill of Lading', value: 'Clean On Board Express Release' },
      { label: 'Statutory Body', value: 'FSSAI • APEDA • SPICES BOARD RCMC' },
      { label: 'HS Classification', value: 'Harmonized 6-Digit Global Standard' },
    ],
    actionText: 'Explore Compliance Credentials',
    actionHref: '/quality-compliance',
  },
  {
    id: 'packaging',
    num: '04',
    tabLabel: 'Custom Packaging',
    heading: 'Bespoke Bulk Packaging & Private Label Solutions',
    subheading: 'Engineered for cargo stability, moisture protection, and retail readiness.',
    description:
      'From 25kg multi-ply paper and PP woven sacks for wholesale processors to customized vacuum-sealed barrier pouches under your own brand, we tailor packaging to your exact retail or industrial requirements.',
    bullets: [
      'Multi-wall paper bags, PP woven sacks & traditional Jute hessian',
      'Food-grade vacuum pouches with oxygen absorbers (1kg to 10kg)',
      '1000kg FIBC Jumbo Tote Bags with lifting loops for automated lines',
      'Private label retail printing with barcode & nutritional label integration',
    ],
    terminalTitle: 'PACKAGING_SPECIFICATION.config',
    terminalData: [
      { label: 'Primary Bag Type', value: '25kg Polypropylene (PP) with Inner PE Liner', highlight: true },
      { label: 'Moisture Barrier', value: 'Heavy Duty 50-micron Virgin PE' },
      { label: 'Palletization', value: 'ISPM-15 Heat Treated Wooden Pallets' },
      { label: 'Stretch Wrap', value: 'Fully Strapped & Shrink-Wrapped' },
      { label: 'Private Labeling', value: 'Custom Buyer Marking & Artwork Supported' },
      { label: 'Bag Tolerance', value: '± 0.2% Automatic Electronic Check-Weigher' },
    ],
    actionText: 'Discuss Packaging Needs',
    actionHref: '/contact',
  },
  {
    id: 'logistics',
    num: '05',
    tabLabel: 'Multimodal Logistics',
    heading: 'Container Logistics from Mundra to Destination Port',
    subheading: 'Guaranteed shipping line slots and real-time vessel tracking.',
    description:
      'Strategically positioned with rapid highway access to Mundra Port and Nhava Sheva (JNPT), we coordinate container stuffing, customs seal verification, and ocean freight bookings across leading shipping lines.',
    bullets: [
      'FOB (Indian Ports), CIF, or CFR Incoterms pricing',
      'Direct carrier contracts with Maersk, MSC, CMA CGM & Hapag-Lloyd',
      '20ft FCL (18–20 MT) and 40ft High Cube (24–26 MT) payloads',
      'Real-time ocean container tracking updates from port gate-in to discharge',
    ],
    terminalTitle: 'OCEAN_FREIGHT_DISPATCH.telemetry',
    terminalData: [
      { label: 'Loading Port', value: 'Port of Mundra / Nhava Sheva (IN)' },
      { label: 'Target Incoterm', value: 'FOB / CIF / CFR Destination Port', highlight: true },
      { label: 'Container Size', value: '20ft GP (19 Metric Tons Payload)' },
      { label: 'Transit Time to GCC', value: '4 - 7 Days (Jebel Ali / Dammam)' },
      { label: 'Transit Time to EU', value: '18 - 24 Days (Rotterdam / Felixstowe)' },
      { label: 'Transit Time to US', value: '26 - 32 Days (New York / Savannah)' },
    ],
    actionText: 'Check Shipping Lanes',
    actionHref: '/services',
  },
]

export default function TradePlatformShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const currentChapter = chapters[activeTab]

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="platform-showcase-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12 lg:space-y-16">
        
        {/* Section Header (Sanity-Style Display Headline) */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h2
            id="platform-showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            Everything Your Trade Needs in One Place.
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Engineered to remove volatility, quality uncertainty, and customs friction from cross-border agricultural procurement.
          </p>
        </div>

        {/* Sanity-Style Split Architecture: Sticky Nav + Feature Content + Live Terminal Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          
          {/* Column 1: Architectural Tab Navigation (3 Cols) */}
          <div className="lg:col-span-3 border border-hairline rounded-2xl bg-white/[0.02] p-2 space-y-1 lg:sticky lg:top-24">
            <div className="px-3 py-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider border-b border-hairline flex items-center justify-between">
              <span>WORKFLOW CHAPTERS</span>
              <span className="text-gold">05 STEPS</span>
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

          {/* Column 2: Editorial Details & Bullet Manifest (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2.5">
              <span className="mono-tag text-emerald-400 font-bold">
                PHASE {currentChapter.num} • {currentChapter.tabLabel.toUpperCase()}
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
                KEY SPECIFICATIONS:
              </p>
              <ul className="space-y-2">
                {currentChapter.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href={currentChapter.actionHref}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-light transition-colors group"
              >
                <span>{currentChapter.actionText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 3: Sanity-Style Code/Data Inspector Terminal (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-hairline bg-[#0c131d] shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-white/[0.04] border-b border-hairline flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="mono-tag text-slate-400 text-[11px] ml-2 font-mono">
                    {currentChapter.terminalTitle}
                  </span>
                </div>
                <span className="glow-indicator-green !w-2 !h-2" />
              </div>

              {/* Terminal Body Manifest Data */}
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

                {/* Micro Terminal Action Button */}
                <div className="pt-4 border-t border-hairline flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real-time Manifest Verification</span>
                  </span>
                  <Link
                    href="/contact"
                    className="text-gold hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Request Batch Sample</span>
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
