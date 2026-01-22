import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio - Hong Yan AB | Our Projects & Case Studies',
  description: 'Explore our portfolio of successful projects in full-stack development, cloud architecture, and enterprise solutions.',
}

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'A modern e-commerce platform built with Next.js and Spring Boot, featuring real-time inventory management, payment integration, and multi-language support.',
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Stripe', 'Docker'],
    image: '🛒',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Fleet Management System',
    category: 'Enterprise Solution',
    description: 'Comprehensive fleet management application with real-time GPS tracking, maintenance scheduling, and driver performance analytics.',
    technologies: ['React', '.NET Core', 'SQL Server', 'Azure', 'SignalR'],
    image: '🚗',
    color: 'from-green-500 to-green-700',
  },
  {
    title: 'Job Hunting Automation',
    category: 'Automation & AI',
    description: 'Intelligent job application tracker with Gmail API integration, automatic job extraction from Swedish job sites, and smart matching algorithms.',
    technologies: ['Python', 'TypeScript', 'Gmail API', 'Next.js', 'NLP'],
    image: '💼',
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Cloud Infrastructure Migration',
    category: 'Cloud Architecture',
    description: 'Enterprise-scale migration from on-premise infrastructure to AWS, including containerization and CI/CD pipeline setup.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    image: '☁️',
    color: 'from-orange-500 to-orange-700',
  },
  {
    title: 'Smart Inventory System',
    category: 'Backend Development',
    description: 'Real-time inventory management system with barcode scanning, automated reordering, and comprehensive reporting dashboard.',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'React'],
    image: '📦',
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Weather Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Interactive weather data visualization platform with historical analysis, forecasting integration, and custom alert systems.',
    technologies: ['Spring Boot', 'React', 'D3.js', 'Weather API', 'Heroku'],
    image: '🌤️',
    color: 'from-cyan-500 to-cyan-700',
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-primary-light font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio & Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital presence
            with innovative solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className={`bg-gradient-to-br ${project.color} p-8 text-white`}>
                  <span className="text-5xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-secondary mt-2 mb-3 group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can help bring your ideas to life with our expertise
            in full-stack development and cloud architecture.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}