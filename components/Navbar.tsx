"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS_INFO } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Calculators", href: "/#calculator-section" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
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
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-forest-950/95 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-forest-800/80"
            : "bg-gradient-to-b from-forest-950/95 via-forest-950/60 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* 1. Left: SP Logo */}
            <div className="flex items-center">
              <Logo variant="light" size="md" />
            </div>

            {/* 2. Center: Desktop Navigation Links (Strictly Aligned & Spaced) */}
            <nav className="hidden xl:flex items-center justify-center gap-7 lg:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-[0.16em] font-bold py-1.5 transition-colors duration-200 flex items-center justify-center ${
                      isActive ? "text-gold-400" : "text-gray-200 hover:text-gold-300"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Action Buttons (Equal Height & Vertically Centered) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="w-10 h-10 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-white flex items-center justify-center border border-emerald-500/30 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="h-10 px-5 rounded-full bg-gradient-to-r from-[#DFBE5B] via-[#D4AF37] to-[#C5A03A] text-forest-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Controls */}
            <div className="flex items-center gap-2.5 xl:hidden">
              <a
                href={BUSINESS_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-800/80 flex items-center justify-center text-white border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-gold-400 transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-xl xl:hidden flex flex-col justify-between pt-24 pb-8 px-6 text-white overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 pt-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-serif text-xl sm:text-2xl font-medium tracking-wide py-1.5 ${
                        isActive ? "text-gold-400 pl-2 border-l-2 border-gold-400" : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-forest-800 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#DFBE5B] via-[#D4AF37] to-[#C5A03A] text-forest-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold text-center block"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-1">
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

              <p className="text-[11px] text-center text-gray-400">
                201/202 Sayba Palace, Kurla (W), Mumbai - 400070
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
