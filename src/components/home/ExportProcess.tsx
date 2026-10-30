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
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="process-heading">
      <div className="container-xl space-y-6 sm:space-y-7 lg:space-y-8 w-full">

        {/* Section Heading with Calibrated Margins */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span>HOW WE OPERATE</span>
          </div>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight"
          >
            Structured Export Workflow
          </h2>
          <p className="text-slate text-xs sm:text-sm leading-relaxed pt-0.5">
            Every shipment follows a rigorous 6-step coordination pipeline to guarantee contractual delivery and regulatory compliance.
          </p>
        </div>

        {/* Steps Grid in Frosted Glass with Balanced Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-3.5 sm:gap-4 w-full">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="glass-card !rounded-2xl p-4 sm:p-4.5 lg:p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center font-black text-gold text-sm tracking-tight shadow-inner">
                  {num}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate text-[11px] sm:text-xs leading-relaxed">
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
