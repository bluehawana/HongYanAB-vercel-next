import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}