"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  ExternalLink,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061833] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logo Strip */}
        <div className="pb-12 mb-12 border-b border-white/10">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-6">
            Authorized Investment & Insurance Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {BUSINESS_INFO.insurancePartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full max-w-[200px] h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-3 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <svg
                  viewBox="0 0 120 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M40 32 L46 22 L60 30 L74 22 L80 32 Z"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    fill="#D4AF37"
                  />
                  <path
                    d="M60 36 C78 36 94 40 98 48 C98 82 82 108 60 120 C38 108 22 82 22 48 C26 40 42 36 60 36 Z"
                    stroke="#D4AF37"
                    strokeWidth="3"
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
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wider text-white">
                  SP FINANCIAL
                </h3>
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-semibold">
                  SERVICES
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              &quot;A Goal Without a Plan is Just a Wish.&quot; Providing 16+ years of
              trusted, award-winning insurance and wealth advisory for families &
              businesses across Mumbai.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-medium">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                6x MDRT USA Award Winner
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {[
                { name: "Home", href: "/" },
                { name: "About Sachin Pandit", href: "/about" },
                { name: "Insurance & Advisory Services", href: "/services" },
                { name: "Awards & Achievements", href: "/achievements" },
                { name: "Client Testimonials", href: "/testimonials" },
                { name: "Book Free Consultation", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-400 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-gold-400/40 group-hover:text-gold-400 text-xs transition-colors">
                      ▸
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span> Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-gray-300">
                  {BUSINESS_INFO.contact.fullAddressDetails}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div className="text-xs">
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.founders[0].phone}`}
                      className="hover:text-gold-400 transition-colors"
                    >
                      Sachin: {BUSINESS_INFO.founders[0].phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.founders[1].phone}`}
                      className="hover:text-gold-400 transition-colors"
                    >
                      Rakhi: {BUSINESS_INFO.founders[1].phoneDisplay}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="text-xs hover:text-gold-400 transition-colors"
                >
                  {BUSINESS_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Consultation Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span> Connect With Us
            </h4>
            <p className="text-xs text-gray-300">
              Follow our official media channels for regular market insights, financial planning
              tips, and updates:
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-xs text-gray-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>{BUSINESS_INFO.contact.instagramHandle}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-pink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={BUSINESS_INFO.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-xs text-gray-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>{BUSINESS_INFO.contact.youtubeHandle}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 underline underline-offset-4"
              >
                Schedule an in-person meeting in Kurla <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} SP Financial Services. All rights reserved. MDRT & LIC
            Authorized Advisor.
          </p>
          <div className="flex items-center gap-6">
            <span>Kurla West, Mumbai, India</span>
            <span>·</span>
            <span>Privacy & Ethical Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
