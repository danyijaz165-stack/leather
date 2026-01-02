'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Crown, Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(cart.length)
    }
    updateCartCount()
    // Update cart count when storage changes
    window.addEventListener('storage', updateCartCount)
    return () => window.removeEventListener('storage', updateCartCount)
  }, [])

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
            <a href="/" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Home
            </a>
            <a href="#bestsellers" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Shop
            </a>
            <Link href="/catalog" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Catalog
            </Link>
          </nav>

          {/* Desktop Cart & Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Link
              href="/cart"
              className="relative p-2 text-gold hover:text-gold-bright transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-dark-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="px-3 sm:px-4 py-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors font-sans text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-3 sm:px-4 py-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors font-sans text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Sign Up
            </Link>
            <a
              href="#"
              className="gold-btn rounded-lg px-4 lg:px-6 py-2 lg:py-2.5 font-sans text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap"
            >
              Order on WhatsApp
            </a>
          </div>

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
              <a href="/" className="font-serif text-off-white hover:text-gold transition-colors">
                Home
              </a>
              <a href="#bestsellers" className="font-serif text-off-white hover:text-gold transition-colors">
                Shop
              </a>
              <Link href="/catalog" className="font-serif text-off-white hover:text-gold transition-colors">
                Catalog
              </Link>
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="flex-1 px-4 py-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors font-sans text-sm font-medium text-center"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="flex-1 px-4 py-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors font-sans text-sm font-medium text-center"
                >
                  Sign Up
                </Link>
              </div>
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

