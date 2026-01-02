'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Auto-slider for hero (if multiple images in future)
  useEffect(() => {
    const interval = setInterval(() => {
      // For now, just a placeholder for future multiple images
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] py-6 sm:py-10 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2025-12-31 at 12.21.20 AM.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black/85 via-dark-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          {/* Left Side - Content */}
          <div className="w-full space-y-3 sm:space-y-4 lg:space-y-6 pt-4 sm:pt-6 lg:pt-0 text-center lg:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight section-title">
              Premium Custom<br />
              Leather Shoes
            </h1>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold italic drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">
              Made in Pakistan
            </p>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-light max-w-md mx-auto lg:mx-0">
              Handcrafted Perfection for the Modern Gentemna.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/catalog"
                className="inline-block gold-btn rounded-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap"
              >
                Shop Collection
              </a>
            </div>
          </div>

          {/* Right Side - Empty space for image visibility */}
          <div className="hidden lg:block relative lg:flex lg:justify-end">
            <div className="relative w-full h-[300px] lg:h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

