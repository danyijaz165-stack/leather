'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import { Crown } from 'lucide-react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
          <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 shadow-lg">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Crown className="h-6 w-6 text-gold" fill="#C9A24D" />
              <span className="font-serif text-2xl font-semibold text-gold">
                ROYAL LEATHER
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white text-center mb-2">
              Create Account
            </h1>
            <p className="font-sans text-sm text-text-grey text-center mb-8">
              Join us for exclusive offers
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block font-sans text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block font-sans text-sm font-medium text-white mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2 accent-gold" required />
                <label htmlFor="terms" className="font-sans text-sm text-text-grey">
                  I agree to the{' '}
                  <Link href="#" className="text-gold hover:text-gold-bright transition-colors">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="font-sans text-sm text-text-grey">
                Already have an account?{' '}
                <Link href="/login" className="text-gold hover:text-gold-bright transition-colors font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

