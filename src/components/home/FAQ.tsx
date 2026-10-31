'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start w-full">

          {/* Left Column: Heading & Quick Trade Assistance Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24 w-full">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-white tracking-wide">
                <HelpCircle size={13} className="text-gold" />
                <span className="mono-tag text-gold">TRADE INTELLIGENCE</span>
              </div>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.1]"
              >
                Frequently Asked Questions.
              </h2>
              <p className="text-slate text-xs sm:text-sm leading-relaxed pt-0.5">
                Key information on sourcing procedures, laboratory analysis, custom branding, and shipping logistics.
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-hairline bg-white/[0.02] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="text-xs font-mono font-bold text-white uppercase">HAVE SPECIFIC QUESTIONS?</span>
                <span className="glow-indicator-green" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Need details on HS tariff codes, container load limits, or harvest season schedules? Our trade desk responds promptly.
              </p>
              <div className="space-y-2 pt-0.5 font-mono text-xs">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-hairline hover:border-hairline-light text-white text-xs font-semibold transition-colors group"
                >
                  <Mail size={13} className="text-gold" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-hairline hover:border-hairline-light text-white text-xs font-semibold transition-colors group"
                >
                  <Phone size={13} className="text-gold" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs shadow-[0_0_18px_rgba(224,160,69,0.3)] hover:shadow-[0_0_24px_rgba(224,160,69,0.45)] transition-all mt-1"
              >
                <span>Request a Quotation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3 w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-hairline-light bg-white/[0.04]'
                      : 'border-hairline bg-white/[0.015] hover:bg-white/[0.03]'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold pr-4 leading-snug transition-colors ${
                        isOpen ? 'text-gold' : 'text-white group-hover:text-amber-200'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'bg-gold text-navy rotate-180'
                          : 'bg-white/[0.08] text-slate-300 border border-hairline group-hover:text-white'
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6 border-t border-hairline">
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
