"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`container-luxury transition-all duration-500 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-between items-center text-xs tracking-widest uppercase text-muted-foreground border-b border-border/30 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-primary" />
            <span>+234 812 345 6789</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>Lagos, Nigeria</span>
            <span className="text-primary">•</span>
            <span>24/7 Availability</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-luxury">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/lyxvara-logo-white.png"
              alt="Lyxvara Concierge Logo"
              className="w-36 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="luxury"
              size="luxury"
              className="hidden md:inline-flex"
            >
              Book Consultation
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-18 bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-luxury py-8 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-display text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <Button variant="luxury" size="luxury" className="mt-4 w-full">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
