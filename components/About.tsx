'use client'

export default function About() {
  const skills = [
    'Java Spring Boot',
    'React & Next.js',
    'TypeScript',
    'AWS Cloud',
    'Docker & K8s',
    'PostgreSQL',
    'MongoDB',
    'RESTful APIs',
  ]

  const education = [
    {
      degree: 'MSc International Business',
      institution: 'University of Gothenburg',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
    },
    {
      degree: 'BSc Java Integration Development',
      institution: 'Nackademin, Stockholm',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      degree: 'BSc .NET Cloud Development',
      institution: 'Campus Mölndal',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
        </svg>
      ),
    },
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '3', label: 'Languages Spoken' },
  ]

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-primary-50/50 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-primary">Our Story</span>
            </div>

            {/* Title */}
            <h2 className="section-title">
              About <span className="font-semibold">Hong Yan AB</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-secondary-500 leading-relaxed mb-8">
              <p>
                Hong Yan AB is a Swedish IT consulting company founded by Hongzhi Li and Yan Liu
                in May 2017. We are a seasoned team with over 5 years of professional experience
                specializing in enterprise-grade solutions.
              </p>
              <p>
                Based in Gothenburg, Sweden, we combine academic excellence with practical expertise.
                Our founder holds a Master&apos;s degree in International Business and Trade from the
                University of Gothenburg, along with bachelor&apos;s degrees in Java Integration and
                .NET Cloud Development.
              </p>
              <p>
                We serve clients across Gothenburg, Stockholm, and throughout the EU, offering
                both on-site and remote collaboration. Our multilingual team communicates fluently
                in English, Mandarin, and Swedish.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-5 bg-secondary-50 rounded-2xl hover:bg-primary-50 transition-colors duration-300 group"
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-secondary-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary inline-flex">
              <span>Work With Us</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {/* Technical Expertise Card */}
            <div className="bg-gradient-to-br from-secondary to-secondary-dark p-8 rounded-2xl text-white shadow-large">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold">Technical Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <span className="w-2 h-2 bg-primary-light rounded-full flex-shrink-0"></span>
                    <span className="text-sm text-secondary-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white shadow-large">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3-3l3 3 3-3" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {edu.icon}
                    </div>
                    <div>
                      <p className="font-medium text-white">{edu.degree}</p>
                      <p className="text-sm text-primary-200">{edu.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Badge */}
            <div className="flex items-center justify-center gap-4 p-4 bg-secondary-50 rounded-2xl">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-secondary">Gothenburg, Sweden</span>
              </div>
              <div className="w-px h-6 bg-secondary-200" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-secondary">Serving EU-wide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
