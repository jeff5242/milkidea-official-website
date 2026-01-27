"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "關於我們" },
    { href: "#services", label: "服務項目" },
    { href: "#portfolio", label: "作品案例" },
    { href: "#golfriend", label: "旗艦產品" },
    { href: "#contact", label: "聯絡我們" },
  ]

  return (
    <>
      {/* Mobile Top CTA Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-center gap-3 py-2 px-4">
          <a
            href="tel:+886936923912"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            撥打電話
          </a>
          <span className="text-border">|</span>
          <a
            href="https://lin.ee/sERO3sK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#06C755] hover:text-[#05b34c] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.3 10.5c0-4.6-4.5-8.3-10-8.3-5.5 0-10 3.8-10 8.3 0 2.4 1 4.6 2.6 6.1-.3 1.9-1 3.5-1.1 3.6-.1.3.2.6.5.4 0 0 2.1-1.3 4.2-2.5 1.1.3 2.4.5 3.7.5 5.5 0 10-3.7 10-8.1zm-13.6 2.9h-1.3v-3.7h1.3v3.7zm2.4 0h-1.3v-3.7h1.3v3.7zm2.5 0h-1.3v-2.1h-.9v-1.6h3v1.6h-.9v2.1zm2.4 0h-1.1l2.4-3.7h-2.1v-1.1h3.6l-2.4 3.7h2.1v1.1z" />
            </svg>
            加入好友
          </a>
        </div>
      </div>

      <header className="fixed top-0 md:top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" style={{ top: 'var(--mobile-header-offset, 0)' }}>
        <style jsx>{`
          @media (max-width: 767px) {
            header {
              top: 40px !important;
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-milkidea.png"
                alt="牛奶創意 Milkidea"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-user/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild variant="outline" size="sm">
                <a href="tel:+886936923912" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  撥打電話
                </a>
              </Button>
              <Button asChild className="bg-[#06C755] hover:bg-[#05b34c] text-white" size="sm">
                <a href="https://lin.ee/sERO3sK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {/* LINE Icon SVG */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.3 10.5c0-4.6-4.5-8.3-10-8.3-5.5 0-10 3.8-10 8.3 0 2.4 1 4.6 2.6 6.1-.3 1.9-1 3.5-1.1 3.6-.1.3.2.6.5.4 0 0 2.1-1.3 4.2-2.5 1.1.3 2.4.5 3.7.5 5.5 0 10-3.7 10-8.1zm-13.6 2.9h-1.3v-3.7h1.3v3.7zm2.4 0h-1.3v-3.7h1.3v3.7zm2.5 0h-1.3v-2.1h-.9v-1.6h3v1.6h-.9v2.1zm2.4 0h-1.1l2.4-3.7h-2.1v-1.1h3.6l-2.4 3.7h2.1v1.1z" />
                  </svg>
                  加入好友
                </a>
              </Button>
              <Button asChild size="sm">
                <Link href="#contact">立即諮詢</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-2">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="tel:+886912345678">
                      <Phone className="w-4 h-4 mr-2" />
                      撥打電話
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-[#06C755] hover:bg-[#05b34c] text-white">
                    <a href="https://lin.ee/sERO3sK" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M20.3 10.5c0-4.6-4.5-8.3-10-8.3-5.5 0-10 3.8-10 8.3 0 2.4 1 4.6 2.6 6.1-.3 1.9-1 3.5-1.1 3.6-.1.3.2.6.5.4 0 0 2.1-1.3 4.2-2.5 1.1.3 2.4.5 3.7.5 5.5 0 10-3.7 10-8.1zm-13.6 2.9h-1.3v-3.7h1.3v3.7zm2.4 0h-1.3v-3.7h1.3v3.7zm2.5 0h-1.3v-2.1h-.9v-1.6h3v1.6h-.9v2.1zm2.4 0h-1.1l2.4-3.7h-2.1v-1.1h3.6l-2.4 3.7h2.1v1.1z" />
                      </svg>
                      加入好友
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start">
                    <Link href="#contact">立即諮詢</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
