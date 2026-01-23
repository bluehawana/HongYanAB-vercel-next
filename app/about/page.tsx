import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - Hong Yan AB | Our Story & Team',
  description: 'Learn about Hong Yan AB, a Swedish IT consulting company founded by Hongzhi Li and Yan Liu in May 2017. Discover our story, values, and expertise in full-stack development.',
}

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started the journey in software development, building the foundation in Java and .NET technologies.',
  },
  {
    year: '2021',
    title: 'Full-Stack Mastery',
    description: 'Expanded expertise to include React, Next.js, and cloud technologies. Completed degrees in Java Integration and .NET Cloud Development.',
  },
  {
    year: '2023',
    title: 'Hong Yan AB Founded',
    description: 'Hong Yan AB was founded by Hongzhi Li and Yan Liu in May 2017 in Gothenburg, Sweden, establishing our presence in the IT consulting industry.',
  },
  {
    year: '2024',
    title: 'Enterprise Focus',
    description: 'Joined ECARX as IT/Infrastructure Specialist while continuing to grow Hong Yan AB\'s consulting practice.',
  },
  {
    year: '2026',
    title: 'Expanding Horizons',
    description: 'Continuing to deliver enterprise-grade solutions and expanding service offerings across the EU and beyond.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for excellence in every line of code, every architecture decision, and every client interaction.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: 'We work as true partners with our clients, understanding their business needs and delivering tailored solutions.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We stay at the forefront of technology, continuously learning and applying modern best practices.',
  },
  {
    icon: '🔒',
    title: 'Reliability',
    description: 'We deliver on our promises, meeting deadlines and maintaining the highest standards of quality.',
  },
]

const skills = [
  { name: 'Java Spring Boot', level: 95 },
  { name: 'React & Next.js', level: 92 },
  { name: 'TypeScript', level: 90 },
  { name: 'AWS Cloud', level: 88 },
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'PostgreSQL & MongoDB', level: 88 },
]

const certifications = [
  { name: 'MSc International Business & Trade', institution: 'University of Gothenburg', year: '2023' },
  { name: 'BSc Java Integration Development', institution: 'IT-Högskolan', year: '2022' },
  { name: 'BSc .NET Cloud Development', institution: 'IT-Högskolan', year: '2021' },
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
              <p className="text-primary-light font-semibold mb-4">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building the Future,<br />
                <span className="text-primary-light">One Solution at a Time</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Hong Yan AB is a Swedish IT consulting company dedicated to helping
                businesses succeed through innovative technology solutions and expert guidance.
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
                  <span className="text-gray-300 ml-2">Languages</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-2xl shadow-2xl">
                  <div className="bg-gradient-to-br from-primary to-primary-dark w-64 h-64 md:w-80 md:h-80 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-7xl md:text-8xl font-bold mb-2">HL</div>
                      <p className="text-lg">Hongzhi Li</p>
                      <p className="text-sm text-white/80">Founder & Lead Developer</p>
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
              From Developer to Consultant
            </h2>
            <p className="text-gray-600 text-lg">
              Hong Yan AB was founded by Hongzhi (Harvad) Li, a passionate full-stack developer
              with a unique blend of technical expertise and business acumen. The name &quot;Hong Yan&quot;
              (鸿雁) means &quot;Wild Goose&quot; in Chinese, symbolizing ambition, journey, and the ability
              to navigate vast distances – much like how we help businesses navigate the complex
              world of technology.
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

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-primary font-semibold mb-2">Meet the Founder</p>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Hongzhi (Harvad) Li
              </h2>
              <p className="text-gray-600 mb-4">
                A seasoned Full-Stack Developer with over 5 years of professional experience
                specializing in enterprise-grade solutions. Based in Gothenburg, Sweden,
                Hongzhi combines deep technical expertise with a strong business background.
              </p>
              <p className="text-gray-600 mb-4">
                With a Master&apos;s degree in International Business and Trade from the University
                of Gothenburg, along with bachelor&apos;s degrees in Java Integration and .NET Cloud
                Development, Hongzhi brings a unique perspective to every project.
              </p>
              <p className="text-gray-600 mb-6">
                Fluent in English, Mandarin, and Swedish (B2), Hongzhi is well-equipped to work
                with diverse teams and clients across the globe.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/71856746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#006399] transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bluehawana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#222] transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Skills */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-secondary mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-secondary mb-4">Education</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-xl">🎓</span>
                      <div>
                        <p className="font-medium text-secondary">{cert.name}</p>
                        <p className="text-sm text-gray-500">{cert.institution} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">What Drives Us</p>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
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
            Let&apos;s discuss how Hong Yan AB can help transform your business
            with innovative technology solutions.
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