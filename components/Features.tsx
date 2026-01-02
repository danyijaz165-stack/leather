'use client'

import { useEffect, useState } from 'react'
import { Footprints } from 'lucide-react'

export default function Features() {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  // Auto-highlight feature (subtle animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-dark-charcoal border-t border-gold/50 border-b border-gold/50 py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {/* Feature 1 - Leather Hide */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex-shrink-0">
                <svg 
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round"/>
                  <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                    100% Genuine Leather
                  </span>
                  <span className="font-sans text-xs text-text-grey leading-tight">
                    High-Quality Materials
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 2 - Custom Fit */}
            <div className="flex items-center gap-2 sm:gap-3 relative px-2 sm:px-4">
              {/* Left and Right borders - not touching top/bottom */}
              <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-px bg-gold/50"></div>
              <div className="hidden sm:block absolute right-0 top-2 bottom-2 w-px bg-gold/50"></div>
              
              <div className="flex-shrink-0">
                <Footprints className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                    Custom Fit & Design
                  </span>
                  <span className="font-sans text-xs text-text-grey leading-tight">
                    Tailored to Your Size
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3 - COD */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 flex items-center justify-center">
                  <span className="text-gold font-bold text-[10px] sm:text-xs">COD</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                    Cash on Delivery
                  </span>
                  <span className="font-sans text-xs text-text-grey leading-tight">
                    Nationwide Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
