'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  {
    id: 6,
    name: 'Elegant Black Formal',
    price: 'PKR 20,000',
    image: '/WhatsApp Image 2025-12-31 at 12.21.20 AM.jpeg',
  },
  {
    id: 7,
    name: 'Classic Tan Leather',
    price: 'PKR 15,500',
    image: '/jj.jpeg',
  },
  {
    id: 6,
    name: 'Luxury Formal Shoes',
    price: 'PKR 21,000',
    image: '/WhatsApp Image 2026-01-03 at 3.47.27 PM.jpeg',
  },
]

export default function Bestsellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollAmount = 400
        const maxScroll = container.scrollWidth - container.clientWidth
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Reset to start
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }
    }, 4000) // Auto-slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

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
    <section id="bestsellers" className="w-full bg-dark-black py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
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

        {/* Products Slider - Single Row with Top Corner Buttons */}
        <div className="relative">
          {/* Left Button - Top Left Corner */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 z-10 p-1.5 sm:p-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Right Button - Top Right Corner */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 z-10 p-1.5 sm:p-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Products Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-scroll mb-8 sm:mb-12 pb-4 pt-12 sm:pt-14"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex-shrink-0 w-[180px] sm:w-48 md:w-52 lg:w-56 bg-card-bg border border-card-border rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-shadow cursor-pointer"
              >
                <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 bg-transparent overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                    className="object-contain object-top"
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
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center px-4">
          <Link
            href="/catalog"
            className="gold-btn rounded-lg px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap w-full sm:w-auto text-center"
          >
            View All Designs
          </Link>
        </div>
      </div>
    </section>
  )
}

