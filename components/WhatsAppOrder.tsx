'use client'

import { Ruler, Truck } from 'lucide-react'

export default function WhatsAppOrder() {
  return (
    <section className="w-full bg-dark-black border-t-[1px] border-b-[1px] border-gold/50 py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-center">
        <div className="w-full max-w-5xl">
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
        <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 border-b border-t border-gold/50 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-14 w-full max-w-5xl">
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
        </div>

        {/* Final CTA Button */}
        <div className="flex justify-center px-4">
          <a
            href="https://wa.me/923149339180?text=Hello!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn rounded-lg px-6 sm:px-10 lg:px-12 py-2.5 sm:py-3 lg:py-4 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}

