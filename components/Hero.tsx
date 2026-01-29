'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/15 rounded-full animate-float animation-delay-400" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content - Left */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Swedish IT Consulting
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-secondary mb-8 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
              Unlocking
              <br />
              <span className="font-semibold">digital</span>
              <br />
              <span className="gradient-text font-semibold">transitions</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-secondary-500 mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
              We deliver enterprise-grade solutions in full-stack development,
              cloud architecture, and high-performance computing across
              Sweden and Europe.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 animate-fade-in-up animation-delay-300">
              <div className="group">
                <p className="font-heading text-4xl md:text-5xl font-bold text-secondary group-hover:text-primary transition-colors">
                  50<span className="text-primary">+</span>
                </p>
                <p className="text-sm text-secondary-400 font-medium mt-1">Projects Delivered</p>
              </div>
              <div className="w-px bg-secondary-200" />
              <div className="group">
                <p className="font-heading text-4xl md:text-5xl font-bold text-secondary group-hover:text-primary transition-colors">
                  5<span className="text-primary">+</span>
                </p>
                <p className="text-sm text-secondary-400 font-medium mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-secondary-200 hidden sm:block" />
              <div className="group">
                <p className="font-heading text-4xl md:text-5xl font-bold text-secondary group-hover:text-primary transition-colors">
                  7.78<span className="text-primary">min</span>
                </p>
                <p className="text-sm text-secondary-400 font-medium mt-1">AOSP Build Record</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a href="#services" className="btn-primary group">
                <span>Explore Services</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary group">
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image - Right */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden shadow-large">
                <Image
                  src="/images/services/hpc-dell-server.jpg"
                  alt="Hong Yan AB - Dell HPC Servers"
                  fill
                  className="object-cover object-[center_65%]"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent" />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <p className="text-sm font-medium opacity-80">Specialized in</p>
                      <p className="text-lg font-semibold">High-Performance Computing</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        Dell Servers
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        HPC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Experience */}
              <div className="absolute -bottom-6 -left-6 md:-left-8 bg-white rounded-2xl shadow-large p-5 md:p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-secondary">5+ Years</p>
                    <p className="text-sm text-secondary-400">Professional Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Languages */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-large p-4 md:p-5 animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {/* Sweden Flag */}
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <svg viewBox="0 0 640 480" className="w-full h-full">
                        <path fill="#006aa7" d="M0 0h640v480H0z"/>
                        <path fill="#fecc00" d="M176 0v192H0v96h176v192h64V288h400v-96H240V0h-64z"/>
                      </svg>
                    </div>
                    {/* UK Flag */}
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm bg-[#012169] flex items-center justify-center">
                      <span className="text-xs font-bold text-white">EN</span>
                    </div>
                    {/* China Flag */}
                    <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm bg-[#DE2910] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#FFDE00]">中</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-secondary">3 Languages</p>
                    <p className="text-xs text-secondary-400">Multilingual Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-in animation-delay-600">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-secondary-400 hover:text-primary transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-secondary-300 group-hover:border-primary rounded-full flex justify-center pt-2 transition-colors">
              <div className="w-1.5 h-3 bg-secondary-300 group-hover:bg-primary rounded-full animate-bounce transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
