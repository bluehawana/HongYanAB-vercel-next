import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
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
      <Values />
      <Hardware />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}