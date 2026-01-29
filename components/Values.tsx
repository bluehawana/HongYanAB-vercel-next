'use client'

export default function Values() {
  const values = [
    {
      title: 'Sustainable Technology',
      description: 'We prioritize energy-efficient solutions and green cloud infrastructure, reducing environmental impact while maintaining performance.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Nordic Quality',
      description: 'Embracing Swedish values of transparency, reliability, and excellence in every project we deliver.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with our clients through honest communication and consistent delivery.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  const missionStats = [
    { value: '-30%', label: 'Carbon Footprint Target', icon: '🌱' },
    { value: '100%', label: 'Green Cloud Solutions', icon: '☁️' },
    { value: '5+', label: 'Years Experience', icon: '⭐' },
  ]

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm font-semibold text-primary">Our Values</span>
          </div>
          <h2 className="section-title">
            Nordic <span className="font-semibold">Approach</span>
          </h2>
          <p className="section-description">
            Combining Swedish sustainability principles with cutting-edge technology to create solutions that benefit both business and environment.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group card card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-medium group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-secondary-50 to-primary-50/30 p-10 md:p-16 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-soft">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-primary">Our Mission</span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-secondary mb-6">
              Technology for a <span className="gradient-text">Sustainable Future</span>
            </h3>
            <p className="text-xl text-secondary-500 leading-relaxed mb-10">
              To deliver world-class IT solutions while minimizing environmental impact,
              embodying the Nordic commitment to sustainability, quality, and social responsibility.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-secondary-200">
              {missionStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-sm text-secondary-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
