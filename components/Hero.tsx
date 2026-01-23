export default function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-4 text-lg">
              Swedish IT Consulting Company
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Enterprise-Grade
              <span className="text-primary"> IT Solutions</span>
              <br />& Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-xl">
              Specializing in full-stack development, cloud architecture, and digital transformation for businesses across Sweden and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition text-center shadow-lg"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="text-4xl mb-2">⚛️</div>
                    <p className="font-semibold text-gray-800">React</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="text-4xl mb-2">☕</div>
                    <p className="font-semibold text-gray-800">Java</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="text-4xl mb-2">☁️</div>
                    <p className="font-semibold text-gray-800">AWS</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                    <div className="text-4xl mb-2">🐳</div>
                    <p className="font-semibold text-gray-800">Docker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}