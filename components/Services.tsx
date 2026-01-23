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
    title: 'Hardware & Infrastructure',
    description: 'Server installation, debugging, and maintenance. Specialized in Dell servers and HPC center deployments.',
    icon: '🖥️',
    technologies: ['Dell Servers', 'HPC Centers', 'Hardware Debugging', 'System Integration'],
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
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-secondary mb-4">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Delivering enterprise-grade solutions with over 5 years of professional experience in full-stack development and cloud architecture.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-lg transition-all duration-300 group border-l-4 border-transparent hover:border-primary overflow-hidden"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                {service.icon}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}