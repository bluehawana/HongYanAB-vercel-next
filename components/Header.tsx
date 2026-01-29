'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: isHomePage ? '#services' : '/#services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: isHomePage ? '#about' : '/#about', label: 'About' },
    { href: isHomePage ? '#contact' : '/#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            {/* Logo Mark */}
            <div className={`relative w-10 h-10 rounded-xl overflow-hidden transition-all duration-300 ${
              isScrolled ? 'bg-gradient-to-br from-primary to-primary-dark' : 'bg-gradient-to-br from-primary to-primary-dark'
            }`}>
              <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-bold text-lg">
                HY
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className={`font-heading font-semibold text-lg tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-secondary' : 'text-secondary'
              }`}>
                Hong Yan AB
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-secondary-400' : 'text-secondary-400'
              }`}>
                IT Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-secondary-600 hover:text-secondary hover:bg-secondary-50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#contact"
              className="btn-primary"
            >
              <span>Get Started</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-5 h-0.5 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 w-5 h-0.5 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`absolute left-0 w-5 h-0.5 bg-secondary transition-all duration-300 ${
                  isMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
            isMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-large p-4 border border-secondary-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-primary-50 text-primary'
                      : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-secondary-100">
              <a
                href="/#contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
