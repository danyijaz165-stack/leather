'use client'

import Link from 'next/link'
import { Crown, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-dark-black border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-gold" fill="#C9A24D" />
              <span className="font-serif text-lg sm:text-xl font-semibold text-gold">
                ROYAL LEATHER
              </span>
            </div>
            <p className="font-sans text-sm text-text-grey leading-relaxed">
              Premium handcrafted leather shoes made in Pakistan. Quality craftsmanship for the modern gentleman.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-card-bg border border-card-border rounded-lg text-gold hover:bg-gold hover:text-dark-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-card-bg border border-card-border rounded-lg text-gold hover:bg-gold hover:text-dark-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-card-bg border border-card-border rounded-lg text-gold hover:bg-gold hover:text-dark-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="#bestsellers" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Shop
              </Link>
              <Link href="#reviews" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Reviews
              </Link>
              <Link href="/login" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Login
              </Link>
              <Link href="/signup" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Sign Up
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Customer Service</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/shipping-returns" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/size-guide" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Size Guide
              </Link>
              <Link href="/faq" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <a href="tel:+923001234567" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                  +92 300 123 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <a href="mailto:info@royalleather.com" className="font-sans text-sm text-text-grey hover:text-gold transition-colors">
                  info@royalleather.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <p className="font-sans text-sm text-text-grey">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs sm:text-sm text-text-grey text-center sm:text-left">
              © {new Date().getFullYear()} Royal Leather. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="#" className="font-sans text-xs sm:text-sm text-text-grey hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="font-sans text-xs sm:text-sm text-text-grey hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

