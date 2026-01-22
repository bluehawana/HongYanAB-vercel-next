const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic planning and business development solutions tailored to your needs.',
    icon: '📊',
  },
  {
    title: 'Project Management',
    description: 'Efficient project planning and execution to ensure successful outcomes.',
    icon: '📋',
  },
  {
    title: 'Digital Solutions',
    description: 'Modern digital transformation and technology integration services.',
    icon: '💻',
  },
  {
    title: 'Financial Advisory',
    description: 'Expert financial planning and investment advisory services.',
    icon: '💰',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}