/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#0B0B0B',
        'dark-charcoal': '#111111',
        'dark-grey': '#1A1A1A',
        'feature-strip': '#111111',
        'card-bg': '#141414',
        'card-border': '#2a2a2a',
        'gold': '#C9A24D',
        'gold-bright': '#D4AF37',
        'gold-dark': '#B8962E',
        'gold-darker': '#B08A3E',
        'off-white': '#EAEAEA',
        'text-grey': '#BFBFBF',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at right, #1a1a1a 0%, #0b0b0b 60%)',
        'gold-gradient': 'linear-gradient(135deg, #E6C67A 0%, #C9A24D 45%, #B8892E 100%)',
      },
      boxShadow: {
        'gold-btn': '0 8px 25px rgba(201,162,77,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
      },
    },
  },
  plugins: [],
}

