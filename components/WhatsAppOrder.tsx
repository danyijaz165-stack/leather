'use client'

import { Ruler, Truck } from 'lucide-react'

export default function WhatsAppOrder() {
  return (
    <section className="w-full bg-dark-black border-t-[1px] border-b-[1px] border-gold/50 py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          {/* Left Line - Tapered (thick to thin) with rounded ends */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="whatsappLeftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#whatsappLeftLineGradient)" />
          </svg>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
            Order Now on <span className="text-gold">WhatsApp</span>
          </h2>
          {/* Right Line - Tapered (thin to thick) with rounded ends */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="whatsappRightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                <stop offset="40%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#whatsappRightLineGradient)" />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-10 lg:mb-12">
          Get Your Perfect Shoes in 3 Easy Steps.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 border-b border-t border-gold/50 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-12">
          {/* Step 1 - Choose Design */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0">
              <svg 
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24"
              >
                <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8h8v8H8z" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                  Choose Your Design
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 - Send Size */}
          <div className="flex items-center gap-2 sm:gap-3 relative px-2 sm:px-4">
            {/* Left and Right borders - not touching top/bottom */}
            <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-px bg-gold/50"></div>
            <div className="hidden sm:block absolute right-0 top-2 bottom-2 w-px bg-gold/50"></div>
            
            <div className="flex-shrink-0">
              <Ruler className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                  Send Your Size
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 - Fast Delivery */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0">
              <Truck className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-semibold text-white leading-tight">
                  Get Fast Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="flex justify-center px-4">
          <a
            href="#"
            className="gold-btn rounded-lg px-6 sm:px-10 lg:px-12 py-2.5 sm:py-3 lg:py-4 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap w-full sm:w-auto text-center"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

