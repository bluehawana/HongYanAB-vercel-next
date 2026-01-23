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
                  <span>🎓</span>
                  <span>MSc International Business - University of Gothenburg</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💻</span>
                  <span>BSc Java Integration Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☁️</span>
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