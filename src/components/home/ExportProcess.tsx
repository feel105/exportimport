const steps = [
  { num: '01', title: 'Understand Buyer Requirements', desc: 'We begin by thoroughly understanding your product needs, quality standards, and commercial expectations.' },
  { num: '02', title: 'Product Sourcing & Specification', desc: 'We coordinate with suitable Indian suppliers to confirm product specifications that match your requirements.' },
  { num: '03', title: 'Quotation & Commercial Discussion', desc: 'We provide transparent quotations and work through packaging, pricing, and commercial terms with you.' },
  { num: '04', title: 'Sample Coordination', desc: 'Where applicable, we coordinate product samples so you can evaluate quality before finalising your order.' },
  { num: '05', title: 'Documentation & Shipment', desc: 'We coordinate all necessary export documents and work closely with logistics partners for smooth dispatch.' },
  { num: '06', title: 'Post-Dispatch Communication', desc: 'We maintain communication after dispatch to ensure your shipment arrives as expected and to address any queries.' },
]

export default function ExportProcess() {
  return (
    <section className="section-py" style={{ background: 'var(--navy-deep)' }} aria-labelledby="process-heading">
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">HOW WE WORK</p>
          <h2
            id="process-heading"
            className="font-extrabold"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#ffffff', letterSpacing: '-0.02em' }}
          >
            Our Export Process
          </h2>
          <p style={{ color: 'rgba(248,250,252,0.5)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0', fontSize: '0.9rem' }}>
            The actual process depends on the product, destination market, and agreed commercial terms.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="relative p-6 rounded-2xl group transition-all duration-300 hover:bg-white/[0.07] hover:border-[rgba(214,181,116,0.25)]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Step number */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-extrabold"
                style={{
                  background: 'linear-gradient(135deg, rgba(214,181,116,0.2), rgba(214,181,116,0.08))',
                  border: '1px solid rgba(214,181,116,0.3)',
                  color: 'var(--gold)',
                  fontSize: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {num}
              </div>

              <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(248,250,252,0.5)', fontSize: '0.8375rem', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
