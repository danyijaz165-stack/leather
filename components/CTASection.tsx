'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2025-12-31 at 12.21.20 AM.jpeg"
          alt="CTA Background"
          fill
          className="object-cover object-center w-full h-full"
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-black/80 via-dark-black/70 to-dark-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6 max-w-3xl py-6 sm:py-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Discover Premium<br />
            Leather Craftsmanship
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Experience the perfect blend of tradition and modernity. Each pair is handcrafted with precision and care, ensuring unmatched quality and comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/catalog"
              className="inline-block gold-btn rounded-lg px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap"
            >
              Explore Collection
            </Link>
            <Link
              href="#"
              className="inline-block px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 font-sans text-sm sm:text-base lg:text-lg font-semibold text-white border-2 border-gold rounded-lg hover:bg-gold hover:text-dark-black transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

