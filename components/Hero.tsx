import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[600px] py-12 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatsApp Image 2025-12-31 at 12.21.20 AM.jpeg"
          alt="Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black/85 via-dark-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[500px]">
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-6 pl-2 sm:pl-4 pt-8 lg:pt-0">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium Custom<br />
              Leather Shoes
            </h1>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold italic">
              Made in Pakistan
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-300 font-light">
              Handcrafted Perfection for the Modern Gentemna.
            </p>
            <a
              href="#"
              className="inline-block gold-btn rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-sans text-sm sm:text-base font-semibold"
            >
              Shop Collection
            </a>
          </div>

          {/* Right Side - Empty space for image visibility */}
          <div className="relative lg:flex lg:justify-end">
            <div className="relative w-full h-[300px] lg:h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

