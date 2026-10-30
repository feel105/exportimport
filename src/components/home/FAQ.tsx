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
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="faq-heading">
      <div className="container-xl w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">

          {/* Left Column: Heading & Quick Trade Assistance Card (4 Cols on wide screen) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4 sm:space-y-5 lg:sticky lg:top-28 w-full">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
                <HelpCircle size={13} className="text-gold" />
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
            <div className="glass-card p-4 sm:p-4.5 space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-bold text-white">Have a specific question?</span>
                <span className="glow-indicator-green" />
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Need details on HS codes, container loading weights, or custom crop arrival dates? Our trade desk is here to help.
              </p>
              <div className="space-y-1.5 pt-0.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:border-gold/30 text-white text-xs font-semibold transition-colors"
                >
                  <Mail size={14} className="text-gold flex-shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:border-gold/30 text-white text-xs font-semibold transition-colors"
                >
                  <Phone size={14} className="text-gold flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-gold text-navy font-bold text-xs hover:bg-gold-light transition-colors mt-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List (8 Cols) */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-2.5 w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`glass-card !rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-white/30 bg-white/[0.1] shadow-2xl' : 'border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4.5 text-left transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="text-xs sm:text-sm font-bold text-white pr-3 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-gold text-navy rotate-180' : 'bg-white/[0.08] text-slate-300 border border-white/10'
                    }`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className="px-3.5 sm:px-4.5 pb-4 pt-1 border-t border-white/[0.08]"
                    >
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
