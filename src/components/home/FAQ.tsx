'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* Left Column: Heading & Quick Trade Assistance Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
                <HelpCircle size={14} className="text-gold" />
                <span>CLEAR ANSWERS</span>
              </div>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
              >
                Frequently Asked <br className="hidden sm:inline" />
                Questions
              </h2>
              <p className="text-slate text-base sm:text-lg leading-relaxed pt-1">
                Key information about our sourcing methods, sample verification, custom packaging, and international shipping terms.
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="glass-card p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-sm font-bold text-white">Have a specific question?</span>
                <span className="glow-indicator-green" />
              </div>
              <p className="text-xs sm:text-sm text-slate leading-relaxed">
                Need details on HS codes, container loading weights, or custom crop arrival dates? Our trade desk is here to help.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-gold/30 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-gold/30 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold text-navy font-bold text-xs hover:bg-gold-light transition-colors mt-2"
              >
                <span>Request a Quote</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`glass-card !rounded-3xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-white/30 bg-white/[0.1] shadow-2xl' : 'border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="text-base sm:text-lg font-bold text-white pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-gold text-navy rotate-180' : 'bg-white/[0.08] text-slate-300 border border-white/10'
                    }`}>
                      <ChevronDown size={17} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className="px-6 sm:px-7 pb-6 pt-1 border-t border-white/[0.08]"
                    >
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
