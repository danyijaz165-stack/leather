'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Filter, Grid, List, Search, X } from 'lucide-react'

const allProducts = [
  {
    id: 1,
    name: 'Classic Brown Oxford',
    price: 'PKR 16,500',
    originalPrice: 'PKR 18,500',
    image: '/jj.jpeg',
    category: 'Oxford',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Black Leather Loafers',
    price: 'PKR 14,500',
    originalPrice: 'PKR 16,500',
    image: '/jk.jpeg',
    category: 'Loafers',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Tan Brogue Shoes',
    price: 'PKR 17,000',
    originalPrice: 'PKR 19,000',
    image: '/rt.jpeg',
    category: 'Brogue',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Black Monk Strap',
    price: 'PKR 18,000',
    originalPrice: 'PKR 20,000',
    image: '/WhatsApp Image 2025-12-31 at 9.50.06 AM.jpeg',
    category: 'Monk Strap',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Premium Leather Shoes',
    price: 'PKR 19,500',
    originalPrice: 'PKR 21,500',
    image: '/WhatsApp Image 2025-12-31 at 9.50.07 AM.jpeg',
    category: 'Premium',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Luxury Formal Shoes',
    price: 'PKR 21,000',
    originalPrice: 'PKR 23,000',
    image: '/WhatsApp Image 2026-01-03 at 3.47.27 PM.jpeg',
    category: 'Premium',
    rating: 4.8,
  },
]

const categories = ['All', 'Oxford', 'Loafers', 'Brogue', 'Monk Strap', 'Premium']

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showRecentSearches, setShowRecentSearches] = useState(false)

  useEffect(() => {
    // Get search query from URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const searchParam = params.get('search')
      if (searchParam) {
        setSearchQuery(searchParam)
      }
    }
  }, [])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // Close recent searches when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.search-container')) {
        setShowRecentSearches(false)
      }
    }
    if (showRecentSearches) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showRecentSearches])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('recentSearches', JSON.stringify(updated))
    }
    setShowRecentSearches(false)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const filteredProducts = (() => {
    let products = selectedCategory === 'All' 
      ? allProducts 
      : allProducts.filter(product => product.category === selectedCategory)
    
    if (searchQuery.trim()) {
      products = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return products
  })()

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Product Catalog
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-grey">
              Browse our complete collection of premium leather shoes
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 relative search-container">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-grey" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowRecentSearches(true)
                }}
                onFocus={() => setShowRecentSearches(true)}
                placeholder="Search products by name..."
                className="w-full pl-12 pr-4 py-3 bg-card-bg border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setShowRecentSearches(false)
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-grey hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Recent Searches Dropdown */}
            {showRecentSearches && recentSearches.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-card-border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                <div className="p-2 flex items-center justify-between border-b border-card-border">
                  <span className="font-sans text-xs text-text-grey">Recent Searches</span>
                  <button
                    onClick={clearRecentSearches}
                    className="font-sans text-xs text-text-grey hover:text-white"
                  >
                    Clear
                  </button>
                </div>
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left px-4 py-2 hover:bg-dark-black transition-colors font-sans text-sm text-white"
                  >
                    {search}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="h-5 w-5 text-gold" />
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gold text-dark-black'
                        : 'bg-card-bg border border-card-border text-white hover:border-gold'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-card-bg border border-card-border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-gold text-dark-black' : 'text-gold hover:bg-gold/20'
                }`}
                aria-label="Grid view"
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-gold text-dark-black' : 'text-gold hover:bg-gold/20'
                }`}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Products Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="bg-card-bg border border-card-border rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-shadow"
                >
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-transparent overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                      quality={100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="font-sans text-xs text-text-grey mb-2">{product.category}</p>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-sans text-lg sm:text-xl font-semibold text-gold">
                        {product.price}
                      </span>
                      <span className="font-sans text-sm text-text-grey line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-sans text-sm text-text-grey">Rating: {product.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-card-bg border border-card-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full sm:w-48 h-48 sm:h-48 bg-transparent overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                      quality={100}
                      sizes="192px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-xs text-text-grey mb-2">{product.category}</p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm text-gray-300 mb-4">
                      Premium handcrafted leather shoes with exceptional quality and comfort.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xl sm:text-2xl font-semibold text-gold">
                          {product.price}
                        </span>
                        <span className="font-sans text-base text-text-grey line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-text-grey">Rating: {product.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-white mb-2">No products found</p>
              <p className="font-sans text-text-grey">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

