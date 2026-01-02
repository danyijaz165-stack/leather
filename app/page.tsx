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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Bestsellers />
      <Reviews />
      <Testimonials />
      <WhatsAppOrder />
      <AutoProductSlider />
      <CTASection />
      <Footer />
    </main>
  )
}

