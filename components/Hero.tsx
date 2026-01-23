export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Background image - will show once you upload your server photos */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/hero/server-room.jpg')",
          backgroundPosition: 'right center'
        }}
      ></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">
            Swedish IT Consulting
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-secondary">
            Unlocking digital
            <br />
            <span className="font-semibold">transitions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl font-light leading-relaxed">
            We deliver enterprise-grade solutions in full-stack development, cloud architecture, and digital transformation across Sweden and Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-block bg-secondary text-white px-8 py-4 text-sm font-medium hover:bg-secondary-light transition-all duration-300"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-secondary text-secondary px-8 py-4 text-sm font-medium hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}