"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Star,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PrimaryButton } from "@/components/Buttons";
import { ReelsShowcase } from "@/components/ReelsShowcase";
import { AWARDS_TIMELINE, BUSINESS_INFO } from "@/lib/data";
import { slideInLeft, staggerContainer } from "@/lib/motion-variants";

export default function AchievementsPage() {
  return (
    <>
      {/* High-Contrast Luxury Page Hero */}
      <PageHero
        title="Awards & Milestones"
        subtitle="6 consecutive years of MDRT USA international recognition and 65+ industry trophies earned through client trust."
        breadcrumb="Achievements"
      />

      {/* Headline Stat Band */}
      <section className="bg-forest-950 text-white py-12 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                1,500+
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mt-1">
                Protected Clients
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                16+
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mt-1">
                Years of Mastery
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                6x
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mt-1">
                MDRT USA Winner
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                65+
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mt-1">
                Trophies &amp; Honors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MDRT Global Prestige Feature */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 text-gold-600 text-xs font-bold uppercase tracking-widest border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5" /> International Benchmark
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-forest-900">
              The MDRT USA Credential: Top Tier of Global Financial Professionals
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The <strong>Million Dollar Round Table (MDRT)</strong> is the premier international
              association of financial professionals, representing the top tier of financial
              advisors worldwide across 70+ countries.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Sachin Pandit has qualified for the prestigious MDRT USA honor for 6 consecutive years,
              demonstrating exceptional professional knowledge, strict ethical conduct, and
              outstanding client service in wealth management and insurance advisory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-forest-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Strict Global Code of Ethics</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-forest-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Client-First Fiduciary Commitment</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-forest-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Top Tier Production Volume</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-forest-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Continuous Industry Education</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-forest-950 text-white border border-gold-400/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-gold-400 text-forest-950 flex items-center justify-center font-bold text-2xl mb-6 shadow-gold">
                <Trophy className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400 block mb-1">
                Verified Global Accolade
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                6 Consecutive Years MDRT Qualifier
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Achieved by less than 1% of insurance advisors globally. Represents unwavering
                integrity, flawless claim assistance, and tailored solutions.
              </p>

              <div className="pt-4 border-t border-forest-800 flex items-center justify-between text-xs font-bold text-gold-300">
                <span>LIC of India &amp; NJ Wealth</span>
                <span>2018 – 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Awards Timeline */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Official Accolades
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Chronicle of Major Recognitions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {AWARDS_TIMELINE.map((item) => (
            <motion.div
              key={item.title}
              variants={slideInLeft}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                item.highlight
                  ? "bg-gradient-to-r from-forest-950 to-forest-900 text-white border-gold-400/50 shadow-lg"
                  : "bg-white text-forest-900 border-cream-300 shadow-sm hover:border-gold-400/40"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight
                        ? "bg-gold-400 text-forest-950 shadow-gold"
                        : "bg-cream-200 text-forest-900 border border-cream-300"
                    }`}
                  >
                    {item.highlight ? (
                      <Trophy className="w-6 h-6" />
                    ) : (
                      <Medal className="w-6 h-6 text-gold-600" />
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          item.highlight
                            ? "bg-white/20 text-gold-300"
                            : "bg-cream-200 text-forest-900"
                        }`}
                      >
                        {item.year}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          item.highlight ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {item.organization}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-lg sm:text-xl font-bold ${
                        item.highlight ? "text-white" : "text-forest-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                        item.highlight ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Video Reels & Knowledge Section */}
      <ReelsShowcase />
    </>
  );
}
