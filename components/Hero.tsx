'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showRecentSearches, setShowRecentSearches] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const router = useRouter()

  // Product data for search
  const allProducts = [
    { id: 1, name: 'Classic Brown Oxford', price: 'PKR 16,500', image: '/jj.jpeg' },
    { id: 2, name: 'Black Leather Loafers', price: 'PKR 14,500', image: '/jk.jpeg' },
    { id: 3, name: 'Tan Brogue Shoes', price: 'PKR 17,000', image: '/rt.jpeg' },
    { id: 4, name: 'Black Monk Strap', price: 'PKR 18,000', image: '/WhatsApp Image 2025-12-31 at 9.50.06 AM.jpeg' },
    { id: 5, name: 'Premium Leather Shoes', price: 'PKR 19,500', image: '/WhatsApp Image 2025-12-31 at 9.50.07 AM.jpeg' },
    { id: 6, name: 'Luxury Formal Shoes', price: 'PKR 21,000', image: '/WhatsApp Image 2026-01-03 at 3.47.27 PM.jpeg' },
  ]
  
  // Auto-slider for hero (if multiple images in future)
  useEffect(() => {
    const interval = setInterval(() => {
      // For now, just a placeholder for future multiple images
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // Filter products based on search query
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.hero-search-container')) {
        setShowRecentSearches(false)
      }
    }
    if (showRecentSearches || searchResults.length > 0) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showRecentSearches, searchResults])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('recentSearches', JSON.stringify(updated))
      // Redirect to catalog with search query
      router.push(`/catalog?search=${encodeURIComponent(query)}`)
    }
    setShowRecentSearches(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchQuery)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }
  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] py-6 sm:py-10 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2025-12-31 at 12.21.20 AM.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black/85 via-dark-black/70 to-transparent"></div>
      </div>

      {/* Search Bar - Top Right Corner */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20 hero-search-container">
        <div className="relative">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gold z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowRecentSearches(false)
              }}
              onFocus={() => {
                if (!searchQuery && recentSearches.length > 0) {
                  setShowRecentSearches(true)
                }
              }}
              placeholder="Search products..."
              className="w-48 sm:w-64 lg:w-80 pl-10 pr-8 py-2 sm:py-2.5 bg-transparent border border-gold/50 rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors text-sm sm:text-base backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSearchResults([])
                  setShowRecentSearches(false)
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-grey hover:text-white z-10"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
          
          {/* Search Results Dropdown */}
          {searchQuery.trim() && searchResults.length > 0 && (
            <div className="absolute top-full right-0 mt-2 w-48 sm:w-64 lg:w-80 bg-dark-black/95 backdrop-blur-sm border border-gold/50 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
              <div className="p-2 border-b border-gold/30">
                <span className="font-sans text-xs text-text-grey">Search Results</span>
              </div>
              {searchResults.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gold/20 transition-colors border-b border-gold/10 last:border-b-0"
                >
                  <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-white truncate">{product.name}</p>
                    <p className="font-sans text-xs text-gold">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Recent Searches Dropdown */}
          {showRecentSearches && !searchQuery && recentSearches.length > 0 && (
            <div className="absolute top-full right-0 mt-2 w-48 sm:w-64 lg:w-80 bg-dark-black/95 backdrop-blur-sm border border-gold/50 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              <div className="p-2 flex items-center justify-between border-b border-gold/30">
                <span className="font-sans text-xs text-text-grey">Recent Searches</span>
                <button
                  type="button"
                  onClick={clearRecentSearches}
                  className="font-sans text-xs text-text-grey hover:text-white"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSearch(search)}
                  className="w-full text-left px-4 py-2 hover:bg-gold/20 transition-colors font-sans text-sm text-white"
                >
                  {search}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center justify-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          {/* Left Side - Content */}
          <div className="w-full space-y-3 sm:space-y-4 lg:space-y-6 pt-4 sm:pt-6 lg:pt-0 text-center lg:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight section-title">
              Premium Custom<br />
              Leather Shoes
            </h1>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold italic drop-shadow-[0_0_10px_rgba(201,162,77,0.5)]">
              Made in Pakistan
            </p>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-light max-w-md mx-auto lg:mx-0">
              Handcrafted Perfection for the Modern Gentemna.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/catalog"
                className="inline-block gold-btn rounded-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 font-sans text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap"
              >
                Shop Collection
              </a>
            </div>
          </div>

          {/* Right Side - Empty space for image visibility */}
          <div className="hidden lg:block relative lg:flex lg:justify-end">
            <div className="relative w-full h-[300px] lg:h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

