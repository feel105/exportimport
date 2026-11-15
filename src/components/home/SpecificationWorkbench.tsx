import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Compass, Mail, Phone, ShieldCheck, Ship } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface Profile {
  name: string
  position: string
  description: string
  image?: string
}

const roleIcons = [Compass, ShieldCheck, Ship]

const hoverImages = [
  '/home/agri-products.jpg',
  '/home/spice-powders.jpg',
  '/home/ship-container.jpg',
]

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

export default function SpecificationWorkbench() {
  const t = useTranslations('workbench')
  const profiles = t.raw('profiles') as Profile[]
  const phoneHref = siteConfig.phone.replace(/[^\d+]/g, '')

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy-deep/80"
      aria-labelledby="workbench-heading"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-12 sm:space-y-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h2
            id="workbench-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t('heading')}
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
          {profiles.map((profile, index) => {
            const Icon = roleIcons[index] ?? Compass
            const image = profile.image ?? hoverImages[index] ?? hoverImages[0]

            return (
              <article
                key={profile.name}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-hairline bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-hairline-light hover:bg-white/[0.04] sm:p-7"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F18]/85 via-[#0A0F18]/85 to-[#0A0F18]/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col items-center">
                  <div className="relative">
                    <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-gold/30 via-cyan-accent/20 to-white/[0.06] shadow-inner">
                      {profile.image ? (
                        <Image
                          src={profile.image}
                          alt={profile.name}
                          fill
                          sizes="80px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <>
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                          <span className="relative text-2xl font-black tracking-tight text-white">
                            {getInitials(profile.name)}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-hairline bg-navy-deep text-gold shadow">
                      <Icon size={12} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {profile.name}
                  </h3>
                  <p className="mono-tag mt-1 text-[10px] text-gold">
                    {profile.position}
                  </p>

                  <p className="mt-4 flex-1 text-slate text-xs leading-relaxed sm:text-sm">
                    {profile.description}
                  </p>

                  <div className="mt-5 flex w-full flex-col items-center gap-2 border-t border-hairline pt-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      aria-label={t('emailAria', { name: profile.name })}
                      className="inline-flex items-center gap-2 text-[11px] text-slate-300 transition-colors hover:text-gold"
                    >
                      <Mail size={13} className="shrink-0 text-gold" />
                      <span className="truncate">{siteConfig.email}</span>
                    </a>
                    <a
                      href={`tel:${phoneHref}`}
                      aria-label={t('phoneAria', { name: profile.name })}
                      className="inline-flex items-center gap-2 text-[11px] text-slate-300 transition-colors hover:text-gold"
                    >
                      <Phone size={13} className="shrink-0 text-gold" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
