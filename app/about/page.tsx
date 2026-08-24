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
import { PageHero } from "@/components/PageHero";
import { fadeUp, cardHoverVariants } from "@/lib/motion-variants";
import { BUSINESS_INFO, AWARDS_TIMELINE } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* High-Contrast Page Hero with Background Image */}
      <PageHero
        title="About SP Financial Services"
        subtitle="Over 16 years of disciplined wealth management, MDRT USA-certified standards, and unwavering commitment to 1,500+ clients across Mumbai."
        breadcrumb="About Us"
        bgImage="/images/hero-bg-3.jpg"
      />

      {/* Founder Profile */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Founder Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-gold-400 via-cream-200 to-forest-900 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-forest-950">
                <Image
                  src="/images/sachin-pandit.png"
                  alt="Sachin Pandit - Founder, SP Financial Services"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-forest-950/90 backdrop-blur-sm border border-gold-400/30">
                  <h3 className="font-serif text-lg font-bold text-white">Sachin Pandit</h3>
                  <p className="text-[11px] text-gold-300 font-semibold tracking-wider uppercase mt-0.5">
                    Founder &amp; MDRT USA Financial Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/10 border border-forest-800/20 text-forest-800 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Founder&apos;s Message
            </div>

            <h2 className="font-serif fluid-h2 font-bold text-forest-900 leading-snug">
              &ldquo;Guiding Families Toward Financial Independence &amp; Peace of Mind.&rdquo;
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                I am <strong>Sachin Pandit</strong>, founder of SP Financial Services. Over the
                past 16 years, we have had the privilege of partnering with over 1,500
                individuals—from dynamic entrepreneurs and corporate executives to young salaried
                professionals, students, and retirees.
              </p>
              <p>
                Whether it is structuring a guaranteed lifelong pension for a dignified retirement,
                securing funds for your child&apos;s dream university without debt, or building
                robust shields against unforeseen medical emergencies, our role is to make wealth
                creation transparent, stress-free, and sustainable.
              </p>
              <p>
                Together with <strong>Rakhi Pandit</strong> and our advisory team in Kurla (W),
                Mumbai, we combine deep domain expertise across LIC, Star Health insurance, and NJ
                Mutual Funds with genuine, human-first customer service.
              </p>
            </div>

            {/* Stat Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-cream-300 shadow-sm">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  <CountUp end={1500} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-gold-600 uppercase tracking-wider mt-1">
                  Happy Clients
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cream-300 shadow-sm">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  <CountUp end={16} suffix="+ Yrs" />
                </div>
                <div className="text-[11px] font-bold text-gold-600 uppercase tracking-wider mt-1">
                  Experience
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cream-300 shadow-sm col-span-2 sm:col-span-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  <CountUp end={6} suffix=" Yrs" />
                </div>
                <div className="text-[11px] font-bold text-gold-600 uppercase tracking-wider mt-1">
                  MDRT USA Winner
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission Statement */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 relative overflow-hidden border-y border-gold-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4 block">
            Our Guiding Mission
          </span>

          <blockquote className="font-serif fluid-h3 font-normal leading-relaxed text-gray-100 italic">
            &ldquo;Our mission is to guide you in creating a concrete roadmap which can help you
            achieve your financial goals in a hassle-free manner.&rdquo;
          </blockquote>

          {/* SVG Animated Stroke Underline */}
          <div className="relative w-48 sm:w-64 h-3 mx-auto mt-6">
            <svg viewBox="0 0 240 12" fill="none" className="w-full h-full">
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

      {/* Accolades & Trophies */}
      <SectionWrapper className="bg-white border-b border-cream-300">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Prestige &amp; Honor
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Key Honors &amp; Recognitions
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-forest-950 to-forest-900 text-white border border-gold-400/40 shadow-xl"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-400/30">
                <Award className="w-3.5 h-3.5 text-gold-400" /> Global Distinction
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Prestigious MDRT – USA Award Winner (Last 6 Consecutive Years)
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                The Million Dollar Round Table (MDRT) is the premier global association of financial
                professionals, recognizing the top tier of insurance and financial advisors worldwide
                for ethical excellence, outstanding client service, and professional knowledge.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Double Shatakveer (2019)", org: "LIC of India", desc: "Surpassed 200+ insured lives in a single financial year." },
                { title: "Shatakveer Award (2018)", org: "LIC of India", desc: "Honored for excellence in client onboarding and trust." },
                { title: "Corporate Trophy (6 Years)", org: "LIC Corporate Division", desc: "Consistent highest corporate advisory volume." },
                { title: "Champions Trophy (3 Years)", org: "LIC Division Honors", desc: "Exemplary customer service and leadership." },
              ].map((award) => (
                <div key={award.title} className="p-4 rounded-2xl bg-cream-50 border border-cream-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Medal className="w-4 h-4 text-gold-500" />
                    <h4 className="font-serif font-bold text-sm text-forest-900">{award.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-forest-800 uppercase tracking-wider block mb-1">
                    {award.org}
                  </span>
                  <p className="text-xs text-gray-600">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              initial={{ rotate: -2 }}
              className="bg-white p-3.5 rounded-2xl shadow-xl border border-cream-300 max-w-[260px] w-full text-center"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-forest-950 mb-3">
                <Image src="/images/awards/trophy-mdrt.png" alt="MDRT USA Trophy" fill className="object-contain p-2" />
              </div>
              <p className="font-serif font-bold text-xs text-forest-900">Official MDRT Trophy</p>
              <p className="text-[10px] text-gray-500">Million Dollar Round Table, USA</p>
            </motion.div>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              initial={{ rotate: 2 }}
              className="bg-white p-3.5 rounded-2xl shadow-xl border border-cream-300 max-w-[260px] w-full text-center"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-forest-950 mb-3">
                <Image src="/images/awards/trophy-lic.png" alt="LIC Trophy" fill className="object-contain p-2" />
              </div>
              <p className="font-serif font-bold text-xs text-forest-900">LIC Division Honors</p>
              <p className="text-[10px] text-gray-500">Senior Division Mumbai</p>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <PrimaryButton href="/achievements" variant="gold" size="md">
            View All Convention &amp; Stage Felicitations
          </PrimaryButton>
        </div>
      </SectionWrapper>
    </>
  );
}
