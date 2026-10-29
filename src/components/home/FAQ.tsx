'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqs } from '@/data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-medium text-gold mb-3">
              <HelpCircle size={13} className="text-gold" />
              <span>CLEAR ANSWERS</span>
            </div>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate text-sm sm:text-base mt-4">
              Key information about our sourcing, sample coordination, packaging, and export terms.
            </p>
          </div>

          {/* Frosted Glass Accordion Rows */}
          <div className="space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`glass-card !rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-white/30 bg-white/[0.09]' : 'border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-4.5 text-left transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-gold text-navy rotate-180' : 'bg-white/[0.08] text-slate-300'
                    }`}>
                      <ChevronDown size={15} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className="px-6 pb-5 pt-1 border-t border-white/[0.08]"
                    >
                      <p className="text-slate-300 text-sm leading-relaxed">
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
