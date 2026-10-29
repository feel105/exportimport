'use client'

import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center shadow-lg z-40 transition-all hover:-translate-y-0.5"
      style={{
        background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
        color: 'var(--navy)',
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
