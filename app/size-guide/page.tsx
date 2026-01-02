'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Ruler } from 'lucide-react'

export default function SizeGuidePage() {
  const sizeChart = [
    { uk: '7', us: '8', eu: '41', cm: '25.5' },
    { uk: '8', us: '9', eu: '42', cm: '26.5' },
    { uk: '9', us: '10', eu: '43', cm: '27.5' },
    { uk: '10', us: '11', eu: '44', cm: '28.5' },
    { uk: '11', us: '12', eu: '45', cm: '29.5' },
    { uk: '12', us: '13', eu: '46', cm: '30.5' },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full bg-dark-black py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Ruler className="h-8 w-8 sm:h-10 sm:w-10 text-gold" />
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Size Guide
              </h1>
            </div>
            <p className="font-sans text-base sm:text-lg text-text-grey max-w-2xl mx-auto">
              Find your perfect fit
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* How to Measure */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                How to Measure Your Foot
              </h2>
              <div className="space-y-4 font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Step 1: Prepare</h3>
                  <p>Stand on a flat surface with your foot on a piece of paper. Make sure you're wearing the type of socks you'll wear with the shoes.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Step 2: Trace</h3>
                  <p>Trace the outline of your foot with a pencil, keeping it perpendicular to the paper.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Step 3: Measure</h3>
                  <p>Measure the length from the heel to the longest toe in centimeters. Use the larger measurement if your feet are different sizes.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Step 4: Find Your Size</h3>
                  <p>Refer to our size chart below to find your perfect fit.</p>
                </div>
              </div>
            </div>

            {/* Size Chart */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                Size Conversion Chart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left py-3 px-4 font-serif font-bold text-white">UK Size</th>
                      <th className="text-left py-3 px-4 font-serif font-bold text-white">US Size</th>
                      <th className="text-left py-3 px-4 font-serif font-bold text-white">EU Size</th>
                      <th className="text-left py-3 px-4 font-serif font-bold text-white">Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.map((size, index) => (
                      <tr key={index} className="border-b border-card-border hover:bg-dark-charcoal transition-colors">
                        <td className="py-3 px-4 font-sans text-gray-300">{size.uk}</td>
                        <td className="py-3 px-4 font-sans text-gray-300">{size.us}</td>
                        <td className="py-3 px-4 font-sans text-gray-300">{size.eu}</td>
                        <td className="py-3 px-4 font-sans text-gray-300">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-card-bg border border-card-border rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                Fitting Tips
              </h2>
              <ul className="space-y-3 font-sans text-base sm:text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Measure your feet in the afternoon, as feet tend to swell slightly during the day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Leave about 1cm (0.4 inches) of space between your longest toe and the end of the shoe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>If you're between sizes, we recommend going up a half size for comfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>For custom sizing, contact us via WhatsApp and we'll create the perfect fit for you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>Our leather shoes will mold to your feet over time, so a snug fit initially is normal.</span>
                </li>
              </ul>
            </div>

            {/* Custom Sizing */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-lg p-6 sm:p-8 lg:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Custom Sizing?
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                We offer custom sizing for the perfect fit. Contact us via WhatsApp with your measurements, and we'll create a pair tailored specifically for you.
              </p>
              <a
                href="https://wa.me/923149339180?text=Hello!%20I%20need%20custom%20sizing%20for%20my%20shoes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block gold-btn rounded-lg px-6 py-3 font-sans text-base font-semibold"
              >
                Contact for Custom Sizing
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

