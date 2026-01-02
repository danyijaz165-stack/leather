'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What materials are used in your shoes?',
    answer: 'We use 100% genuine leather for all our shoes. Our leather is sourced from premium suppliers and undergoes strict quality checks. We also use high-quality soles, linings, and hardware to ensure durability and comfort.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days nationwide. Express shipping (2-3 business days) is available in select cities. Custom orders may take 7-14 business days to process before shipping.',
  },
  {
    question: 'Do you offer custom sizing?',
    answer: 'Yes! We offer custom sizing for the perfect fit. Contact us via WhatsApp with your foot measurements, and we\'ll create a pair tailored specifically for you. Custom orders take 7-14 business days to complete.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy from the date of delivery. Items must be unworn, in original packaging, with all tags attached. Custom-made shoes cannot be returned unless there\'s a manufacturing defect.',
  },
  {
    question: 'How do I care for my leather shoes?',
    answer: 'Clean your shoes regularly with a soft brush or damp cloth. Use leather conditioner monthly to keep the leather supple. Store them in a cool, dry place with shoe trees to maintain their shape. Avoid wearing them in heavy rain.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD) nationwide. You can also pay via bank transfer or mobile banking. Payment details will be provided during checkout.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes! Once your order is shipped, you\'ll receive a tracking number via SMS or WhatsApp. You can use this to track your package in real-time.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within Pakistan. However, we\'re working on expanding our shipping options. Contact us for special international orders.',
  },
  {
    question: 'What if my shoes don\'t fit?',
    answer: 'We offer size exchanges within 7 days of delivery at no additional cost. Simply contact us via WhatsApp, and we\'ll arrange a pickup and send the correct size.',
  },
  {
    question: 'Are your shoes suitable for formal occasions?',
    answer: 'Absolutely! Our shoes are designed for formal and business occasions. They\'re perfect for weddings, business meetings, and other formal events. The classic designs ensure they never go out of style.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-gold" />
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="font-sans text-base sm:text-lg text-text-grey max-w-2xl mx-auto">
              Find answers to common questions
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card-bg border border-card-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-dark-charcoal transition-colors"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gold flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-300 mb-6">
              Can't find what you're looking for? Contact us directly via WhatsApp and we'll be happy to help!
            </p>
            <a
              href="https://wa.me/923149339180?text=Hello!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

