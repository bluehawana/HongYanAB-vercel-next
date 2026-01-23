import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Portrait Photo - Left */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/gokart-victory.jpg"
                alt="Hong Yan AB Team"
                fill
                className="object-cover object-[center_65%]"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white rounded-xl shadow-lg p-4 md:p-6">
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-3/5">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Swedish IT Consulting
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-secondary">
              Unlocking digital
              <br />
              <span className="font-semibold">transitions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl font-light leading-relaxed">
              We deliver enterprise-grade solutions in full-stack development, cloud architecture, and high-performance computing across Sweden and Europe.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-sm text-gray-500">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">3</p>
                <p className="text-sm text-gray-500">Languages</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">7.78</p>
                <p className="text-sm text-gray-500">Min AOSP Build</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-block bg-secondary text-white px-8 py-4 text-sm font-medium rounded-lg hover:bg-secondary-light transition-all duration-300"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-secondary text-secondary px-8 py-4 text-sm font-medium rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
