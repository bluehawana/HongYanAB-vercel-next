import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import RealWork from '@/components/RealWork'
import Values from '@/components/Values'
import Hardware from '@/components/Hardware'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <RealWork />
      <Values />
      <Hardware />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}