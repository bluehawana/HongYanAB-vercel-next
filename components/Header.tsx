'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  const navLinks = [
    { href: isHomePage ? '#services' : '/#services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: isHomePage ? '#about' : '/#about', label: 'About' },
    { href: isHomePage ? '#contact' : '/#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Hong Yan AB
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-gray-700 hover:text-primary transition ${
                  pathname === link.href ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-3 text-gray-700 hover:text-primary transition ${
                  pathname === link.href ? 'text-primary font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="block mt-4 bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}