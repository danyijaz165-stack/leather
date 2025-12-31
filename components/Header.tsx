'use client'

import { Crown } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-card-border bg-dark-black">
      <div className="mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-gold" fill="#C9A24D" />
            <span className="font-serif text-xl font-semibold text-gold">
              ROYAL LEATHER
            </span>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8">
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
          </nav>

          {/* WhatsApp Button */}
          <a
            href="#"
            className="gold-btn rounded-lg px-6 py-2.5 font-sans font-medium"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

