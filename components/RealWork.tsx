export default function RealWork() {
  const projects = [
    {
      title: 'Enterprise Server Installation',
      description: 'Dell PowerEdge server deployment and configuration for HPC centers',
      image: '/images/hardware/IMG_5292.jpg',
    },
    {
      title: 'Hardware Maintenance',
      description: 'Server debugging and motherboard replacement services',
      image: '/images/hardware/IMG_5290_rotated.jpg',
    },
    {
      title: 'Infrastructure Setup',
      description: 'Network infrastructure and system integration projects',
      image: '/images/hardware/IMG_5677.jpg',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-secondary mb-4">
            Real <span className="font-semibold">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Hands-on experience with enterprise hardware from Dell, Huawei, and H3C servers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-100 mb-6 h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
