'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { createEnquirySchema, type EnquiryFormData } from '@/lib/validations'
import type { LocalizedProduct } from '@/types/product'

interface EnquiryFormProps {
  initialProduct?: string
  products: LocalizedProduct[]
}

export function EnquiryForm({ initialProduct = '', products }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const t = useTranslations('form')
  const tv = useTranslations('validation')
  const schema = useMemo(() => createEnquirySchema(tv), [tv])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(schema),
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

      if (!res.ok) {
        throw new Error(t('requestFailed'))
      }

      setStatus('success')
      reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : t('errorFallback'))
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-card !rounded-2xl p-8 sm:p-12 text-center space-y-4 border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white">{t('successTitle')}</h3>
        <p className="text-slate text-sm max-w-md mx-auto leading-relaxed">
          {t('successDescription')}
        </p>
        <div className="pt-4">
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            {t('submitAnother')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card !rounded-2xl p-7 sm:p-9 lg:p-10 space-y-7 sm:space-y-8 shadow-2xl w-full"
    >
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-bold text-white">{t('title')}</h3>
          <p className="text-xs sm:text-sm text-slate mt-1">{t('subtitle')}</p>
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
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('fullName')} <span className="text-red-400">*</span>
          </label>
          <input
            {...register('fullName')}
            placeholder={t('fullNamePlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.fullName && (
            <p className="text-xs text-red-400 mt-1.5">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('companyName')} <span className="text-red-400">*</span>
          </label>
          <input
            {...register('companyName')}
            placeholder={t('companyPlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.companyName && (
            <p className="text-xs text-red-400 mt-1.5">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('email')} <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder={t('emailPlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('phone')} <span className="text-red-400">*</span>
          </label>
          <input
            {...register('phone')}
            placeholder={t('phonePlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('country')} <span className="text-red-400">*</span>
          </label>
          <input
            {...register('country')}
            placeholder={t('countryPlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
          {errors.country && (
            <p className="text-xs text-red-400 mt-1.5">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('product')} <span className="text-red-400">*</span>
          </label>
          <select
            {...register('product')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-[#121A26] border border-white/15 text-sm sm:text-base text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          >
            <option value="">{t('selectProduct')}</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {t('productOption', {
                  name: product.name,
                  category: product.categoryLabel,
                })}
              </option>
            ))}
            <option value={t('other')}>{t('other')}</option>
          </select>
          {errors.product && (
            <p className="text-xs text-red-400 mt-1.5">{errors.product.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('quantity')}
          </label>
          <input
            {...register('quantity')}
            placeholder={t('quantityPlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
            {t('destinationPort')}
          </label>
          <input
            {...register('destinationPort')}
            placeholder={t('destinationPortPlaceholder')}
            className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
          {t('packaging')}
        </label>
        <input
          {...register('packaging')}
          placeholder={t('packagingPlaceholder')}
          className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
          {t('requirements')}
        </label>
        <textarea
          rows={3}
          {...register('requirements')}
          placeholder={t('requirementsPlaceholder')}
          className="w-full px-4.5 py-3.5 sm:py-4 rounded-2xl bg-white/[0.06] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 transition-all shadow-inner"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base shadow-[0_0_24px_rgba(56,207,255,0.35)] hover:shadow-[0_0_32px_rgba(56,207,255,0.5)] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2.5"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          <>
            <Send size={16} />
            {t('submit')}
          </>
        )}
      </button>
    </form>
  )
}
