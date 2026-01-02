'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/923149339180?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-grey max-w-2xl mx-auto">
              Get in touch with us. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card-bg border border-card-border rounded-lg p-6">
                <h2 className="font-serif text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+923149339180" className="font-sans text-base text-gray-300 hover:text-gold transition-colors">
                        +92 314 933 9180
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:info@royalleather.com" className="font-sans text-base text-gray-300 hover:text-gold transition-colors">
                        info@royalleather.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="font-sans text-base text-gray-300">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaWhatsapp className="h-8 w-8 text-[#25D366]" />
                  <h3 className="font-serif text-xl font-bold text-white">Quick Contact</h3>
                </div>
                <p className="font-sans text-base text-gray-300 mb-4">
                  Chat with us directly on WhatsApp for instant support
                </p>
                <a
                  href="https://wa.me/923149339180?text=Hello!%20I%20would%20like%20to%20contact%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold w-full text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-white mb-2">
                    Email
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
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-white mb-2">
                    Phone
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
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-charcoal border border-card-border rounded-lg text-white placeholder-text-grey focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

