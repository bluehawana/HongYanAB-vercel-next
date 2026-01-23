export default function Values() {
  const values = [
    {
      title: 'Sustainable Technology',
      description: 'We prioritize energy-efficient solutions and green cloud infrastructure, reducing environmental impact while maintaining performance.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      // Wind turbines - renewable energy
    },
    {
      title: 'Nordic Quality',
      description: 'Embracing Swedish values of transparency, reliability, and excellence in every project we deliver.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      // Modern architecture/building
    },
    {
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with our clients through honest communication and consistent delivery.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      // Team collaboration
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-secondary mb-4">
            Nordic <span className="font-semibold">Approach</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Combining Swedish sustainability principles with cutting-edge technology to create solutions that benefit both business and environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-100 mb-6 h-64">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-20 bg-gray-50 p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-light text-secondary mb-6">
              Our <span className="font-semibold">Mission</span>
            </h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              To deliver world-class IT solutions while minimizing environmental impact, 
              embodying the Nordic commitment to sustainability, quality, and social responsibility.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">-30%</div>
                <p className="text-sm text-gray-600">Carbon Footprint Target</p>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">100%</div>
                <p className="text-sm text-gray-600">Green Cloud Solutions</p>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">5+</div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
