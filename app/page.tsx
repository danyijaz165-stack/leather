import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Bestsellers from '@/components/Bestsellers'
import Reviews from '@/components/Reviews'
import Testimonials from '@/components/Testimonials'
import WhatsAppOrder from '@/components/WhatsAppOrder'
import AutoProductSlider from '@/components/AutoProductSlider'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollAnimation direction="up">
        <Features />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <Bestsellers />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <Reviews />
      </ScrollAnimation>
      <ScrollAnimation direction="up">
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <WhatsAppOrder />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <AutoProductSlider />
      </ScrollAnimation>
      <ScrollAnimation direction="up">
        <CTASection />
      </ScrollAnimation>
      <Footer />
    </main>
  )
}

