import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - Hong Yan AB | ICT & Ecommerce Services',
  description: 'Hong Yan AB - Swedish ICT company bridging China and Sweden. Professional ICT services, ecommerce solutions, cloud architecture, HPC.',
}

const timeline = [
  {
    year: '2016',
    title: 'New Beginning in Sweden',
    description: 'Hongzhi Li moved to Gothenburg to pursue a master\'s degree in International Business and Trade at the University of Gothenburg, seeking new opportunities beyond China.',
  },
  {
    year: '2017',
    title: 'Hong Yan AB Founded',
    description: 'Hong Yan AB was founded by Hongzhi Li and Yan Liu in Gothenburg, Sweden. The name "Hong Yan" (鸿雁) means "Wild Goose" – symbolizing ambition, journey, and the ability to navigate vast distances.',
  },
  {
    year: '2020-2023',
    title: 'Technical Mastery',
    description: 'Completed education in Java Integration and .NET Cloud Development at IT Högskolan. Transitioned from banking to full-stack development, gaining expertise in modern technologies and cloud platforms.',
  },
  {
    year: '2024',
    title: 'SME Digitalization Success',
    description: 'Successfully transformed Ichiban Sushi Bar into a top 5 restaurant in Gothenburg through complete digitalization – online ordering, delivery platforms, and CRM systems. This proved our ICT and ecommerce capabilities.',
  },
  {
    year: '2025-2026',
    title: 'Bridge Between China & Sweden',
    description: 'Recognized the growing demand for quality ICT, cloud, and ecommerce services in Sweden. Established partnerships with major Chinese providers like Huawei, H3C, and Alibaba Cloud to bring competitive solutions to Swedish and EU markets.',
  },
]

const services = [
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'AWS, Azure, Google Cloud, and Alibaba Cloud – enterprise-grade cloud architecture and migration services.',
  },
  {
    icon: '🔧',
    title: 'ICT Infrastructure',
    description: 'Full-stack development, hardware solutions, database design, and enterprise system integration.',
  },
  {
    icon: '🛒',
    title: 'Ecommerce Platforms',
    description: 'End-to-end ecommerce development, from storefronts to payment processing and order management.',
  },
  {
    icon: '🚀',
    title: 'HPC & Performance',
    description: 'High-performance computing optimization, bare metal tuning, and infrastructure scaling.',
  },
  {
    icon: '🌉',
    title: 'China-Sweden Bridge',
    description: 'Connecting Chinese tech giants (Huawei, H3C, Alibaba) with Swedish and EU enterprises.',
  },
  {
    icon: '💼',
    title: 'Business Digitalization',
    description: 'Complete digital transformation for SMEs – websites, systems, and automation.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Price-Value Focus',
    description: 'We bridge the gap between top Chinese tech providers and Swedish businesses, offering competitive pricing without compromising on quality.',
  },
  {
    icon: '🔒',
    title: 'Durability & Quality',
    description: 'Enterprise-grade hardware and solutions from Huawei, H3C, and other leading manufacturers – built to last.',
  },
  {
    icon: '⚡',
    title: 'Stable Services',
    description: 'Reliable cloud infrastructure, proactive monitoring, and comprehensive support for business continuity.',
  },
  {
    icon: '🤝',
    title: 'Cultural Bridge',
    description: 'Deep understanding of both Chinese and Swedish business cultures – fluent communication and seamless project execution.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-primary-light font-semibold mb-4">About Hong Yan AB</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From Overseas Students<br />
                <span className="text-primary-light">To ICT Entrepreneurs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Hong Yan AB is a Swedish ICT company founded by Hongzhi Li and Yan Liu.
                We bridge the gap between world-class Chinese technology providers and Swedish businesses,
                delivering competitive ICT, cloud, HPC, and ecommerce solutions with exceptional value.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold">5+</span>
                  <span className="text-gray-300 ml-2">Years Experience</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold">50+</span>
                  <span className="text-gray-300 ml-2">Projects</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold">3</span>
                  <span className="text-gray-300 ml-2">Continents</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-2xl shadow-2xl">
                  <div className="bg-gradient-to-br from-primary to-primary-dark w-64 h-64 md:w-80 md:h-80 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl md:text-6xl font-bold mb-2">鸿雁</div>
                      <p className="text-lg">Hong Yan AB</p>
                      <p className="text-sm text-white/80">ICT & Ecommerce Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold mb-2">Our Story</p>
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Building Bridges Between China and Sweden
            </h2>
            <p className="text-gray-600 text-lg">
              Hong Yan AB began with a simple observation: Sweden has strong demand for quality ICT,
              cloud, HPC, and ecommerce services, but access to competitive technology solutions
              was limited. Meanwhile, China has world-class providers like Huawei, H3C, and Alibaba Cloud
              offering enterprise-grade solutions at exceptional value.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              We saw an opportunity to bridge this gap. Founded by overseas students who became
              Swedish entrepreneurs, Hong Yan AB now delivers professional ICT services, cloud architecture,
              high-performance computing, and ecommerce solutions – combining Chinese technology excellence with
              Swedish business understanding and European quality standards.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-secondary mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Professional ICT & Ecommerce Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive services delivered with Chinese technology excellence and Swedish reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* China-Sweden Bridge Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Our China-Sweden Bridge
              </h2>
              <p className="text-gray-600 text-lg">
                Direct partnerships with leading Chinese technology providers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">华为</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Huawei</h3>
                <p className="text-gray-600 text-sm">Enterprise networking, cloud, and telecommunications solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">H3C</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">H3C (New H3C)</h3>
                <p className="text-gray-600 text-sm">Networking infrastructure, servers, and enterprise computing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">阿里云</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Alibaba Cloud</h3>
                <p className="text-gray-600 text-sm">Cloud services, AI, and big data solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Our Value Proposition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Price, Durability, and Quality – without compromise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Hong Yan AB can help your business with
            competitive ICT and ecommerce solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
