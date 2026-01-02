'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Crown, Award, Users, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-8 w-8 sm:h-10 sm:w-10 text-gold" fill="#C9A24D" />
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                About Us
              </h1>
            </div>
            <p className="font-sans text-base sm:text-lg text-text-grey max-w-2xl mx-auto">
              Crafting Excellence in Every Step
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* Story Section */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Story
              </h2>
              <div className="space-y-4 font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  Royal Leather was founded with a vision to bring premium, handcrafted leather footwear to discerning customers who appreciate quality, craftsmanship, and timeless elegance.
                </p>
                <p>
                  Based in Pakistan, we combine traditional shoemaking techniques with modern design sensibilities. Each pair of shoes is meticulously crafted by skilled artisans who have honed their craft over generations.
                </p>
                <p>
                  We believe that great shoes are more than just footwear—they're a statement of style, a testament to quality, and a companion for life's most important moments.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-card-bg border border-card-border rounded-lg p-6">
                  <Award className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold text-white mb-3">Quality First</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                    We use only the finest genuine leather and materials, ensuring every pair meets our exacting standards of quality and durability.
                  </p>
                </div>
                <div className="bg-card-bg border border-card-border rounded-lg p-6">
                  <Heart className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold text-white mb-3">Craftsmanship</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                    Every shoe is handcrafted with attention to detail, combining traditional techniques with modern precision.
                  </p>
                </div>
                <div className="bg-card-bg border border-card-border rounded-lg p-6">
                  <Users className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold text-white mb-3">Customer Focus</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                    Your satisfaction is our priority. We offer custom sizing and personalized service to ensure the perfect fit.
                  </p>
                </div>
                <div className="bg-card-bg border border-card-border rounded-lg p-6">
                  <Crown className="h-10 w-10 text-gold mb-4" fill="#C9A24D" />
                  <h3 className="font-serif text-xl font-bold text-white mb-3">Heritage</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                    We honor the rich tradition of Pakistani leather craftsmanship while embracing innovation and contemporary design.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                To create premium leather footwear that combines exceptional quality, timeless design, and unmatched comfort. We strive to be the go-to destination for those who seek the perfect blend of tradition and modernity in their footwear.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

