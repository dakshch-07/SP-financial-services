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
  { name: "Gallery", href: "/gallery" },
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
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-cream-200"
            : "bg-gradient-to-b from-[#FDF9EE]/95 via-[#FCF9EE]/70 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* 1. Left: SP Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo variant="dark" size="md" />
            </div>

            {/* 2. Center: Desktop Navigation Links (Strictly Aligned & Spaced) */}
            <nav className="hidden xl:flex items-center justify-center gap-4 lg:gap-5 flex-1 px-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-[0.08em] font-bold py-1.5 transition-colors duration-200 flex items-center justify-center whitespace-nowrap ${
                      isActive ? "text-gold-600" : "text-forest-800 hover:text-gold-500"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Action Buttons (Equal Height & Vertically Centered) */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
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
                className="w-9 h-9 rounded-full bg-forest-900/10 flex items-center justify-center text-forest-950 hover:text-gold-600 transition-colors focus:outline-none"
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
            className="fixed inset-0 z-40 bg-[#FCF9EE]/95 backdrop-blur-xl xl:hidden flex flex-col justify-between pt-[5.5rem] pb-6 px-6 text-forest-950 overflow-y-auto"
          >
            <div className="flex flex-col space-y-2.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold mb-1 opacity-80">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-serif text-[1.35rem] font-medium tracking-wide py-1.5 ${
                        isActive ? "text-gold-600 pl-3 border-l-[2.5px] border-gold-500" : "text-forest-700 hover:text-gold-600 pl-1"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-5 border-t border-cream-300 space-y-3.5 mt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#DFBE5B] via-[#D4AF37] to-[#C5A03A] text-forest-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold text-center block active:scale-[0.98] transition-transform"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-0.5">
                <a
                  href={`tel:${BUSINESS_INFO.contact.primaryPhone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-cream-200 text-forest-900 text-[11px] font-semibold hover:bg-cream-100 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-cream-200 text-forest-900 text-[11px] font-semibold hover:bg-cream-100 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-[9.5px] text-center text-gray-400/80 uppercase tracking-widest pt-1">
                Sayba Palace, Kurla (W), Mumbai
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
