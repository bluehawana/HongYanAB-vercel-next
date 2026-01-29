'use client'

export default function Hardware() {
  const partners = [
    {
      name: 'Dell',
      subtitle: 'PowerEdge',
      description: 'Enterprise servers & HPC solutions',
    },
    {
      name: 'Huawei',
      subtitle: 'Enterprise',
      description: 'Cloud infrastructure & networking',
    },
    {
      name: 'H3C',
      subtitle: 'Infrastructure',
      description: 'Data center solutions',
    },
  ]

  return (
    <section className="section-tight relative overflow-hidden bg-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-soft">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            <span className="text-sm font-semibold text-primary">Enterprise Hardware</span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-4">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h3>
          <p className="text-secondary-500 max-w-xl mx-auto">
            We work with industry-leading hardware partners to deliver enterprise-grade solutions
          </p>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-center min-w-[200px] flex-1 max-w-[280px]"
            >
              <div className="font-heading text-3xl font-bold text-secondary group-hover:text-primary transition-colors mb-1">
                {partner.name}
              </div>
              <p className="text-primary text-sm font-semibold mb-2">{partner.subtitle}</p>
              <p className="text-secondary-400 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
