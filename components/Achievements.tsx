'use client'

import Image from 'next/image'

const projects = [
  {
    title: 'JobHunter AI',
    description: 'AI-powered automation with intelligent resume customization, real-time monitoring dashboard, and smart matching for Swedish and international markets.',
    link: 'https://bluehawana.com',
    linkText: 'Learn More',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Gothenburg TaxiCarPooling',
    description: 'Full-stack ride-sharing platform with automated matching algorithms, real-time tracking, and microservices architecture.',
    link: 'https://github.com/bluehawana/GothenburgTaxiPooling-Java-ReactNative',
    linkText: 'View on GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'CryptoWallet Azure',
    description: 'Secure cryptocurrency wallet with Azure integration, multi-currency support, and enterprise-grade security.',
    link: 'https://github.com/bluehawana/CryptoWallet-Xamarin-Azure',
    linkText: 'View on GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'CarPlayer AndroidAuto',
    description: 'Feature-rich Kotlin media player with enhanced playback controls and seamless Android Auto integration.',
    link: 'https://github.com/bluehawana/carplayer-kotlin-androidauto',
    linkText: 'View on GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'EPUB TTS Reader',
    description: 'Advanced text-to-speech reader with Android Auto integration for seamless in-car audiobook experience.',
    link: 'https://github.com/bluehawana/epub-ttsreader-androidauto',
    linkText: 'View on GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'WeatherAnywhere AI',
    description: 'Terminal weather app integrating OpenAI for generating artistic city landmark illustrations in ASCII format.',
    link: 'https://github.com/bluehawana',
    linkText: 'View on GitHub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
]

export default function Achievements() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary to-secondary-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-pattern" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-primary-light">Engineering Excellence</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Mission <span className="font-semibold">Accomplished</span>
          </h2>
          <p className="text-xl text-secondary-200 max-w-3xl mx-auto font-light">
            Breaking performance barriers through innovation and engineering excellence
          </p>
        </div>

        {/* Main Achievement Card */}
        <div className="glass-dark rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold">
              Android 15 AOSP Optimization Breakthrough
            </h3>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Record Breaking
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-secondary-200 mb-8 leading-relaxed text-lg">
                Through relentless performance tuning and strategic hardware optimization on our on-premise Dell HPC,
                our dream team of hardware engineers, DevOps specialists, and system architects accomplished what
                many deemed impossible.
              </p>

              {/* Achievement Stats Box */}
              <div className="bg-secondary-900/50 rounded-2xl p-8 mb-8">
                <p className="text-primary-light text-center text-lg font-semibold mb-3">
                  Fastest Android 15 AOSP Clean Build on Bare Metal
                </p>
                <p className="font-heading text-5xl md:text-6xl font-bold text-center text-white my-4">
                  7.78<span className="text-primary-light text-3xl ml-2">minutes</span>
                </p>
                <p className="text-center text-secondary-300 text-sm">
                  Previous baseline: 27 minutes (3.5x improvement)
                </p>
              </div>

              {/* Comparison List */}
              <div className="space-y-3">
                {[
                  { label: 'Google official benchmark', value: '~40 minutes' },
                  { label: 'Azure VM HB120rs_v3 (their best)', value: '~20.18 minutes' },
                  { label: 'We outperformed Azure by', value: '259%', highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-accent' : 'bg-primary/30'}`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-secondary-200">{item.label}</span>
                    <span className={`ml-auto font-semibold ${item.highlight ? 'text-accent-light' : 'text-white'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary-800/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl font-semibold">Why This Matters</h4>
              </div>
              <p className="text-secondary-200 mb-6 leading-relaxed">
                Just like Tesla didn&apos;t become the EV leader by just matching competitors — they made their cars
                cooler, smarter, and more advanced. Similarly, we&apos;re not just optimizing build times; we&apos;re
                redefining what&apos;s possible in our development pipeline.
              </p>
              <blockquote className="border-l-4 border-primary-light pl-4 text-secondary-300 italic">
                &quot;The secret sauce? Well, like any five-star chef&apos;s recipe, that stays in the vault. But here&apos;s
                the gist — it&apos;s not about throwing expensive hardware at the problem. It&apos;s about dissecting every
                layer of the stack and optimizing with surgical precision.&quot;
              </blockquote>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-10 pt-8 border-t border-white/10 text-center">
            <p className="text-secondary-200 italic text-lg max-w-3xl mx-auto">
              &quot;As the Olympic motto says: Citius, Altius, Fortius — Faster, Higher, Stronger.
              There are no shortcuts to peak performance, only dedication to excellence.&quot;
            </p>
          </div>
        </div>

        {/* Team Culture Card */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8">Work Hard, Play Hard</h3>
          <div className="glass-dark rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[500px] lg:h-auto bg-secondary-900/50 p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team/gokart-victory.jpg"
                    alt="Hong Yan AB team go-kart victory"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary-light text-sm font-semibold uppercase tracking-wide mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Team Spirit
                </span>
                <h4 className="font-heading text-3xl font-semibold mb-4">Go-Kart Championship Victory</h4>
                <p className="text-secondary-200 mb-6 leading-relaxed text-lg">
                  We bring the same competitive spirit and precision to everything we do. When we&apos;re not optimizing
                  server performance, you might find us at the track pushing limits and celebrating wins together.
                </p>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">1st Place at Gokartbanan, Gothenburg</p>
                    <p className="text-sm text-secondary-400">At Hong Yan AB, we race to win in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h3 className="font-heading text-2xl font-semibold text-center mb-10">Featured Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {project.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-white group-hover:text-primary-light transition-colors">{project.title}</h3>
              <p className="text-secondary-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-light hover:text-white transition text-sm font-medium group/link"
              >
                {project.linkText}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-secondary-200 mb-8 text-lg">
            Explore more of our open-source projects and technical expertise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/bluehawana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition border border-white/20 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit GitHub Profile
            </a>
            <a
              href="https://bluehawana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Portfolio Site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
