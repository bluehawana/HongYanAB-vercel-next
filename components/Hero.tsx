export default function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary-light to-primary-dark">
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Hong Yan AB
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional Business Services and Solutions for Your Success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}