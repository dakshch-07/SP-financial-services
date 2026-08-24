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
  TrendingUp,
} from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-white border-t border-forest-800 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Badges Strip */}
        <div className="pb-12 mb-12 border-b border-forest-800/80">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-6">
            Authorized Investment, Insurance &amp; Loan Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
            {BUSINESS_INFO.insurancePartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full max-w-[210px] h-16 bg-forest-900/60 border border-forest-800 rounded-2xl flex items-center justify-center p-3 hover:border-gold-400/50 hover:bg-forest-900 transition-all duration-300 group"
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

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <Logo variant="light" size="md" />

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
              &quot;A Goal Without a Plan is Just a Wish.&quot; 16+ years of MDRT USA-certified
              wealth advisory, comprehensive insurance, SIP mutual funds, and loan advisory in
              Kurla West, Mumbai.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-[11px] font-semibold">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                6x MDRT USA Winner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-800 text-emerald-300 text-[11px] font-semibold border border-forest-700">
                <TrendingUp className="w-3.5 h-3.5" />
                1,500+ Happy Families
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links & Calculators */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" /> Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {[
                { name: "Home", href: "/" },
                { name: "Interactive SIP & Loan Calculator", href: "/#calculator-section" },
                { name: "Insurance & Mutual Fund Services", href: "/services" },
                { name: "About Sachin Pandit (MDRT)", href: "/about" },
                { name: "Awards & Honors (2018–2023)", href: "/achievements" },
                { name: "Verified Client Reviews", href: "/testimonials" },
                { name: "Contact & Consultation", href: "/contact" },
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

          {/* Column 3: Contact & Office Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" /> Office &amp; Contact
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
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
                      className="hover:text-gold-400 transition-colors font-medium"
                    >
                      Sachin: {BUSINESS_INFO.founders[0].phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.founders[1].phone}`}
                      className="hover:text-gold-400 transition-colors font-medium"
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

          {/* Column 4: Social & Local SEO */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" /> Official Channels
            </h4>
            <p className="text-xs text-gray-300">
              Connect with us on YouTube and Instagram for regular wealth planning updates, tax tips,
              and policy insights:
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-forest-900/80 border border-forest-800 hover:border-pink-500/50 text-xs text-gray-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>{BUSINESS_INFO.contact.instagramHandle}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-pink-400 transition-transform" />
              </a>

              <a
                href={BUSINESS_INFO.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-forest-900/80 border border-forest-800 hover:border-red-500/50 text-xs text-gray-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>{BUSINESS_INFO.contact.youtubeHandle}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-400 transition-transform" />
              </a>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="text-xs text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 underline underline-offset-4"
              >
                Schedule in-person appointment in Kurla <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} SP Financial Services. All rights reserved. MDRT &amp; LIC
            Authorized Advisor.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <span>Kurla West, Mumbai - 400070</span>
            <span>·</span>
            <span>LIC · HDFC ERGO · Star Health · NJ Wealth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
