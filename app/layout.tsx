import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROYA LLEATHER - Premium Custom Leather Shoes Made in Pakistan',
  description: 'Handcrafted premium leather shoes made in Pakistan. Custom fit and design with cash on delivery nationwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

