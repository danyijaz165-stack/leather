'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Truck, RotateCcw, Shield, Clock } from 'lucide-react'

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Shipping & Returns
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-grey max-w-2xl mx-auto">
              Everything you need to know about delivery and returns
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Shipping Section */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="h-8 w-8 text-gold" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Shipping Information
                </h2>
              </div>
              <div className="space-y-4 font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-white mb-2">Delivery Areas</h3>
                  <p>We deliver nationwide across Pakistan. All major cities and towns are covered.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Shipping Time</h3>
                  <p>Standard delivery: 5-7 business days</p>
                  <p>Express delivery: 2-3 business days (available in select cities)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Shipping Charges</h3>
                  <p>Standard shipping: PKR 500</p>
                  <p>Express shipping: PKR 1,000</p>
                  <p className="text-gold">Free shipping on orders above PKR 20,000</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Order Processing</h3>
                  <p>Custom orders may take 7-14 business days to process before shipping. We'll keep you updated on your order status.</p>
                </div>
              </div>
            </div>

            {/* Returns Section */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="h-8 w-8 text-gold" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Returns & Exchanges
                </h2>
              </div>
              <div className="space-y-4 font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-white mb-2">Return Policy</h3>
                  <p>We offer a 7-day return policy from the date of delivery. Items must be unworn, in original packaging, and with all tags attached.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Exchange Policy</h3>
                  <p>Size exchanges are available within 7 days of delivery. We'll arrange a pickup and send the correct size at no additional cost.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Refund Process</h3>
                  <p>Refunds will be processed within 5-7 business days after we receive and inspect the returned item. Refunds will be issued to the original payment method.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Non-Returnable Items</h3>
                  <p>Custom-made shoes and personalized items cannot be returned unless there's a manufacturing defect.</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-card-bg border border-card-border rounded-lg p-6">
                <Shield className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">Quality Guarantee</h3>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                  We guarantee the quality of our products. If you receive a defective item, contact us immediately for a replacement or full refund.
                </p>
              </div>
              <div className="bg-card-bg border border-card-border rounded-lg p-6">
                <Clock className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">Customer Support</h3>
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                  Our customer service team is available to assist you with any questions about shipping or returns. Contact us via WhatsApp or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

