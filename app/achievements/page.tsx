"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Users,
  ShieldCheck,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton } from "@/components/Buttons";
import { ImageLightbox } from "@/components/ImageLightbox";
import { cardHoverVariants, slideInLeft } from "@/lib/motion-variants";
import {
  BUSINESS_INFO,
  AWARDS_TIMELINE,
  AWARD_GALLERY_PHOTOS,
} from "@/lib/data";

export default function AchievementsPage() {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  return (
    <>
      {/* =========================================================================
          1. PAGE HERO
         ========================================================================= */}
      <section className="relative min-h-[42vh] bg-gradient-to-b from-[#0B2A55] via-[#0E356A] to-[#123B7A] text-white flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Achievements</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Awards &amp; Milestones
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            &ldquo;Our success is solely due to the trust our clients have placed in us.&rdquo;
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. HEADLINE STAT BAND (1500+ Happy Clients)
         ========================================================================= */}
      <section className="bg-[#061833] text-white py-12 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Stat: 1500+ Clients (5 cols) */}
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" /> Core Milestone
              </div>
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
                <CountUp end={1500} suffix="+" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold-400 mt-1">
                Happy &amp; Protected Clients
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Families, business owners, NRIs, and institutions across Mumbai and India.
              </p>
            </div>

            {/* Supporting Stats (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={16} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  Years of Trust
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={6} suffix="x" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  MDRT USA Winner
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={65} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  Trophies Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AWARDS LIST (Vertical Timeline / Checklist Style)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Official Accolades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Chronicle of Major Recognitions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Verified awards conferred by the Life Insurance Corporation of India and international
            financial forums.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {AWARDS_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={slideInLeft}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                item.highlight
                  ? "bg-gradient-to-r from-[#0B2A55] to-[#123B7A] text-white border-gold-400/50 shadow-lg"
                  : "bg-white text-navy-900 border-gray-200 shadow-sm hover:border-gold-400/40"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight
                        ? "bg-gold-400 text-navy-900 shadow-gold"
                        : "bg-navy-50 text-navy-800 border border-navy-100"
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
                            : "bg-gray-100 text-gray-700"
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
                        item.highlight ? "text-white" : "text-navy-900"
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

                {item.trophyImage && (
                  <div className="relative w-16 h-20 flex-shrink-0 self-end sm:self-center hidden md:block">
                    <Image
                      src={item.trophyImage}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          4. PHOTO GALLERY (2018–2023 Convention Photos with Lightbox)
         ========================================================================= */}
      <SectionWrapper className="bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Moments of Honor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Convention &amp; Stage Felicitations (2018–2023)
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Click any photo to view in high-resolution stage presentation format.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARD_GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.year}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => setSelectedImageIdx(idx)}
              className="bg-warmBg rounded-3xl overflow-hidden shadow-card border border-gray-200 hover:border-gold-400/60 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-navy-900 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Year Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-400 text-navy-900 font-bold text-xs shadow-md">
                  {photo.year}
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-gold-400 text-navy-900 shadow-gold">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif font-bold text-base text-navy-900 group-hover:text-gold-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-semibold text-gold-700 uppercase tracking-wider">
                  <span>View Stage Photo</span>
                  <span>↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          5. CTA BAND
         ========================================================================= */}
      <section className="bg-gradient-to-r from-[#0B2A55] to-[#123B7A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner with an MDRT-Certified Advisor
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-xl mx-auto">
            Experience the peace of mind that comes from working with proven, recognized financial
            specialists.
          </p>
          <PrimaryButton
            href="/contact"
            size="lg"
            variant="gold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Consultation
          </PrimaryButton>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        images={AWARD_GALLERY_PHOTOS}
        currentIndex={selectedImageIdx}
        onClose={() => setSelectedImageIdx(null)}
        onNavigate={(newIdx) => setSelectedImageIdx(newIdx)}
      />
    </>
  );
}
