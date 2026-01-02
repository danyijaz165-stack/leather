'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
]

export default function AutoProductSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Calculate single set width
    const singleSetWidth = container.scrollWidth / 3

    // Start from middle set
    container.scrollLeft = singleSetWidth

    let scrollSpeed = 0.5 // pixels per frame (slower for smooth effect)
    let animationFrameId: number
    let isPaused = false

    const scroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += scrollSpeed

        // Reset to start of middle set when reaching end
        if (container.scrollLeft >= singleSetWidth * 2 - 10) {
          container.scrollLeft = singleSetWidth
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true
    }
    const handleMouseLeave = () => {
      isPaused = false
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products]

  return (
    <section className="w-full bg-dark-charcoal py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {/* Left Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="autoSliderLeftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#autoSliderLeftLineGradient)" />
          </svg>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center">
            Featured Products
          </h2>
          {/* Right Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="autoSliderRightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                <stop offset="40%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#autoSliderRightLineGradient)" />
          </svg>
        </div>

        {/* Auto-Scrolling Products Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedProducts.map((product, index) => (
              <Link
                key={`${product.id}-${index}`}
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
      </div>
    </section>
  )
}

