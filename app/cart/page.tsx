'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: string
  image: string
  size: string
  quantity: number
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
    setIsLoading(false)
  }, [])

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return
    const updatedCart = [...cartItems]
    updatedCart[index].quantity = newQuantity
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''))
      return total + price * item.quantity
    }, 0)
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
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gold hover:text-gold-bright transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-sans text-sm">Back</span>
          </button>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 text-text-grey mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-white mb-2">Your cart is empty</h2>
              <p className="font-sans text-text-grey mb-6">Add some products to get started</p>
              <Link
                href="/"
                className="inline-block gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card-bg border border-card-border rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                  >
                    {/* Product Image */}
                    <div className="relative w-full sm:w-32 h-32 sm:h-32 bg-dark-charcoal rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain object-center"
                        quality={100}
                        sizes="128px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm text-text-grey mb-2">Size: {item.size}</p>
                      <p className="font-sans text-lg font-semibold text-gold mb-4">
                        {item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-sans text-sm text-white">Quantity:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="px-3 py-1 bg-card-bg border border-card-border rounded text-white hover:border-gold transition-colors"
                          >
                            -
                          </button>
                          <span className="font-sans text-base text-white w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="px-3 py-1 bg-card-bg border border-card-border rounded text-white hover:border-gold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(index)}
                        className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="font-sans text-sm">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card-bg border border-card-border rounded-lg p-6 sticky top-24">
                  <h2 className="font-serif text-xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-text-grey">Subtotal</span>
                      <span className="font-sans text-sm text-white">
                        PKR {calculateTotal().toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-text-grey">Shipping</span>
                      <span className="font-sans text-sm text-white">PKR 500</span>
                    </div>
                    <div className="border-t border-card-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-sans text-lg font-semibold text-white">Total</span>
                        <span className="font-sans text-lg font-semibold text-gold">
                          PKR {(calculateTotal() + 500).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="block w-full gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold text-center mb-4"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    href="/"
                    className="block w-full text-center font-sans text-sm text-gold hover:text-gold-bright transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

