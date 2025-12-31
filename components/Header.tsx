'use client'

import { useState } from 'react'
import { Crown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-card-border bg-dark-black sticky top-0 z-50">
      <div className="mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Crown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gold" fill="#C9A24D" />
            <span className="font-serif text-base sm:text-lg md:text-xl font-semibold text-gold">
              ROYAL LEATHER
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Home
            </a>
            <a href="#" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Shop
            </a>
            <a href="#" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              About
            </a>
            <a href="#" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop WhatsApp Button */}
          <a
            href="#"
            className="hidden sm:inline-block gold-btn rounded-lg px-4 lg:px-6 py-2 lg:py-2.5 font-sans text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap"
          >
            Order on WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gold"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-card-border py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="font-serif text-off-white hover:text-gold transition-colors">
                Home
              </a>
              <a href="#" className="font-serif text-off-white hover:text-gold transition-colors">
                Shop
              </a>
              <a href="#" className="font-serif text-off-white hover:text-gold transition-colors">
                About
              </a>
              <a href="#" className="font-serif text-off-white hover:text-gold transition-colors">
                Contact
              </a>
              <a
                href="#"
                className="gold-btn rounded-lg px-6 py-2.5 font-sans font-medium text-center"
              >
                Order on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

