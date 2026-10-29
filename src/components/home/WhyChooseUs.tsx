import { Tag, Package, Shield, FileCheck, MessageSquare, Search } from 'lucide-react'

const features = [
  {
    icon: Tag,
    title: 'Competitive Pricing',
    desc: 'We work to provide transparent and competitive quotations to support your sourcing decisions.',
  },
  {
    icon: Package,
    title: 'Flexible Packaging Solutions',
    desc: 'Custom sizes, private label options, and packaging materials discussed based on your requirements.',
  },
  {
    icon: Shield,
    title: 'Quality-Oriented Sourcing',
    desc: 'We coordinate product specifications with suppliers to meet your quality requirements.',
  },
  {
    icon: FileCheck,
    title: 'Export Documentation',
    desc: 'Full support for coordinating export documents required for your destination market.',
  },
  {
    icon: MessageSquare,
    title: 'Responsive Communication',
    desc: 'Prompt responses and clear communication throughout the sourcing and export process.',
  },
  {
    icon: Search,
    title: 'Buyer-Specific Sourcing',
    desc: 'We accommodate specific sourcing requests for Indian-origin products not listed in our catalog.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-dark section-py bg-grid" aria-labelledby="why-heading">
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">WHY CHOOSE US</p>
          <h2
            id="why-heading"
            className="font-extrabold"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#ffffff', letterSpacing: '-0.02em' }}
          >
            Built Around Your Requirements
          </h2>
          <p style={{ color: 'rgba(248,250,252,0.55)', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            Everything we do is focused on making your international sourcing experience smooth and reliable.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card card-hover p-6 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: 'rgba(214,181,116,0.12)', border: '1px solid rgba(214,181,116,0.2)' }}
              >
                <Icon size={20} style={{ color: 'var(--gold)' }} />
              </div>
              <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(248,250,252,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
