import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Bestsellers from '@/components/Bestsellers'
import WhatsAppOrder from '@/components/WhatsAppOrder'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-black">
      <Header />
      <Hero />
      <Features />
      <Bestsellers />
      <WhatsAppOrder />
    </main>
  )
}

