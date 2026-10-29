const steps = [
  { num: '01', title: 'Understand Buyer Requirements', desc: 'Thoroughly analyzing target commodity specifications, quality tolerances, testing standards, packaging, and destination port.' },
  { num: '02', title: 'Product Sourcing & Grading', desc: 'Coordinating directly with verified Indian regional grower clusters and processors to select and sort conformity batches.' },
  { num: '03', title: 'Quotation & Commercial Discussion', desc: 'Issuing transparent proforma invoices, FOB/CIF/CFR price structures, and mutually agreed commercial payment terms.' },
  { num: '04', title: 'Sample Verification & Testing', desc: 'Dispatching official courier samples and laboratory analysis reports for buyer quality sign-off before full production.' },
  { num: '05', title: 'Stuffing, Phyto & Port Logistics', desc: 'Supervising container stuffing, mandatory fumigation, customs documentation, and delivery to Mundra / Nhava Sheva ports.' },
  { num: '06', title: 'BL Release & Transit Tracking', desc: 'Releasing ocean Bills of Lading, statutory trade certificates, and providing real-time vessel tracking to destination port.' },
]

export default function ExportProcess() {
  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="process-heading">
      <div className="container-xl space-y-14 lg:space-y-18">

        {/* Section Heading with Generous Margins */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span>HOW WE OPERATE</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            Structured Export Workflow
          </h2>
          <p className="text-slate text-base sm:text-lg leading-relaxed pt-1">
            Every shipment follows a rigorous 6-step coordination pipeline to guarantee contractual delivery and regulatory compliance.
          </p>
        </div>

        {/* Steps Grid in Frosted Glass with Ample Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="glass-card !rounded-3xl p-9 sm:p-10 lg:p-11 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center font-black text-gold text-xl tracking-tight shadow-inner">
                  {num}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
