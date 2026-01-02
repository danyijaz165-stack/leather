'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, ShoppingBag } from 'lucide-react'

export default function FavouritesPage() {
  const router = useRouter()
  const [favourites, setFavourites] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favourites') || '[]')
    setFavourites(favs)
    setIsLoading(false)
  }, [])

  const removeFavourite = (productId: number) => {
    const updated = favourites.filter((fav) => fav.id !== productId)
    setFavourites(updated)
    localStorage.setItem('favourites', JSON.stringify(updated))
    window.dispatchEvent(new Event('favouritesUpdated'))
  }

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="font-sans text-white">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            My Favourites
          </h1>

          {favourites.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 text-text-grey mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-white mb-2">No favourites yet</h2>
              <p className="font-sans text-text-grey mb-6">Start adding products to your favourites</p>
              <Link
                href="/catalog"
                className="inline-block gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {favourites.map((product) => (
                <div
                  key={product.id}
                  className="bg-card-bg border border-card-border rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-shadow"
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-transparent overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain object-top"
                        quality={100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </Link>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white hover:text-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeFavourite(product.id)}
                        className="p-2 text-gold hover:text-red-400 transition-colors"
                        aria-label="Remove from favourites"
                      >
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                    <p className="font-sans text-lg sm:text-xl font-semibold text-gold mb-4">
                      {product.price}
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="block w-full gold-btn rounded-lg px-4 py-2.5 font-sans text-sm font-semibold text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

