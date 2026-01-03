'use client'

import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface OrderFormProps {
  product: {
    id: number
    name: string
    price: string
    image: string
  }
  selectedSize: string
  selectedColor?: string
  quantity: number
  onClose: () => void
}

export default function OrderForm({ product, selectedSize, selectedColor, quantity, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderPlaced(true)
      
      // After 3 seconds, close modal and redirect
      setTimeout(() => {
        onClose()
      }, 3000)
    }, 1500)
  }

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="bg-card-bg border border-gold rounded-lg p-8 sm:p-12 max-w-md w-full mx-4 text-center animate-scale-in">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <CheckCircle className="h-20 w-20 text-gold animate-bounce" />
              <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping"></div>
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Order Placed!
          </h2>
          <p className="font-sans text-lg text-gray-300 mb-6">
            Thank you for your order. We'll contact you soon to confirm the details.
          </p>
          <div className="bg-dark-charcoal rounded-lg p-4 mb-6">
            <p className="font-sans text-sm text-text-grey">Order ID</p>
            <p className="font-serif text-xl font-bold text-gold">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-card-bg border border-card-border rounded-lg max-w-4xl w-full my-8 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-card-border">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Complete Your Order
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-text-grey hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
          {/* Product Summary */}
          <div className="bg-dark-charcoal rounded-lg p-4 sm:p-6">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Order Summary</h3>
            <div className="flex gap-4 mb-4">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-transparent rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-top"
                  quality={100}
                  sizes="128px"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-lg font-bold text-white mb-2">{product.name}</h4>
                {selectedColor && <p className="font-sans text-sm text-text-grey mb-1">Color: {selectedColor}</p>}
                <p className="font-sans text-sm text-text-grey mb-1">Size: {selectedSize}</p>
                <p className="font-sans text-sm text-text-grey mb-2">Quantity: {quantity}</p>
                <p className="font-sans text-xl font-semibold text-gold">{product.price}</p>
              </div>
            </div>
            <div className="border-t border-card-border pt-4">
              <div className="flex justify-between mb-2">
                <span className="font-sans text-sm text-text-grey">Subtotal</span>
                <span className="font-sans text-sm text-white">{product.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-sans text-sm text-text-grey">Shipping</span>
                <span className="font-sans text-sm text-white">PKR 500</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-card-border">
                <span className="font-sans text-lg font-semibold text-white">Total</span>
                <span className="font-sans text-lg font-semibold text-gold">{product.price}</span>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sans text-sm font-medium text-white mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                placeholder="+92 300 123 4567"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="block font-sans text-sm font-medium text-white mb-2">
                Delivery Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="House/Street, Area"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block font-sans text-sm font-medium text-white mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="Karachi"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block font-sans text-sm font-medium text-white mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="75000"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

