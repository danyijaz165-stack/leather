'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import { Crown } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
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
              Welcome Back
            </h1>
            <p className="font-sans text-sm text-text-grey text-center mb-8">
              Sign in to your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-gold" />
                  <span className="font-sans text-sm text-text-grey">Remember me</span>
                </label>
                <Link href="#" className="font-sans text-sm text-gold hover:text-gold-bright transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="font-sans text-sm text-text-grey">
                Don't have an account?{' '}
                <Link href="/signup" className="text-gold hover:text-gold-bright transition-colors font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

