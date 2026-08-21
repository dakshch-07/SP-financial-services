"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Medal,
  TrendingUp,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton } from "@/components/Buttons";
import { fadeUp, cardHoverVariants } from "@/lib/motion-variants";
import { BUSINESS_INFO, AWARDS_TIMELINE } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* =========================================================================
          1. PAGE HERO (~50vh)
         ========================================================================= */}
      <section className="relative min-h-[42vh] bg-gradient-to-b from-[#0B2A55] via-[#0E356A] to-[#123B7A] text-white flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About SP Financial Services
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            Over 16 years of dedicated wealth management, MDRT USA-certified standards, and
            unwavering commitment to our clients.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. FOUNDER PROFILE
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Photo in Rounded Frame with Gold Border (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-gold-400 via-white/40 to-navy-800 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-navy-900">
                <Image
                  src="/images/sachin-pandit.png"
                  alt="Sachin Pandit - Founder, SP Financial Services"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-navy-900/85 backdrop-blur-sm border border-gold-400/30">
                  <h3 className="font-serif text-lg font-bold text-white">Sachin Pandit</h3>
                  <p className="text-xs text-gold-300 font-semibold tracking-wider uppercase mt-0.5">
                    Founder &amp; Principal Financial Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Copy & Stat Chips (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Founder&apos;s Message
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-snug">
              &ldquo;Guiding Families Toward Financial Independence &amp; Peace of Mind.&rdquo;
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                I am <strong>Sachin Pandit</strong>, founder of SP Financial Services. Over the
                past 16 years, we have had the privilege of partnering with over 1,500
                individuals—from dynamic entrepreneurs and corporate executives to young salaried
                professionals, students, and retirees.
              </p>
              <p>
                Whether it is structuring a guaranteed lifelong pension for a dignified retirement,
                securing funds for your child&apos;s dream university and marriage without debt, or
                building robust shields against unforeseen health emergencies, our role is to make
                wealth creation simple, transparent, and completely stress-free.
              </p>
              <p>
                Together with <strong>Rakhi Pandit</strong> and our advisory team in Kurla (W),
                Mumbai, we combine deep domain expertise across LIC, health insurance, and mutual
                funds with genuine, human-first customer service.
              </p>
            </div>

            {/* Stat Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                  <CountUp end={1500} suffix="+" />
                </div>
                <div className="text-xs font-bold text-gold-600 uppercase tracking-wider mt-1">
                  Happy Clients
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                  <CountUp end={16} suffix="+ Years" />
                </div>
                <div className="text-xs font-bold text-gold-600 uppercase tracking-wider mt-1">
                  Industry Experience
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm col-span-2 sm:col-span-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                  <CountUp end={6} suffix=" Years" />
                </div>
                <div className="text-xs font-bold text-gold-600 uppercase tracking-wider mt-1">
                  MDRT USA Winner
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          3. MISSION STATEMENT (With Animated Gold Underline Sweep)
         ========================================================================= */}
      <section className="bg-navy-900 text-white py-16 sm:py-24 relative overflow-hidden border-y border-gold-400/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4 block">
            Our Guiding Mission
          </span>

          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed text-gray-100 italic">
            &ldquo;Our mission is to guide you in creating a concrete roadmap which can help you
            achieve your financial goals in a hassle-free manner.&rdquo;
          </blockquote>

          {/* SVG Animated Stroke Underline */}
          <div className="relative w-48 sm:w-64 h-3 mx-auto mt-8">
            <svg
              viewBox="0 0 240 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.path
                d="M2 6 C60 11 180 1 238 6"
                stroke="#D4AF37"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-gold-300 font-semibold tracking-widest uppercase mt-4">
            — Sachin Pandit &amp; Rakhi Pandit
          </p>
        </div>
      </section>

      {/* =========================================================================
          4. ACHIEVEMENTS HIGHLIGHT & POLAROID PHOTO GALLERY
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Industry Recognition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Key Honors &amp; Awards
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Our accolades reflect the trust of over 1,500 clients and 16+ years of disciplined,
            ethical advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Lead Achievement Card (MDRT USA) + Supporting Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Lead MDRT Card */}
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B2A55] to-[#123B7A] text-white border border-gold-400/40 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Trophy className="w-32 h-32 text-gold-400" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-400/30">
                <Award className="w-3.5 h-3.5 text-gold-400" /> Premier Global Honor
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Prestigious MDRT – USA Award Winner (Last 6 Consecutive Years)
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                The Million Dollar Round Table (MDRT) is the premier global association of financial
                professionals, recognizing the top 1% of insurance and financial advisors worldwide
                for ethical excellence, outstanding client service, and professional knowledge.
              </p>
            </motion.div>

            {/* Supporting Grid of Accolades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Double Shatakveer (2019)",
                  org: "LIC of India",
                  desc: "Surpassed 200+ insured lives in a single financial year.",
                },
                {
                  title: "Shatakveer Award (2018)",
                  org: "LIC of India",
                  desc: "Honored for excellence in client onboarding and trust.",
                },
                {
                  title: "Corporate Trophy (Last 6 Years)",
                  org: "LIC Corporate Division",
                  desc: "Consistent highest corporate advisory volume.",
                },
                {
                  title: "Champions Trophy (Last 3 Years)",
                  org: "LIC Division Honors",
                  desc: "Recognized for exemplary customer service and leadership.",
                },
              ].map((award) => (
                <div
                  key={award.title}
                  className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-gold-400/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Medal className="w-4 h-4 text-gold-500" />
                    <h4 className="font-serif font-bold text-sm text-navy-900">
                      {award.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block mb-1">
                    {award.org}
                  </span>
                  <p className="text-xs text-gray-500">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tilted Polaroid-Style Mini Gallery (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 pt-4">
            {/* Polaroid 1 */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              initial={{ rotate: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-3.5 rounded-2xl shadow-xl border border-gray-200 max-w-[280px] w-full text-center group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-navy-900 mb-3">
                <Image
                  src="/images/awards/trophy-mdrt.png"
                  alt="MDRT USA Trophy"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="font-serif font-bold text-xs text-navy-900">
                Official MDRT Trophy
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Million Dollar Round Table, USA
              </p>
            </motion.div>

            {/* Polaroid 2 */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              initial={{ rotate: 3 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-3.5 rounded-2xl shadow-xl border border-gray-200 max-w-[280px] w-full text-center group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-navy-900 mb-3">
                <Image
                  src="/images/awards/trophy-lic.png"
                  alt="LIC Excellence Trophy"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="font-serif font-bold text-xs text-navy-900">
                LIC Special Recognition
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Senior Division Mumbai Honors
              </p>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <PrimaryButton href="/achievements" variant="gold" size="md">
            View Complete Timeline &amp; Convention Photos
          </PrimaryButton>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          5. PARTNER LOGOS STRIP
         ========================================================================= */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-6 block">
            Our Investment Partners
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {BUSINESS_INFO.insurancePartners.map((partner) => (
              <div
                key={partner.id}
                className="w-full max-w-[220px] h-20 bg-warmBg border border-gray-200/80 rounded-2xl flex items-center justify-center p-4 hover:border-gold-400/50 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
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
            Let&apos;s Plan Your Financial Future Together
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-xl mx-auto">
            Book a complimentary 1-on-1 portfolio review session with Sachin Pandit &amp; Rakhi
            Pandit at our Kurla office or online.
          </p>
          <PrimaryButton
            href="/contact"
            size="lg"
            variant="gold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Get in Touch Today
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
