'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { FaUserTie, FaShoePrints, FaHatCowboy } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Muhammad Ali',
    location: 'Karachi',
    rating: 5,
    comment: 'The quality of these shoes is exceptional. I have been wearing them for months and they still look brand new. Highly recommended!',
    icon: FaUserTie,
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    location: 'Lahore',
    rating: 5,
    comment: 'Perfect fit and amazing craftsmanship. The custom sizing option made all the difference. These are now my go-to formal shoes.',
    icon: FaShoePrints,
  },
  {
    id: 3,
    name: 'Omar Hassan',
    location: 'Islamabad',
    rating: 5,
    comment: 'Best investment I made this year. The leather quality is premium and the comfort is unmatched. Worth every penny!',
    icon: FaHatCowboy,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-dark-black py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {/* Left Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="testimonialLeftLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#testimonialLeftLineGradient)" />
          </svg>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
            What Our Customers Say
          </h2>
          {/* Right Line */}
          <svg className="w-12 sm:w-16 lg:w-20 h-px" viewBox="0 0 80 1" preserveAspectRatio="none">
            <defs>
              <linearGradient id="testimonialRightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                <stop offset="40%" stopColor="#C9A24D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C9A24D" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="80" height="1" rx="0.5" fill="url(#testimonialRightLineGradient)" />
          </svg>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card-bg border border-card-border rounded-lg p-6 transition-all duration-500 ${
                index === currentIndex ? 'border-gold shadow-lg scale-105' : 'opacity-90'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <testimonial.icon className="h-12 w-12 sm:h-16 sm:w-16 text-gold" />
              </div>
              <Quote className="h-6 w-6 text-gold mb-3 mx-auto" />
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-gold fill-gold' : 'text-text-grey'
                    }`}
                  />
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-gray-300 mb-4 text-center leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="border-t border-card-border pt-4 text-center">
                <p className="font-sans text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="font-sans text-xs text-text-grey">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

