export default function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-secondary-dark via-secondary to-primary-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-primary-light font-semibold mb-4 text-lg">
              Swedish IT Consulting Company
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise-Grade
              <span className="text-primary-light"> IT Solutions</span>
              <br />& Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-xl">
              Specializing in full-stack development, cloud architecture, and digital transformation for businesses across Sweden and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-2">⚛️</div>
                    <p className="font-semibold">React</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-2">☕</div>
                    <p className="font-semibold">Java</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-2">☁️</div>
                    <p className="font-semibold">AWS</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-3xl mb-2">🐳</div>
                    <p className="font-semibold">Docker</p>
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