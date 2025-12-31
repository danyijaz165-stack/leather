'use client'

import { Ruler, Truck } from 'lucide-react'

export default function WhatsAppOrder() {
  return (
    <section className="w-full bg-dark-black border-t-[1px] border-b-[1px] border-gold/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Left Line - Tapered (thick to thin) with rounded ends */}
          <svg className="w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="whatsappLeftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#whatsappLeftLineGradient)" />
          </svg>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center">
            Order Now on <span className="text-gold">WhatsApp</span>
          </h2>
          {/* Right Line - Tapered (thin to thick) with rounded ends */}
          <svg className="w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
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
        <p className="font-sans text-lg text-gray-300 text-center mb-12">
          Get Your Perfect Shoes in 3 Easy Steps.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 border-b border-t border-gold/50 py-5 mb-12">
          {/* Step 1 - Choose Design */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg 
                className="h-8 w-8 text-gold" 
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
                <span className="font-sans text-base font-semibold text-white leading-tight">
                  Choose Your Design
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 - Send Size */}
          <div className="flex items-center gap-3 relative px-4">
            {/* Left and Right borders - not touching top/bottom */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gold/50"></div>
            <div className="absolute right-0 top-2 bottom-2 w-px bg-gold/50"></div>
            
            <div className="flex-shrink-0">
              <Ruler className="h-8 w-8 text-gold" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="font-sans text-base font-semibold text-white leading-tight">
                  Send Your Size
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 - Fast Delivery */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Truck className="h-8 w-8 text-gold" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="font-sans text-base font-semibold text-white leading-tight">
                  Get Fast Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Line Separator */}
        <div className="flex justify-center mb-8">
          <div className="h-px w-32 bg-gold/50"></div>
        </div>

        {/* Final CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="gold-btn rounded-lg px-12 py-4 font-sans text-lg font-semibold"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

