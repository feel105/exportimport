'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { enquirySchema, EnquiryFormData } from '@/lib/validations'
import { products } from '@/data/products'

interface EnquiryFormProps {
  initialProduct?: string
}

export function EnquiryForm({ initialProduct = '' }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      product: initialProduct,
    },
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.')
      }

      setStatus('success')
      reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-card p-8 sm:p-12 text-center space-y-4 border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white">Quotation Request Received</h3>
        <p className="text-slate text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Our export coordination team will review your requirements and provide an official quotation within 24 business hours.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card !rounded-3xl p-8 sm:p-12 lg:p-14 space-y-8 shadow-2xl w-full">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-bold text-white">Request a Formal Quotation</h3>
          <p className="text-xs sm:text-sm text-slate mt-1">Direct commercial inquiry to FEELEXIM trade desk</p>
        </div>
        <span className="glow-indicator-green" />
      </div>

      {status === 'error' && (
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200 text-xs sm:text-sm w-full">
          <AlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 w-full">
        {/* Full Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register('fullName')}
            placeholder="John Smith"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.fullName && (
            <p className="text-xs text-red-400 mt-1.5">{errors.fullName.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register('companyName')}
            placeholder="Global Foods Trading Ltd."
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.companyName && (
            <p className="text-xs text-red-400 mt-1.5">{errors.companyName.message}</p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Business Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="buyer@company.com"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            {...register('phone')}
            placeholder="+1 555 019 2834"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Destination Country <span className="text-red-400">*</span>
          </label>
          <input
            {...register('country')}
            placeholder="e.g. United Kingdom, UAE, USA"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.country && (
            <p className="text-xs text-red-400 mt-1.5">{errors.country.message}</p>
          )}
        </div>

        {/* Product of Interest */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Product of Interest <span className="text-red-400">*</span>
          </label>
          <select
            {...register('product')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-[#121A26] border border-white/15 text-sm sm:text-base text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          >
            <option value="">Select a product...</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.categoryLabel})
              </option>
            ))}
            <option value="Custom Sourcing Request">Other / Custom Sourcing</option>
          </select>
          {errors.product && (
            <p className="text-xs text-red-400 mt-1.5">{errors.product.message}</p>
          )}
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Estimated Quantity
          </label>
          <input
            {...register('quantity')}
            placeholder="e.g. 1 FCL (20ft) / 10 Metric Tons"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
        </div>

        {/* Destination Port */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            Destination Port
          </label>
          <input
            {...register('destinationPort')}
            placeholder="e.g. Port of Felixstowe / Jebel Ali"
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Preferred Packaging */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
          Preferred Packaging
        </label>
        <input
          {...register('packaging')}
          placeholder="e.g. 25kg PP bags, 50kg Jute bags, Vacuum pouches, or Private Label"
          className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
        />
      </div>

      {/* Additional Requirements */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
          Additional Specifications / Questions
        </label>
        <textarea
          rows={3}
          {...register('requirements')}
          placeholder="Specify purity parameters, maximum moisture %, required certifications, target shipment timeline, etc."
          className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2.5"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Quotation Request
          </>
        )}
      </button>
    </form>
  )
}
