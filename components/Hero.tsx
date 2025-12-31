import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] py-8 sm:py-12 lg:py-16 overflow-hidden">
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
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Left Side - Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 pt-4 sm:pt-8 lg:pt-0">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Premium Custom<br />
              Leather Shoes
            </h1>
            <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold italic">
              Made in Pakistan
            </p>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-gray-300 font-light max-w-md">
              Handcrafted Perfection for the Modern Gentemna.
            </p>
            <a
              href="#"
              className="inline-block gold-btn rounded-lg px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 font-sans text-xs sm:text-sm lg:text-base font-semibold"
            >
              Shop Collection
            </a>
          </div>

          {/* Right Side - Empty space for image visibility */}
          <div className="hidden lg:block relative lg:flex lg:justify-end">
            <div className="relative w-full h-[300px] lg:h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

