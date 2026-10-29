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
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-10 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <h3 className="text-xl font-bold text-white">Request a Formal Quotation</h3>
          <p className="text-xs text-slate mt-0.5">Direct commercial inquiry to FEELEXIM trade desk</p>
        </div>
        <span className="glow-indicator-green" />
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200 text-xs">
          <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register('fullName')}
            placeholder="John Smith"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register('companyName')}
            placeholder="Global Foods Trading Ltd."
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.companyName && (
            <p className="text-[11px] text-red-400 mt-1">{errors.companyName.message}</p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Business Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="buyer@company.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            {...register('phone')}
            placeholder="+1 555 019 2834"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Destination Country <span className="text-red-400">*</span>
          </label>
          <input
            {...register('country')}
            placeholder="e.g. United Kingdom, UAE, USA"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.country && (
            <p className="text-[11px] text-red-400 mt-1">{errors.country.message}</p>
          )}
        </div>

        {/* Product of Interest */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Product of Interest <span className="text-red-400">*</span>
          </label>
          <select
            {...register('product')}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#121A26] border border-white/15 text-sm text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
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
            <p className="text-[11px] text-red-400 mt-1">{errors.product.message}</p>
          )}
        </div>

        {/* Estimated Quantity */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Estimated Quantity
          </label>
          <input
            {...register('quantity')}
            placeholder="e.g. 1 FCL (20ft) / 10 Metric Tons"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>

        {/* Destination Port */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Destination Port
          </label>
          <input
            {...register('destinationPort')}
            placeholder="e.g. Port of Felixstowe / Jebel Ali"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      {/* Preferred Packaging */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Preferred Packaging
        </label>
        <input
          {...register('packaging')}
          placeholder="e.g. 25kg PP bags, 50kg Jute bags, Vacuum pouches, or Private Label"
          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Additional Requirements */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">
          Additional Specifications / Questions
        </label>
        <textarea
          rows={3}
          {...register('requirements')}
          placeholder="Specify purity parameters, maximum moisture %, required certifications, target shipment timeline, etc."
          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Quotation Request
          </>
        )}
      </button>
    </form>
  )
}
