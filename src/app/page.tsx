import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Services } from '@/components/Services'
import { ERPShowcase } from '@/components/ERPShowcase'
import { Process } from '@/components/Process'
import { Portfolio } from '@/components/Portfolio'
import { Pricing } from '@/components/Pricing'
import { WhyUs } from '@/components/WhyUs'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ERPShowcase />
        <Process />
        <Portfolio />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
