'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  // JSON-LD schema for FAQ rich snippets in search results
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
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="faq-heading">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-xl w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start w-full">

          {/* Left Column: Heading & Quick Trade Assistance Card (4 Cols on wide screen) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4 sm:space-y-5 lg:sticky lg:top-28 w-full">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-white tracking-wide">
                <HelpCircle size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
                <span>CLEAR ANSWERS</span>
              </div>
              <h2
                id="faq-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]"
              >
                Frequently Asked <br className="hidden sm:inline" />
                Questions
              </h2>
              <p className="text-slate text-xs sm:text-sm leading-relaxed pt-0.5">
                Key information about our sourcing methods, sample verification, custom packaging, and international shipping terms.
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="glass-card p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-bold text-white">Have a specific question?</span>
                <span className="glow-indicator-green" />
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Need details on HS codes, container loading weights, or custom crop arrival dates? Our trade desk is here to help.
              </p>
              <div className="space-y-2 pt-0.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] hover:border-white/30 text-white text-xs font-semibold transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/[0.16] shadow-sm">
                    <Mail size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                  </div>
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] hover:border-white/30 text-white text-xs font-semibold transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/[0.16] shadow-sm">
                    <Phone size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                  </div>
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs hover:shadow-[0_0_18px_rgba(224,160,69,0.35)] transition-all duration-200 mt-1"
              >
                <span>Request a Quote</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List (8 Cols) */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-3 w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`glass-card !rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-gold/40 bg-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.35)]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-4.5 py-4 sm:px-5 sm:py-4.5 text-left transition-colors cursor-pointer group"
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
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gold text-navy rotate-180 shadow-[0_0_12px_rgba(224,160,69,0.5)]'
                          : 'bg-white/[0.08] text-slate-300 border border-white/10 group-hover:border-gold/30 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown size={15} />
                    </div>
                  </button>

                  {/* Smooth animated accordion drawer */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4.5 pb-4.5 pt-3.5 sm:px-5 sm:pb-5 sm:pt-3.5 border-t border-white/[0.08]">
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
