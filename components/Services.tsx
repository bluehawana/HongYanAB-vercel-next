'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using Java Spring Boot, React, Next.js, and TypeScript for scalable enterprise solutions.',
    image: '/images/services/fullstack-coding.jpg',
    technologies: ['Java Spring Boot', 'React', 'Next.js', 'TypeScript'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Cloud Architecture',
    description: 'Design and implementation of cloud infrastructure across major cloud platforms with Docker, Kubernetes, and modern DevOps practices.',
    image: '/images/services/cloud-providers.png',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Alibaba Cloud'],
    objectFit: 'contain' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Hardware & Infrastructure',
    description: 'Server installation, debugging, and maintenance. Specialized in Dell servers and HPC center deployments. Record-breaking 7.78-minute Android 15 AOSP build times.',
    image: '/images/services/hardware-motherboard.jpg',
    technologies: ['Dell Servers', 'HPC Centers', 'Hardware Debugging', 'System Integration'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Database Solutions',
    description: 'Database design, optimization, and management with PostgreSQL, MongoDB, and RESTful API development for high-performance applications.',
    image: '/images/services/db-solutions.png',
    technologies: ['PostgreSQL', 'MongoDB', 'RESTful APIs', 'Microservices'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: 'HPC Bare Metal Tuning',
    description: 'High-performance computing optimization on bare metal servers. Linux kernel tuning, BIOS configuration, and maximizing computational throughput.',
    image: '/images/services/hpc-dell-servers.jpg',
    technologies: ['HPC', 'Bare Metal', 'Linux Tuning', 'BIOS Optimization'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Android Automotive',
    description: 'Native Android development for automotive solutions using Kotlin. Apps run on Polestar 4 emulator and AAOS platforms with Qualcomm Snapdragon Cockpit.',
    image: '/images/services/android-polestar-collage.jpg',
    technologies: ['Android Auto', 'AOSP', 'Kotlin', 'Qualcomm Cockpit'],
    objectFit: 'contain' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary-50/50 to-white" />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-sm font-semibold text-primary">What We Offer</span>
          </div>
          <h2 className="section-title">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="section-description">
            Delivering enterprise-grade solutions with over 5 years of professional
            experience in full-stack development, cloud architecture, and
            high-performance computing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-2/5 h-64 lg:h-auto lg:min-h-[380px] bg-secondary-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    service.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'
                  }`}
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent to-white/10 group-hover:to-transparent transition-all duration-500`} />

                {/* Service number */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
                  <span className="font-heading font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-500 leading-relaxed mb-6 text-base lg:text-lg">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-secondary-500 mb-6">
            Need a custom solution? Let&apos;s discuss your project requirements.
          </p>
          <a href="#contact" className="btn-primary">
            <span>Start a Project</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
