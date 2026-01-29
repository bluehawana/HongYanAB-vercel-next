import type { Metadata } from 'next'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import './globals.css'

// Premium font pairing: Outfit for headings, Source Sans 3 for body
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hong Yan AB - IT Solutions & Full-Stack Development | Gothenburg, Sweden',
  description: 'Hong Yan AB is a Swedish IT consulting company specializing in full-stack development, cloud architecture, and enterprise solutions based in Gothenburg.',
  keywords: ['IT consulting', 'full-stack development', 'cloud architecture', 'Sweden', 'Gothenburg', 'enterprise solutions', 'Java Spring Boot', 'React', 'Next.js'],
  openGraph: {
    title: 'Hong Yan AB - IT Solutions & Full-Stack Development',
    description: 'Swedish IT consulting company specializing in full-stack development, cloud architecture, and enterprise solutions',
    url: 'https://hongyanab.com',
    siteName: 'Hong Yan AB',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}