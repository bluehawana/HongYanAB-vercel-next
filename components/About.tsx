export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-2">Our Story</p>
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              About Hong Yan AB
            </h2>
            <p className="text-gray-600 mb-4">
              Hong Yan AB is a Swedish IT consulting company founded by Hongzhi Li and Yan Liu
              in May 2017. We are a seasoned team with over 5 years of professional experience
              specializing in enterprise-grade solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Based in Gothenburg, Sweden, we combine academic excellence with practical expertise.
              Our founder holds a Master&apos;s degree in International Business and Trade from the
              University of Gothenburg, along with bachelor&apos;s degrees in Java Integration and
              .NET Cloud Development.
            </p>
            <p className="text-gray-600 mb-4">
              We serve clients across Gothenburg, Stockholm, and throughout the EU, offering
              both on-site and remote collaboration. Our multilingual team communicates fluently
              in English, Mandarin, and Swedish.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">5+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-gray-600 text-sm">Projects Delivered</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">3</h3>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-secondary to-secondary-dark p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Java Spring Boot',
                  'React & Next.js',
                  'TypeScript',
                  'AWS Cloud',
                  'Docker & K8s',
                  'PostgreSQL',
                  'MongoDB',
                  'RESTful APIs',
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <span>MSc International Business - University of Gothenburg</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                  </svg>
                  <span>BSc Java Integration Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                  </svg>
                  <span>BSc .NET Cloud Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}