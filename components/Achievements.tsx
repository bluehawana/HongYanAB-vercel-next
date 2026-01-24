import Image from 'next/image'

const projects = [
  {
    title: 'JobHunter AI',
    description: 'AI-powered automation with intelligent resume customization, real-time monitoring dashboard, and smart matching for Swedish and international markets.',
    link: 'https://bluehawana.com',
    linkText: 'Learn More',
  },
  {
    title: 'Gothenburg TaxiCarPooling',
    description: 'Full-stack ride-sharing platform with automated matching algorithms, real-time tracking, and microservices architecture.',
    link: 'https://github.com/bluehawana/GothenburgTaxiPooling-Java-ReactNative',
    linkText: 'View on GitHub',
  },
  {
    title: 'CryptoWallet Azure',
    description: 'Secure cryptocurrency wallet with Azure integration, multi-currency support, and enterprise-grade security.',
    link: 'https://github.com/bluehawana/CryptoWallet-Xamarin-Azure',
    linkText: 'View on GitHub',
  },
  {
    title: 'CarPlayer AndroidAuto',
    description: 'Feature-rich Kotlin media player with enhanced playback controls and seamless Android Auto integration.',
    link: 'https://github.com/bluehawana/carplayer-kotlin-androidauto',
    linkText: 'View on GitHub',
  },
  {
    title: 'EPUB TTS Reader',
    description: 'Advanced text-to-speech reader with Android Auto integration for seamless in-car audiobook experience.',
    link: 'https://github.com/bluehawana/epub-ttsreader-androidauto',
    linkText: 'View on GitHub',
  },
  {
    title: 'WeatherAnywhere AI',
    description: 'Terminal weather app integrating OpenAI for generating artistic city landmark illustrations in ASCII format.',
    link: 'https://github.com/bluehawana',
    linkText: 'View on GitHub',
  },
]

export default function Achievements() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <p className="text-primary-light font-semibold mb-4 tracking-wide uppercase">
            Engineering Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Mission <span className="font-semibold">Accomplished</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
            Breaking performance barriers through innovation and engineering excellence
          </p>
        </div>

        {/* Main Achievement Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Android 15 AOSP Optimization Breakthrough
            </h3>
            <span className="bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold">
              Record Breaking Performance
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Through relentless performance tuning and strategic hardware optimization on our on-premise Dell HPC,
                our dream team of hardware engineers, DevOps specialists, and system architects just accomplished what
                many deemed impossible:
              </p>

              <div className="bg-black/30 rounded-xl p-6 mb-6">
                <p className="text-primary-light text-center text-xl font-bold mb-2">
                  The fastest Android 15 AOSP clean build time on Bare Metal
                </p>
                <p className="text-4xl md:text-5xl font-bold text-center text-white my-4">
                  7.78 minutes
                </p>
                <p className="text-center text-gray-300">
                  Previous baseline: 27 minutes (3.5x improvement)
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Google official benchmark: ~40 minutes</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Azure VM HB120rs_v3 (their best): ~20.18 minutes</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We outperformed Azure by 259%</span>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Why This Matters</h4>
              <p className="text-gray-200 mb-4">
                Just like Tesla didn&apos;t become the EV leader by just matching competitors — they made their cars
                cooler, smarter, and more advanced. Similarly, we&apos;re not just optimizing build times; we&apos;re
                redefining what&apos;s possible in our development pipeline.
              </p>
              <p className="text-gray-200 italic">
                &quot;The secret sauce? Well, like any five-star chef&apos;s recipe, that stays in the vault. But here&apos;s
                the gist — it&apos;s not about throwing expensive hardware at the problem. It&apos;s about dissecting every
                layer of the stack and optimizing with surgical precision.&quot;
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-center text-gray-200 italic">
              &quot;As the Olympic motto says: Citius, Altius, Fortius — Faster, Higher, Stronger.
              There are no shortcuts to peak performance, only dedication to excellence.&quot;
            </p>
          </div>
        </div>

        {/* Team Culture - Go-Kart Victory */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Work Hard, Play Hard</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[600px] md:h-[600px]">
                <Image
                  src="/images/team/gokart-victory.jpg"
                  alt="Hong Yan AB team go-kart victory"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-light font-semibold text-sm uppercase tracking-wide mb-2">Team Spirit</span>
                <h4 className="text-2xl font-semibold mb-4">Go-Kart Championship Victory</h4>
                <p className="text-gray-200 mb-4">
                  We bring the same competitive spirit and precision to everything we do. When we&apos;re not optimizing
                  server performance, you might find us at the track pushing limits and celebrating wins together.
                </p>
                <p className="text-gray-300 text-sm">
                  1st Place at Gokartbanan, Gothenburg — Because at Hong Yan AB, we race to win in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition group"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-light transition">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-white transition inline-flex items-center text-sm"
              >
                {project.linkText}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-200 mb-6 text-lg">
            Explore more of our open-source projects and technical expertise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/bluehawana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition border border-white/20 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit GitHub Profile
            </a>
            <a
              href="https://bluehawana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-light hover:bg-primary text-white px-6 py-3 rounded-lg transition"
            >
              View Portfolio Site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
