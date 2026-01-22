'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Hong Yan AB
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary transition">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden mt-4 pb-4">
            <Link href="#services" className="block py-2 text-gray-700 hover:text-primary transition">
              Services
            </Link>
            <Link href="#about" className="block py-2 text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}