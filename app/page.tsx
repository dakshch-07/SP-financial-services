"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Trophy,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Play,
  HeartPulse,
  Car,
  TrendingUp,
  Building,
  CheckCircle2,
  Phone,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { VideoModal } from "@/components/VideoModal";
import { fadeUp, staggerContainer, cardHoverVariants } from "@/lib/motion-variants";
import {
  BUSINESS_INFO,
  ALL_COVERAGE_TYPES,
  TESTIMONIALS_DATA,
  AWARD_GALLERY_PHOTOS,
  WHY_CHOOSE_US_POINTS,
} from "@/lib/data";

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Auto-advance testimonial carousel every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <>
      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen bg-gradient-to-b from-[#0B2A55] via-[#0D3163] to-[#123B7A] text-white flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Abstract skyline silhouette & subtle grid pattern */}
        <div className="absolute inset-0 subtle-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B2A55] to-transparent pointer-events-none" />

        {/* Ambient radial glow behind portrait */}
        <div className="absolute top-1/3 right-10 md:right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyanAccent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Desktop 7 cols / Mobile centered) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              {/* Gold Eyebrow */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                LIC · HDFC ERGO · STAR HEALTH · NJ MUTUAL FUND
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] text-white tracking-tight"
              >
                Your Trusted Partner in the Journey of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  Wealth Creation
                </span>
              </motion.h1>

              {/* Subhead Tagline */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg md:text-xl text-gray-200 font-medium tracking-wide max-w-2xl"
              >
                &ldquo;Secure Today. Assured Tomorrow.&rdquo;
                <span className="block text-sm sm:text-base text-gray-300 font-normal mt-1">
                  MDRT USA-recognized advisory guiding 1,500+ families and business owners in
                  Mumbai for over 16+ years.
                </span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
              >
                <PrimaryButton
                  href="/contact"
                  size="lg"
                  variant="gold"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Book Free Consultation
                </PrimaryButton>

                <SecondaryButton
                  href={BUSINESS_INFO.contact.whatsapp}
                  isExternal
                  size="lg"
                  variant="white"
                  icon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us
                </SecondaryButton>
              </motion.div>

              {/* Micro-Trust Footnote */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 pt-4 text-xs text-gray-300 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> 100% Honest Guidance
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> Dedicated Claim Support
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side: Portrait Photo Composition (Sachin & Rakhi Pandit) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-gold-400/40 via-white/10 to-gold-400/20 shadow-2xl shadow-navy-900/60 border border-white/20">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-navy-900">
                  <Image
                    src="/images/founders-portrait.png"
                    alt="Sachin Pandit & Rakhi Pandit - SP Financial Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                  />
                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-85" />

                  {/* Floating Name Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-navy-900/90 backdrop-blur-md border border-gold-400/30 text-center shadow-lg">
                    <p className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                      Sachin Pandit & Rakhi Pandit
                    </p>
                    <p className="text-[11px] text-gold-300 font-semibold tracking-wider uppercase mt-0.5">
                      6x MDRT USA Award Winner · 16+ Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll-Cue Chevron */}
          <div className="flex justify-center pt-10">
            <motion.a
              href="#trust-strip"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gold-400 transition-colors"
              aria-label="Scroll to content"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST STRIP
         ========================================================================= */}
      <section
        id="trust-strip"
        className="relative bg-[#061833] text-white py-8 border-y border-gold-400/20 shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {BUSINESS_INFO.stats.map((stat, idx) => {
              const icons = [
                <Users key="users" className="w-6 h-6 text-gold-400" />,
                <Shield key="shield" className="w-6 h-6 text-gold-400" />,
                <Award key="award" className="w-6 h-6 text-gold-400" />,
                <Trophy key="trophy" className="w-6 h-6 text-gold-400" />,
              ];

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-400/30 transition-all duration-300"
                >
                  <div className="mb-2 p-2 rounded-full bg-gold-400/10">{icons[idx]}</div>
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white text-gradient">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gold-300 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE COVER (Insurance Partners)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Authorized Associations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            We Cover All Types of Insurance
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Partnered directly with India&apos;s leading financial institutions to deliver
            maximum security, high claim-settlement ratios, and tailored growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.insurancePartners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:border-gold-400/40 group"
            >
              <div>
                {/* Logo & Header */}
                <div className="h-16 w-full relative mb-5 flex items-center justify-center p-2 rounded-xl bg-gray-50 group-hover:bg-gold-50/50 transition-colors">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-navy-50 text-navy-800 text-[11px] font-bold tracking-wider uppercase mb-3">
                  {partner.badge}
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {partner.tagline}
                </p>
              </div>

              {/* Coverage Pills */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5">
                  {partner.coverageTypes.map((type) => (
                    <span
                      key={type}
                      className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          4. SERVICES OVERVIEW
         ========================================================================= */}
      <SectionWrapper className="bg-white border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Comprehensive Advisory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            One Stop Solution for All Your Insurance Needs
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            From life protection and health security to motor coverage and smart mutual fund
            investments.
          </p>
        </div>

        {/* 5 Core Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {[
            {
              title: "Life Insurance",
              desc: "Secure your family's future",
              icon: <Shield className="w-7 h-7" />,
              color: "bg-blue-50 text-blue-700 border-blue-200",
            },
            {
              title: "Health Insurance",
              desc: "Good health, happy life",
              icon: <HeartPulse className="w-7 h-7" />,
              color: "bg-emerald-50 text-emerald-700 border-emerald-200",
            },
            {
              title: "Motor Insurance",
              desc: "Drive safe, stay protected",
              icon: <Car className="w-7 h-7" />,
              color: "bg-amber-50 text-amber-700 border-amber-200",
            },
            {
              title: "General Insurance",
              desc: "Home, travel & business cover",
              icon: <Building className="w-7 h-7" />,
              color: "bg-purple-50 text-purple-700 border-purple-200",
            },
            {
              title: "Mutual Fund",
              desc: "Smart investments for tomorrow",
              icon: <TrendingUp className="w-7 h-7" />,
              color: "bg-cyan-50 text-cyan-700 border-cyan-200",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-warmBg rounded-2xl p-5 border border-gray-200/80 text-center flex flex-col items-center hover:border-gold-400/50 hover:bg-gold-50/20 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${item.color} shadow-sm`}
              >
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-base text-navy-900 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Range Coverage Pill Tag Cloud */}
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
              Full Range of Financial & Commercial Coverages
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mb-6">
              We structure custom plans for individuals, corporate employers, NRI investors,
              and trade organizations:
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mb-8">
              {ALL_COVERAGE_TYPES.map((cov) => (
                <span
                  key={cov.name}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium hover:border-gold-400 hover:text-gold-300 transition-colors"
                >
                  {cov.name}
                </span>
              ))}
              <span className="px-3.5 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold">
                &amp; Many More...
              </span>
            </div>

            <PrimaryButton
              href="/services"
              variant="gold"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Services &amp; Asset Portfolios
            </PrimaryButton>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          5. WHY CHOOSE US (Features + Embedded Video Card)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            The SP Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Why Hundreds of Families Choose Us
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 text-base">
            Professionalism, complete transparency, and human-centric wealth guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 4 Feature Pillars (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {WHY_CHOOSE_US_POINTS.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold-400/40"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Styled Video Card (Right 6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden bg-navy-900 shadow-2xl border border-white/20 group cursor-pointer">
              {/* Video Thumbnail Background */}
              <Image
                src="/images/founders-portrait.png"
                alt="SP Financial Services Video"
                fill
                className="object-cover object-center filter brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

              {/* Play Button with Soft Pulse */}
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-gold-400/30 animate-ping pointer-events-none" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-400 text-navy-900 flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-navy-900 translate-x-0.5" />
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Watch: Why Choose SP Financial Services
                  </h3>
                  <p className="text-xs text-gold-300 mt-1">
                    Click to play official video · 1 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          6. TESTIMONIAL TEASER (Auto-Advancing Carousel)
         ========================================================================= */}
      <SectionWrapper className="bg-white border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
            Trusted by Industry Leaders &amp; Families
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-2 sm:px-8">
          <div className="bg-warmBg rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md relative min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-8 w-14 h-14 text-gold-400/15 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-xl text-navy-900 leading-relaxed italic">
                  &ldquo;{TESTIMONIALS_DATA[activeTestimonialIdx].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 shadow-sm bg-navy-800">
                    <Image
                      src={TESTIMONIALS_DATA[activeTestimonialIdx].image}
                      alt={TESTIMONIALS_DATA[activeTestimonialIdx].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-navy-900">
                      {TESTIMONIALS_DATA[activeTestimonialIdx].name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {TESTIMONIALS_DATA[activeTestimonialIdx].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between pt-8 mt-4">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx
                        ? "w-8 bg-gold-500"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white border border-gray-200 text-navy-800 hover:bg-gold-400 hover:text-navy-900 transition-colors shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white border border-gray-200 text-navy-800 hover:bg-gold-400 hover:text-navy-900 transition-colors shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/testimonials"
              className="text-xs font-bold uppercase tracking-widest text-navy-800 hover:text-gold-600 inline-flex items-center gap-1.5 transition-colors"
            >
              Read All Verified Testimonials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          7. ACHIEVEMENTS TEASER
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
              Proven Track Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Awards &amp; Conventions (2018–2023)
            </h2>
            <div className="w-20 h-1 bg-gold-400 mt-4 rounded-full" />
          </div>

          <div className="mt-4 md:mt-0">
            <SecondaryButton
              href="/achievements"
              variant="navy"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              See All Achievements
            </SecondaryButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARD_GALLERY_PHOTOS.slice(0, 4).map((photo) => (
            <motion.div
              key={photo.year}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="group bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full bg-navy-900 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-gold-400 text-navy-900 font-bold text-xs shadow-md">
                  {photo.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-sm text-navy-900 group-hover:text-gold-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          8. FINAL CTA BAND
         ========================================================================= */}
      <section className="bg-gradient-to-r from-[#0B2A55] via-[#123B7A] to-[#0B2A55] text-white py-16 sm:py-20 relative overflow-hidden border-t border-gold-400/20">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-300 mb-3 block">
            Start Your Journey Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Let&apos;s build a concrete, stress-free roadmap for your family&apos;s retirement,
            children&apos;s education, and tax-efficient wealth growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton
              href="/contact"
              size="lg"
              variant="gold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Free Consultation
            </PrimaryButton>

            <a
              href={`tel:${BUSINESS_INFO.contact.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {BUSINESS_INFO.contact.primaryPhoneDisplay}</span>
            </a>
          </div>

          <div className="pt-8 text-xs text-gray-300 flex items-center justify-center gap-2">
            <span>📍 Sayba Palace, Kurla (W), Mumbai</span>
            <span>•</span>
            <span>✉️ {BUSINESS_INFO.contact.email}</span>
          </div>
        </div>
      </section>

      {/* Video Modal Lightbox */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/OuuJjjAM-sE?autoplay=1"
        title="SP Financial Services — Why Us"
      />
    </>
  );
}
