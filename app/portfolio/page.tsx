import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio - Hong Yan AB | Our Projects & Case Studies',
  description: 'Explore our portfolio of successful projects in full-stack development, cloud architecture, and enterprise solutions.',
}

const projects = [
  {
    title: 'Android 15 AOSP Optimization',
    category: 'High-Performance Computing',
    description: 'Record-breaking 7.78-minute clean build time on bare-metal Dell HPC, crushing Azure flagship instances by 259%. Revolutionary performance tuning and hardware optimization.',
    technologies: ['Android 15 AOSP', 'Dell HPC', 'Performance Tuning', 'DevOps', 'System Architecture'],
    icon: 'rocket',
    color: 'from-red-500 to-red-700',
    github: 'https://github.com/bluehawana/android15-aosp-tesing-graid-nvme',
  },
  {
    title: 'JobHunter AI',
    category: 'AI & Automation',
    description: 'AI-powered job automation system with intelligent resume customization, real-time monitoring dashboard, and automated application tracking. Features smart matching algorithms for Swedish and international job markets.',
    technologies: ['Python', 'TypeScript', 'OpenAI', 'Gmail API', 'Next.js', 'NLP', 'Dashboard'],
    icon: 'briefcase',
    color: 'from-purple-500 to-purple-700',
    github: 'https://github.com/bluehawana',
  },
  {
    title: 'Gothenburg TaxiCarPooling',
    category: 'Full-Stack Platform',
    description: 'Comprehensive ride-sharing platform with automated matching algorithms, real-time tracking, and payment processing. Built with microservices architecture for scalability.',
    technologies: ['Spring Boot', 'Node.js', 'React Native', 'PostgreSQL', 'Microservices', 'Google Maps API'],
    icon: 'car',
    color: 'from-yellow-500 to-yellow-700',
    github: 'https://github.com/bluehawana/GothenburgTaxiPooling-Java-ReactNative',
  },
  {
    title: 'CryptoWallet Xamarin Azure',
    category: 'FinTech Application',
    description: 'Secure cryptocurrency wallet application with Azure cloud integration. Features multi-currency support, real-time price tracking, and enterprise-grade security.',
    technologies: ['C#', 'Xamarin', 'Azure', 'Blockchain', 'Cloud Security', 'Mobile'],
    icon: 'currency',
    color: 'from-green-500 to-green-700',
    github: 'https://github.com/bluehawana/CryptoWallet-Xamarin-Azure',
  },
  {
    title: 'CarPlayer AndroidAuto',
    category: 'Mobile Application',
    description: 'Feature-rich media player designed for Android Auto with enhanced playback controls, playlist management, and seamless automotive integration.',
    technologies: ['Kotlin', 'Android Auto', 'Media Player', 'UI/UX', 'Mobile Development'],
    icon: 'music',
    color: 'from-blue-500 to-blue-700',
    github: 'https://github.com/bluehawana/carplayer-kotlin-androidauto',
  },
  {
    title: 'EPUB TTS Reader AndroidAuto',
    category: 'Mobile Application',
    description: 'Advanced text-to-speech reader with Android Auto integration for seamless in-car audiobook experience. Voice-controlled navigation and bookmark sync.',
    technologies: ['Python', 'Kotlin', 'Android Auto', 'Text-to-Speech', 'EPUB', 'Firebase'],
    icon: 'phone',
    color: 'from-indigo-500 to-indigo-700',
    github: 'https://github.com/bluehawana/epub-ttsreader-androidauto',
  },
  {
    title: 'AndroidAuto Ebot',
    category: 'AI Chatbot',
    description: 'Customized voice bot with expanded capabilities beyond Google Assistant. Features natural language processing, contextual awareness, and smart vehicle integration.',
    technologies: ['Kotlin', 'Android Auto', 'AI', 'Voice Recognition', 'NLP', 'Chatbot'],
    icon: 'chip',
    color: 'from-purple-500 to-purple-700',
    github: 'https://github.com/bluehawana/AndroidAuto-Ebot',
  },
  {
    title: 'WeatherAnywhere',
    category: 'AI Integration',
    description: 'Terminal-based weather application integrating OpenAI for generating artistic city landmark illustrations in ASCII format. Combines real-time weather data with AI-generated visuals.',
    technologies: ['Python', 'OpenAI API', 'ASCII Art', 'Weather API', 'CLI', 'AI Generation'],
    icon: 'cloud',
    color: 'from-cyan-500 to-cyan-700',
    github: 'https://github.com/bluehawana',
  },
  {
    title: 'Smart Mart E-commerce',
    category: 'Full-Stack Development',
    description: 'Enterprise e-commerce platform with Spring Boot backend and React frontend. Features real-time inventory management, payment integration, order processing, and multi-language support.',
    technologies: ['Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Stripe', 'Docker', 'Microservices'],
    icon: 'cart',
    color: 'from-blue-500 to-blue-700',
    github: 'https://github.com/bluehawana',
  },
  {
    title: 'Private Cloud Infrastructure',
    category: 'Infrastructure',
    description: 'Building our own private cloud in our DataCenter with optimized performance and security. Features HPC capabilities and bare-metal optimization.',
    technologies: ['Dell Servers', 'HPC', 'Cloud Architecture', 'Security', 'Networking', 'Virtualization'],
    icon: 'lock',
    color: 'from-gray-500 to-gray-700',
  },
]

const icons: Record<string, ReactNode> = {
  rocket: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
    </svg>
  ),
  briefcase: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
    </svg>
  ),
  car: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.707 9.293l-5-5A1 1 0 0011.586 4H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V10a1 1 0 00-.293-.707zM8 16a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zM6 6h4v4H6V6z"/>
    </svg>
  ),
  currency: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
    </svg>
  ),
  music: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
    </svg>
  ),
  phone: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
    </svg>
  ),
  chip: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 7H7v6h6V7z"/>
      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
    </svg>
  ),
  cloud: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
    </svg>
  ),
  cart: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
    </svg>
  ),
  lock: (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
    </svg>
  ),
}

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
                <div className={`bg-gradient-to-br ${project.color} p-8 text-white flex items-center justify-center`}>
                  {icons[project.icon]}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-dark font-medium inline-flex items-center"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
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
