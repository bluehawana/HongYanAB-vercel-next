'use client'

import Image from 'next/image'

export default function RealWork() {
  const projects = [
    {
      title: 'Enterprise Server Installation',
      description: 'Dell PowerEdge server deployment and configuration for HPC centers',
      image: '/images/hardware/IMG_5292.jpg',
      tag: 'Dell PowerEdge',
    },
    {
      title: 'Hardware Maintenance',
      description: 'Server debugging and motherboard replacement services',
      image: '/images/hardware/IMG_5290_rotated.jpg',
      tag: 'Maintenance',
    },
    {
      title: 'Infrastructure Setup',
      description: 'Network infrastructure and system integration projects',
      image: '/images/hardware/IMG_5677.jpg',
      tag: 'Integration',
    },
  ]

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary-50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className="text-sm font-semibold text-primary">Our Work</span>
          </div>
          <h2 className="section-title">
            Real <span className="font-semibold">Projects</span>
          </h2>
          <p className="section-description">
            Hands-on experience with enterprise hardware from Dell, Huawei, and H3C servers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary shadow-soft">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
