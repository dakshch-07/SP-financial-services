"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  TrendingUp,
  GraduationCap,
  Building2,
  HeartHandshake,
  ReceiptText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Info,
  ChevronRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PrimaryButton } from "@/components/Buttons";
import { cardHoverVariants } from "@/lib/motion-variants";
import {
  CORE_SERVICES,
  ALL_COVERAGE_TYPES,
  ASSET_ALLOCATION_TIERS,
  BUSINESS_INFO,
} from "@/lib/data";

export default function ServicesPage() {
  const [activeTabId, setActiveTabId] = useState("safe");
  const currentAllocation =
    ASSET_ALLOCATION_TIERS.find((t) => t.id === activeTabId) || ASSET_ALLOCATION_TIERS[0];

  const serviceIcons = {
    "retirement-solutions": <Shield className="w-6 h-6" />,
    "wealth-creation": <TrendingUp className="w-6 h-6" />,
    "education-plans": <GraduationCap className="w-6 h-6" />,
    "virtual-property": <Building2 className="w-6 h-6" />,
    "family-protection": <HeartHandshake className="w-6 h-6" />,
    "tax-free-asset": <ReceiptText className="w-6 h-6" />,
  };

  return (
    <>
      {/* =========================================================================
          1. PAGE HERO (~50vh)
         ========================================================================= */}
      <section className="relative min-h-[42vh] bg-gradient-to-b from-[#0B2A55] via-[#0E356A] to-[#123B7A] text-white flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Insurance &amp; Financial Advisory
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            A comprehensive spectrum of life, health, general insurance and mutual fund plans
            engineered to protect and multiply your family&apos;s assets.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. CORE SERVICES GRID (6 Cards)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Structured Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Our Core Financial Solutions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Every plan is meticulously customized to your current age, dependents, tax bracket,
            and long-term milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white rounded-3xl p-7 shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover hover:border-gold-400/40 transition-all duration-300 group"
            >
              <div>
                {/* Icon chip with rotate & scale interaction */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.iconColor}`}
                >
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 mb-1 block">
                  {service.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key feature list */}
                <ul className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-xs text-gray-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Action Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors pt-2 border-t border-gray-100"
              >
                <span>Inquire About This Plan</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          3. FULL COVERAGE LIST (Pill Tag Cloud)
         ========================================================================= */}
      <section className="bg-navy-900 text-white py-16 border-y border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-2 block">
            Complete Insurance Spectrum
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
            Comprehensive Coverage For Every Life Scenario
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-10">
            From individual health and term covers to commercial shipping, marine, and corporate
            workmen&apos;s compensation policies.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {ALL_COVERAGE_TYPES.map((cov) => (
              <motion.div
                key={cov.name}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-gold-400/20 hover:border-gold-400/60 hover:text-gold-300 transition-all cursor-default"
              >
                {cov.name}
              </motion.div>
            ))}
            <div className="px-4 py-2 rounded-full bg-gold-400 text-navy-900 text-xs sm:text-sm font-bold shadow-gold">
              + Custom Corporate Policies
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ASSET ALLOCATION (Interactive Tabbed Section)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Strategic Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Interactive Asset Allocation Framework
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Understand how different portfolio risk tiers balance capital protection, returns, and
            tax efficiency.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-200/80 border border-gray-300">
            {ASSET_ALLOCATION_TIERS.map((tier) => {
              const isActive = activeTabId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTabId(tier.id)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 z-10 ${
                    isActive ? "text-navy-900" : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="allocationTabPill"
                      className="absolute inset-0 bg-white rounded-xl shadow-md z-[-1] border border-gold-400/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tier.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content (Crossfade + slight-slide) */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-gray-100"
            >
              {/* Header with Return Range */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Expected Return Range
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mt-1">
                    {currentAllocation.returnRange}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                    {currentAllocation.returnLabel}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-warmBg border border-gray-200 md:min-w-[260px]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Tax Treatment:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy-900 mb-3">
                    {currentAllocation.taxStatus}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Capital Guarantee:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy-900">
                    {currentAllocation.capitalProtection}
                  </div>
                </div>
              </div>

              {/* Visual Risk-Meter Bar */}
              <div className="py-6 border-b border-gray-100">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  <span>Risk Spectrum</span>
                  <span className="text-navy-900 font-bold">{currentAllocation.riskLevel}</span>
                </div>
                <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: currentAllocation.riskMeterWidth }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`h-full rounded-full ${currentAllocation.riskColor}`}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium">
                  <span>0% (Lowest Risk)</span>
                  <span>50% (Balanced)</span>
                  <span>100% (High Volatility)</span>
                </div>
              </div>

              {/* Description & Recommended Instruments */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-2">
                    Portfolio Profile
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {currentAllocation.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-navy-900 mb-2">
                    Typical Instruments
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {currentAllocation.instruments.map((inst) => (
                      <li key={inst} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5 text-[11px] text-blue-900">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Return ranges and parameters are for educational &amp;
                  illustration purposes. Consult Sachin Pandit for personalized risk-profile
                  matching based on your actual income and time horizon.
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          5. INVESTMENT PARTNERS
         ========================================================================= */}
      <section className="bg-white py-14 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-6 block">
            Authorized Investment &amp; Insurance Partners
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {BUSINESS_INFO.insurancePartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full max-w-[220px] h-20 bg-warmBg border border-gray-200/80 rounded-2xl flex items-center justify-center p-4 hover:border-gold-400/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative w-full h-full">
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
      </section>

      {/* =========================================================================
          6. CTA BAND
         ========================================================================= */}
      <section className="bg-gradient-to-r from-[#0B2A55] to-[#123B7A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Expert Advice on Policy Selection?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-xl mx-auto">
            Get an objective, no-obligation audit of your existing life and mediclaim policies
            today.
          </p>
          <PrimaryButton
            href="/contact"
            size="lg"
            variant="gold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Free Policy Audit
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
