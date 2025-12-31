'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Classic Brown Oxford',
    price: 'PKR 16,500',
    image: '/jj.jpeg',
  },
  {
    id: 2,
    name: 'Black Leather Loafers',
    price: 'PKR 14,500',
    image: '/jk.jpeg',
  },
  {
    id: 3,
    name: 'Tan Brogue Shoes',
    price: 'PKR 17,000',
    image: '/rt.jpeg',
  },
  {
    id: 4,
    name: 'Black Monk Strap',
    price: 'PKR 18,000',
    image: '/WhatsApp Image 2025-12-31 at 9.50.06 AM.jpeg',
  },
  {
    id: 5,
    name: 'Premium Leather Shoes',
    price: 'PKR 19,500',
    image: '/WhatsApp Image 2025-12-31 at 9.50.07 AM.jpeg',
  },
]

export default function Bestsellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full bg-dark-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Slider Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          {/* Left Side - Title with Lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-1 w-full sm:w-auto">
            {/* Left Line - Tapered (thick to thin) with rounded ends */}
            <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
              <defs>
                <linearGradient id="leftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#leftLineGradient)" />
            </svg>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
              Our Bestsellers
            </h2>
            {/* Right Line - Tapered (thin to thick) with rounded ends */}
            <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
              <defs>
                <linearGradient id="rightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                  <stop offset="40%" stopColor="#C9A24D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#rightLineGradient)" />
            </svg>
          </div>

          {/* Right Side - Slider Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-1.5 sm:p-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 sm:p-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Products Slider - Single Row */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-scroll mb-12 pb-4 -mx-4 px-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-48 sm:w-52 md:w-56 bg-card-bg border border-card-border rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-shadow"
            >
              <div className="relative w-full h-32 sm:h-36 md:h-40 bg-transparent overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="256px"
                  className="object-cover object-top scale-110"
                  quality={100}
                />
              </div>
              <div className="p-2 sm:p-3 text-center">
                <h3 className="font-sans text-sm sm:text-base font-medium text-white mb-1">
                  {product.name}
                </h3>
                <p className="font-sans text-base sm:text-lg font-semibold text-gold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="gold-btn rounded-lg px-6 sm:px-8 py-2.5 sm:py-3 font-sans text-sm sm:text-base font-semibold"
          >
            View All Designs
          </a>
        </div>
      </div>
    </section>
  )
}

