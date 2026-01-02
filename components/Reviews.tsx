'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Ahmed Khan',
    rating: 5,
    comment: 'Excellent quality! The shoes are comfortable and look exactly as shown. Highly recommended!',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Hassan Ali',
    rating: 5,
    comment: 'Best leather shoes I have ever purchased. The craftsmanship is outstanding. Worth every rupee!',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Usman Malik',
    rating: 4,
    comment: 'Great shoes, perfect fit. Delivery was fast and packaging was excellent. Will order again!',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Bilal Ahmed',
    rating: 5,
    comment: 'Premium quality leather, very comfortable. The custom fit option is amazing. Love it!',
    date: '1 week ago',
  },
  {
    id: 5,
    name: 'Zain Ali',
    rating: 4,
    comment: 'Good quality shoes at reasonable price. The design is classic and elegant. Satisfied with purchase.',
    date: '2 months ago',
  },
  {
    id: 6,
    name: 'Faisal Khan',
    rating: 5,
    comment: 'Outstanding service and product quality. These shoes are perfect for formal occasions. Highly satisfied!',
    date: '3 weeks ago',
  },
]

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: scrollContainerRef.current.clientWidth,
          behavior: 'smooth',
        })
      }
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="reviews" className="w-full bg-dark-charcoal py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {/* Left Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="reviewLeftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#reviewLeftLineGradient)" />
          </svg>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
            Customer Reviews
          </h2>
          {/* Right Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="reviewRightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                <stop offset="40%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#reviewRightLineGradient)" />
          </svg>
        </div>

        {/* Reviews Slider */}
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

          {/* Reviews Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide pt-12 sm:pt-14"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-card-bg border border-card-border rounded-lg p-4 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-gold fill-gold' : 'text-text-grey'
                      }`}
                    />
                  ))}
                </div>
                <p className="font-sans text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="border-t border-card-border pt-4">
                  <p className="font-sans text-sm font-semibold text-white">{review.name}</p>
                  <p className="font-sans text-xs text-text-grey">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

