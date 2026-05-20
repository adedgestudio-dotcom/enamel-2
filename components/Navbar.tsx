"use client";

import { useState, useEffect } from "react";
import { client } from "@/config/client";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#booking", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gold-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-4a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
            </div>
            <div>
              <div
                className={`font-display font-bold text-sm sm:text-base lg:text-xl leading-tight ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                {client.name}
              </div>
              <div
                className={`text-[10px] sm:text-xs lg:text-sm ${
                  scrolled ? "text-navy-600" : "text-white/80"
                }`}
              >
                Dental Clinic
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold-600 ${
                  scrolled ? "text-navy-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl
                       hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Actions - Call button and Menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Call button - visible only when NOT scrolled and menu is closed */}
            {!scrolled && !mobileMenuOpen && (
              <a
                href={`tel:${client.phone}`}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/20 transition-all"
                aria-label="Call now"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl border border-gray-100 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-navy-700 font-medium hover:bg-navy-50 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-4">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl
                         hover:bg-navy-800 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
