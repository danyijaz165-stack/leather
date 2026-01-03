'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Crown, Menu, X, ShoppingCart, Heart } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [favouritesCount, setFavouritesCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCartCount(cart.length)
      } catch (error) {
        setCartCount(0)
      }
    }

    const updateFavouritesCount = () => {
      try {
        const favourites = JSON.parse(localStorage.getItem('favourites') || '[]')
        setFavouritesCount(favourites.length)
      } catch (error) {
        setFavouritesCount(0)
      }
    }
    
    updateCartCount()
    updateFavouritesCount()
    
    // Listen for custom cart update events
    const handleCartUpdate = () => updateCartCount()
    const handleFavouritesUpdate = () => updateFavouritesCount()
    
    window.addEventListener('cartUpdated', handleCartUpdate)
    window.addEventListener('favouritesUpdated', handleFavouritesUpdate)
    window.addEventListener('storage', () => {
      updateCartCount()
      updateFavouritesCount()
    })
    
    // Also check periodically (for same-tab updates)
    const interval = setInterval(() => {
      updateCartCount()
      updateFavouritesCount()
    }, 1000)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
      window.removeEventListener('favouritesUpdated', handleFavouritesUpdate)
      clearInterval(interval)
    }
  }, [])

  const whatsappNumber = '03149339180'
  const whatsappMessage = 'Hello! I would like to place an order.'
  const whatsappUrl = `https://wa.me/92${whatsappNumber.replace(/^0/, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <header className="w-full border-b border-card-border bg-dark-black sticky top-0 z-50 backdrop-blur-sm bg-dark-black/95">
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
            <Link href="/" className="font-serif text-sm lg:text-base text-off-white hover:text-gold transition-colors">
              Home
            </Link>
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
              href="/favourites"
              className="relative p-2 text-gold hover:text-gold-bright transition-colors"
            >
              <Heart className="h-5 w-5" />
              {favouritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-dark-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {favouritesCount}
                </span>
              )}
            </Link>
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn rounded-lg px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 font-sans text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap flex items-center gap-2"
            >
              <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              <span className="hidden sm:inline">Order on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
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
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-off-white hover:text-gold transition-colors"
              >
                Home
              </Link>
              <a 
                href="#bestsellers" 
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-off-white hover:text-gold transition-colors"
              >
                Shop
              </a>
              <Link 
                href="/catalog" 
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-off-white hover:text-gold transition-colors"
              >
                Catalog
              </Link>
              <Link
                href="/favourites"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 font-serif text-off-white hover:text-gold transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span>Favourites</span>
                {favouritesCount > 0 && (
                  <span className="bg-gold text-dark-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {favouritesCount}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 font-serif text-off-white hover:text-gold transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="bg-gold text-dark-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-card-bg border border-card-border text-gold hover:bg-gold hover:text-dark-black transition-colors font-sans text-sm font-medium text-center"
              >
                Login
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="gold-btn rounded-lg px-6 py-2.5 font-sans font-medium text-center flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
                Order on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

