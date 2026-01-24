import Image from 'next/image'

const services = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using Java Spring Boot, React, Next.js, and TypeScript for scalable enterprise solutions.',
    image: '/images/services/fullstack-coding.jpg',
    technologies: ['Java Spring Boot', 'React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Cloud Architecture',
    description: 'Design and implementation of cloud infrastructure on AWS with Docker, Kubernetes, and modern DevOps practices.',
    image: '/images/services/cloud-servers.jpg',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Hardware & Infrastructure',
    description: 'Server installation, debugging, and maintenance. Specialized in Dell servers and HPC center deployments. Recently achieved record-breaking 7.78-minute Android 15 AOSP build times on bare-metal hardware.',
    image: '/images/services/hardware-motherboard.jpg',
    technologies: ['Dell Servers', 'HPC Centers', 'Hardware Debugging', 'System Integration'],
  },
  {
    title: 'Database Solutions',
    description: 'Database design, optimization, and management with PostgreSQL, MongoDB, and RESTful API development.',
    image: '/images/services/db-solutions.png',
    technologies: ['PostgreSQL', 'MongoDB', 'RESTful APIs', 'Microservices'],
  },
  {
    title: 'HPC Bare Metal Tuning',
    description: 'High-performance computing optimization on bare metal servers. Specialized in Linux kernel tuning, BIOS configuration, and maximizing computational throughput for demanding workloads.',
    image: '/images/services/hpc-tunning.png',
    technologies: ['HPC', 'Bare Metal', 'Linux Tuning', 'BIOS Optimization'],
  },
  {
    title: 'Android Automotive Development',
    description: 'Native Android application development for automotive and smart home solutions using Kotlin. Building intuitive interfaces for in-car entertainment and IoT device control.',
    image: '/images/services/android-headunit.jpg',
    technologies: ['Kotlin', 'Android Auto', 'AAOS', 'Jetpack Compose'],
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
            Delivering enterprise-grade solutions with over 5 years of professional experience in full-stack development, cloud architecture, and high-performance computing.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image - Portrait friendly */}
              <div className="relative w-full md:w-2/5 h-80 md:h-auto md:min-h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"
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
