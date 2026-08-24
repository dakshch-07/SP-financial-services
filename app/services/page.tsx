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
  Coins,
  Info,
  ChevronRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PrimaryButton } from "@/components/Buttons";
import { PageHero } from "@/components/PageHero";
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
      {/* High-Contrast Page Hero with Background Image */}
      <PageHero
        title="Insurance & Financial Advisory"
        subtitle="A comprehensive spectrum of life, health, general insurance, NJ Mutual Funds, and loan advisory engineered to protect and multiply your family's wealth."
        breadcrumb="Services"
        bgImage="/images/hero-bg-2.jpg"
      />

      {/* Core Services Grid */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Structured Offerings
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Our Core Financial Solutions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white rounded-3xl p-7 shadow-card border border-cream-300 flex flex-col justify-between hover:shadow-card-hover hover:border-gold-400/40 transition-all duration-300 group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:scale-110 ${service.iconColor}`}
                >
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800 mb-1 block">
                  {service.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2.5 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 border-t border-cream-200 pt-4 mb-5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-600 transition-colors pt-3 border-t border-cream-200"
              >
                <span>Inquire About This Plan</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Asset Allocation Framework */}
      <SectionWrapper className="bg-white border-y border-cream-300">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Strategic Planning
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Interactive Asset Allocation Framework
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="fluid-body text-gray-600 mt-3">
            Understand how different portfolio risk tiers balance capital protection, returns, and
            tax efficiency.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-cream-200 border border-cream-300">
            {ASSET_ALLOCATION_TIERS.map((tier) => {
              const isActive = activeTabId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTabId(tier.id)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors z-10 ${
                    isActive ? "text-forest-900" : "text-gray-600 hover:text-forest-900"
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

        {/* Panel Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-cream-50 rounded-3xl p-6 sm:p-10 shadow-card border border-cream-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-cream-300">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Expected Return Range
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mt-1">
                    {currentAllocation.returnRange}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                    {currentAllocation.returnLabel}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cream-300 md:min-w-[260px]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Tax Treatment:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-forest-900 mb-3">
                    {currentAllocation.taxStatus}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Capital Guarantee:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-forest-900">
                    {currentAllocation.capitalProtection}
                  </div>
                </div>
              </div>

              {/* Risk Meter */}
              <div className="py-6 border-b border-cream-300">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  <span>Risk Spectrum</span>
                  <span className="text-forest-900 font-bold">{currentAllocation.riskLevel}</span>
                </div>
                <div className="w-full h-3.5 bg-cream-200 rounded-full overflow-hidden p-0.5 border border-cream-300">
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

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 mb-2">
                    Portfolio Profile
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {currentAllocation.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900 mb-2">
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

              <div className="mt-6 p-3.5 rounded-xl bg-forest-50 border border-forest-200 flex items-start gap-2.5 text-[11px] text-forest-900">
                <Info className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Return ranges and parameters are for educational purposes.
                  Consult Sachin Pandit for personalized portfolio structuring based on your exact
                  cash flows.
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </>
  );
}
