const services = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using Java Spring Boot, React, Next.js, and TypeScript for scalable enterprise solutions.',
    icon: '💻',
    technologies: ['Java Spring Boot', 'React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Cloud Architecture',
    description: 'Design and implementation of cloud infrastructure on AWS with Docker, Kubernetes, and modern DevOps practices.',
    icon: '☁️',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Enterprise Consulting',
    description: 'Strategic technical consulting for digital transformation, system architecture, and technology modernization.',
    icon: '🎯',
    technologies: ['Architecture Design', 'Technical Strategy', 'Code Review'],
  },
  {
    title: 'Database Solutions',
    description: 'Database design, optimization, and management with PostgreSQL, MongoDB, and RESTful API development.',
    icon: '🗄️',
    technologies: ['PostgreSQL', 'MongoDB', 'RESTful APIs', 'Microservices'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">What We Offer</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering enterprise-grade solutions with over 5 years of professional experience in full-stack development and cloud architecture.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}