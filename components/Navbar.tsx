"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { BUSINESS_INFO } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Achievements", href: "/achievements" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B2A55]/95 backdrop-blur-md py-3 shadow-lg shadow-black/10 border-b border-white/10"
            : "bg-gradient-to-b from-[#0B2A55]/80 via-[#0B2A55]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg
                  viewBox="0 0 120 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <path
                    d="M40 32 L46 22 L60 30 L74 22 L80 32 Z"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#D4AF37"
                  />
                  <circle cx="46" cy="20" r="2" fill="#D4AF37" />
                  <circle cx="60" cy="17" r="2.5" fill="#D4AF37" />
                  <circle cx="74" cy="20" r="2" fill="#D4AF37" />
                  <path
                    d="M60 36 C78 36 94 40 98 48 C98 82 82 108 60 120 C38 108 22 82 22 48 C26 40 42 36 60 36 Z"
                    stroke="#D4AF37"
                    strokeWidth="3.5"
                    fill="#0B2A55"
                  />
                  <text
                    x="60"
                    y="84"
                    textAnchor="middle"
                    fontFamily="Playfair Display, serif"
                    fontWeight="bold"
                    fontSize="32"
                    fill="#FFFFFF"
                  >
                    SP
                  </text>
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-wider text-white leading-tight">
                  SP FINANCIAL
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-gold-400 font-semibold uppercase">
                  SERVICES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-1 ${
                      isActive ? "text-gold-400" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button & Contact Quick Link (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={BUSINESS_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="text-white/80 hover:text-emerald-400 p-2 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <PrimaryButton href="/contact" size="sm" variant="gold" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Book Consultation
              </PrimaryButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.contact.primaryPhone}`}
                className="p-2 text-gold-400 hover:text-white transition-colors"
                aria-label="Call SP Financial Services"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-gold-400 transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 text-white overflow-y-auto"
          >
            <div className="flex flex-col space-y-5 pt-4">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-serif text-2xl font-medium tracking-wide py-1 ${
                        isActive ? "text-gold-400 pl-2 border-l-2 border-gold-400" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Buttons on Mobile */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <PrimaryButton
                href="/contact"
                size="md"
                variant="gold"
                className="w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Consultation
              </PrimaryButton>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.contact.primaryPhone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Sachin</span>
                </a>
                <a
                  href={BUSINESS_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-600/40 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-gray-400 pt-2">
                Sayba Palace, Kurla (W), Mumbai - 400070
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
