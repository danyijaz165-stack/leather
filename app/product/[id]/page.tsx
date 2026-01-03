'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import OrderForm from '@/components/OrderForm'
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react'

// Product data - in real app, fetch from API
const products = {
  1: {
    id: 1,
    name: 'Classic Brown Oxford',
    price: 'PKR 16,500',
    originalPrice: 'PKR 18,500',
    image: '/jj.jpeg',
    description: 'Handcrafted premium leather oxford shoes with classic design. Perfect for formal occasions and business meetings.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Brown', 'Black', 'Tan'],
    rating: 4.5,
    reviews: 24,
  },
  2: {
    id: 2,
    name: 'Black Leather Loafers',
    price: 'PKR 14,500',
    originalPrice: 'PKR 16,500',
    image: '/jk.jpeg',
    description: 'Elegant black leather loafers with modern design. Versatile for both casual and semi-formal occasions.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Navy'],
    rating: 4.7,
    reviews: 18,
  },
  3: {
    id: 3,
    name: 'Tan Brogue Shoes',
    price: 'PKR 17,000',
    originalPrice: 'PKR 19,000',
    image: '/rt.jpeg',
    description: 'Stylish tan brogue shoes with intricate detailing. A perfect blend of classic and contemporary design.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Tan', 'Brown', 'Cognac'],
    rating: 4.6,
    reviews: 31,
  },
  4: {
    id: 4,
    name: 'Black Monk Strap',
    price: 'PKR 18,000',
    originalPrice: 'PKR 20,000',
    image: '/WhatsApp Image 2025-12-31 at 9.50.06 AM.jpeg',
    description: 'Sophisticated black monk strap shoes with premium leather finish. Ideal for formal events.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Charcoal'],
    rating: 4.8,
    reviews: 27,
  },
  5: {
    id: 5,
    name: 'Premium Leather Shoes',
    price: 'PKR 19,500',
    originalPrice: 'PKR 21,500',
    image: '/WhatsApp Image 2025-12-31 at 9.50.07 AM.jpeg',
    description: 'Premium leather shoes with exceptional craftsmanship. The ultimate choice for discerning gentlemen.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Burgundy'],
    rating: 4.9,
    reviews: 42,
  },
  6: {
    id: 6,
    name: 'Luxury Formal Shoes',
    price: 'PKR 21,000',
    originalPrice: 'PKR 23,000',
    image: '/WhatsApp Image 2026-01-03 at 3.47.27 PM.jpeg',
    description: 'Luxury formal shoes with exquisite design and premium quality. Perfect for special occasions and formal events.',
    features: [
      '100% Genuine Leather',
      'Handcrafted in Pakistan',
      'Comfortable Cushioning',
      'Durable Sole',
      'Available in Multiple Sizes',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Navy'],
    rating: 4.8,
    reviews: 35,
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const productId = parseInt(params.id)
  const product = products[productId as keyof typeof products]
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState(1)
  const [isFavourite, setIsFavourite] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [reviews, setReviews] = useState<any[]>([])
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' })

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]')
    setIsFavourite(favourites.some((fav: any) => fav.id === productId))
    
    // Load reviews from localStorage
    const savedReviews = JSON.parse(localStorage.getItem(`product_${productId}_reviews`) || '[]')
    setReviews(savedReviews)
  }, [productId])

  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Product Not Found</h1>
          <Link href="/" className="text-gold hover:text-gold-bright">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    if (!selectedColor) {
      alert('Please select a color')
      return
    }
    // Add to cart logic here
    const cartItem = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    }
    // Store in localStorage or context
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    existingCart.push(cartItem)
    localStorage.setItem('cart', JSON.stringify(existingCart))
    // Dispatch event to update navbar cart count
    window.dispatchEvent(new Event('cartUpdated'))
    router.push('/cart')
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    if (!selectedColor) {
      alert('Please select a color')
      return
    }
    setShowOrderForm(true)
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!reviewForm.name || !reviewForm.comment) {
      alert('Please fill all fields')
      return
    }
    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toLocaleDateString(),
    }
    const updatedReviews = [...reviews, newReview]
    setReviews(updatedReviews)
    localStorage.setItem(`product_${productId}_reviews`, JSON.stringify(updatedReviews))
    setReviewForm({ name: '', rating: 5, comment: '' })
    alert('Review submitted successfully!')
  }

  // Color mapping for visual display
  const getColorValue = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'Brown': '#8B4513',
      'Black': '#000000',
      'Tan': '#D2B48C',
      'Navy': '#000080',
      'Cognac': '#9F4E3B',
      'Charcoal': '#36454F',
      'Burgundy': '#800020',
    }
    return colorMap[colorName] || '#CCCCCC'
  }

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]')
    if (isFavourite) {
      const updated = favourites.filter((fav: any) => fav.id !== productId)
      localStorage.setItem('favourites', JSON.stringify(updated))
      setIsFavourite(false)
    } else {
      favourites.push(product)
      localStorage.setItem('favourites', JSON.stringify(favourites))
      setIsFavourite(true)
    }
    window.dispatchEvent(new Event('favouritesUpdated'))
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-card-bg border border-card-border rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center"
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold fill-gold'
                              : 'text-text-grey'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-sans text-sm text-text-grey">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-sans text-3xl font-bold text-gold">
                    {product.price}
                  </span>
                  <span className="font-sans text-xl text-text-grey line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>

              <div>
                <p className="font-sans text-base text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div>
                  <label className="block font-sans text-sm font-medium text-white mb-3">
                    Select Color
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color: string) => (
                      <div key={color} className="flex flex-col items-center gap-1.5">
                        <button
                          onClick={() => setSelectedColor(color)}
                          className={`w-6 h-6 rounded border-2 transition-all ${
                            selectedColor === color
                              ? 'border-gold scale-110'
                              : 'border-card-border hover:border-gold'
                          }`}
                          style={{
                            backgroundColor: getColorValue(color),
                          }}
                          title={color}
                        />
                        {selectedColor === color && (
                          <div className="w-6 h-0.5 bg-gold"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              <div>
                <label className="block font-sans text-sm font-medium text-white mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border font-sans text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-gold text-dark-black border-gold'
                          : 'bg-card-bg text-white border-card-border hover:border-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block font-sans text-sm font-medium text-white mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-card-bg border border-card-border rounded-lg text-white hover:border-gold transition-colors"
                  >
                    -
                  </button>
                  <span className="font-sans text-lg text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-card-bg border border-card-border rounded-lg text-white hover:border-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-gold">✓</span>
                      <span className="font-sans text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-card-bg border border-card-border rounded-lg px-6 py-3 font-sans text-base font-semibold text-white hover:bg-gold hover:text-dark-black transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button 
                    onClick={toggleFavourite}
                    className={`px-6 py-3 rounded-lg border transition-colors ${
                      isFavourite
                        ? 'bg-gold border-gold text-dark-black'
                        : 'bg-card-bg border-card-border text-gold hover:bg-gold hover:text-dark-black'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavourite ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16 border-t border-card-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">Customer Reviews</h2>
          
          {/* Review Form */}
          <div className="bg-card-bg border border-card-border rounded-lg p-6 mb-8">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Write a Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block font-sans text-sm font-medium text-white mb-2">Your Name</label>
                <input
                  type="text"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-black border border-card-border rounded-lg text-white focus:outline-none focus:border-gold"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-white mb-2">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating })}
                      className={`p-1 ${reviewForm.rating >= rating ? 'text-gold' : 'text-text-grey'}`}
                    >
                      <Star className={`h-6 w-6 ${reviewForm.rating >= rating ? 'fill-gold' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-white mb-2">Your Review</label>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-black border border-card-border rounded-lg text-white focus:outline-none focus:border-gold min-h-[100px]"
                  placeholder="Write your review here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="gold-btn rounded-lg px-6 py-2 font-sans text-base font-semibold"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <p className="text-text-grey text-center py-8">No reviews yet. Be the first to review!</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="bg-card-bg border border-card-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-sans text-base font-semibold text-white mb-1">{review.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-gold fill-gold' : 'text-text-grey'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="font-sans text-xs text-text-grey">{review.date}</span>
                  </div>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          quantity={quantity}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </main>
  )
}

