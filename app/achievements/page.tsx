"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Users,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton } from "@/components/Buttons";
import { ImageLightbox } from "@/components/ImageLightbox";
import { cardHoverVariants, slideInLeft } from "@/lib/motion-variants";
import {
  AWARDS_TIMELINE,
  AWARD_GALLERY_PHOTOS,
} from "@/lib/data";

export default function AchievementsPage() {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[40vh] bg-gradient-to-b from-forest-950 via-forest-900 to-navy-950 text-white flex items-center justify-center pt-32 pb-16 overflow-hidden dark-mesh-pattern">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Achievements</span>
          </div>

          <h1 className="font-serif fluid-h1 font-bold text-white tracking-tight mb-4">
            Awards &amp; Milestones
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            &ldquo;Our success is solely due to the trust our clients have placed in us.&rdquo;
          </p>
        </div>
      </section>

      {/* Headline Stat Band */}
      <section className="bg-forest-950 text-white py-12 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-forest-800 pb-8 lg:pb-0 lg:pr-8">
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

            <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-800">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={16} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  Years Trust
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-800">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={6} suffix="x" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  MDRT Winner
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-800">
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
                    {item.highlight ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6 text-gold-600" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          item.highlight ? "bg-white/20 text-gold-300" : "bg-cream-200 text-forest-900"
                        }`}
                      >
                        {item.year}
                      </span>
                      <span className={`text-xs font-semibold ${item.highlight ? "text-gray-300" : "text-gray-500"}`}>
                        {item.organization}
                      </span>
                    </div>

                    <h3 className={`font-serif text-lg sm:text-xl font-bold ${item.highlight ? "text-white" : "text-forest-900"}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${item.highlight ? "text-gray-200" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.trophyImage && (
                  <div className="relative w-16 h-20 flex-shrink-0 self-end sm:self-center hidden md:block">
                    <Image src={item.trophyImage} alt={item.title} fill className="object-contain" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Photo Gallery with Lightbox */}
      <SectionWrapper className="bg-white border-t border-cream-300">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Moments of Honor
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Convention &amp; Stage Felicitations (2018–2023)
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARD_GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.year}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              onClick={() => setSelectedImageIdx(idx)}
              className="bg-cream-50 rounded-3xl overflow-hidden shadow-card border border-cream-300 hover:border-gold-400/60 hover:shadow-card-hover transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-forest-950 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-400 text-forest-950 font-bold text-xs shadow-md">
                  {photo.year}
                </div>
                <div className="absolute inset-0 bg-forest-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-gold-400 text-forest-950 shadow-gold">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif font-bold text-base text-forest-900 group-hover:text-gold-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-cream-300 flex items-center justify-between text-[11px] font-semibold text-forest-800 uppercase tracking-wider">
                  <span>View Stage Photo</span>
                  <span>↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <ImageLightbox
        images={AWARD_GALLERY_PHOTOS}
        currentIndex={selectedImageIdx}
        onClose={() => setSelectedImageIdx(null)}
        onNavigate={(newIdx) => setSelectedImageIdx(newIdx)}
      />
    </>
  );
}
