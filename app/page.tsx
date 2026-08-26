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
  Coins,
  BadgeCheck,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { CompactHeroCalculator } from "@/components/CompactHeroCalculator";
import { ReelsShowcase } from "@/components/ReelsShowcase";
import { VideoModal } from "@/components/VideoModal";
import { fadeUp, staggerContainer, cardHoverVariants } from "@/lib/motion-variants";
import {
  BUSINESS_INFO,
  ALL_COVERAGE_TYPES,
  TESTIMONIALS_DATA,
  WHY_CHOOSE_US_POINTS,
} from "@/lib/data";

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Testimonial carousel interval
  useEffect(() => {
    const testTimer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6500);
    return () => clearInterval(testTimer);
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
          1. HERO SECTION (Clean Luxury Canvas + Right-Side Calculator)
         ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen bg-forest-950 text-white flex items-center justify-center pt-[5.5rem] lg:pt-28 pb-10 lg:pb-16 overflow-hidden">
        {/* Luxury Deep Emerald & Forest Ambient Canvas */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(12,45,39,0.9),transparent_60%)]" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-forest-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-forest-950 to-transparent" />

        {/* Main Hero Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6"
            >
              {/* Gold MDRT Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-[9.5px] sm:text-xs font-bold tracking-[0.15em] lg:tracking-[0.18em] uppercase shadow-md backdrop-blur-sm"
              >
                <Award className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gold-400" />
                <span>6x MDRT USA Award Winner · Sachin Pandit</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-serif text-[1.8rem] leading-[1.15] lg:fluid-h1 font-bold text-white tracking-tight drop-shadow-md text-center lg:text-left"
              >
                Smart Wealth Planning &amp; Assured Protection for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                  Your Family
                </span>
              </motion.h1>

              {/* Subhead Tagline (Desktop) */}
              <motion.p
                variants={fadeUp}
                className="fluid-body text-gray-200 font-medium max-w-2xl drop-shadow-sm text-center lg:text-left hidden sm:block"
              >
                &ldquo;Secure Today. Assured Tomorrow.&rdquo; Trusted by over 1,500+ families &amp;
                business owners across Mumbai for 16+ years in LIC life insurance, Star Health,
                NJ Mutual Funds, SIPs, and loan advisory.
              </motion.p>

              {/* Mobile First-Fold Interactive Calculator (Visible immediately on mobile open) */}
              <motion.div
                variants={fadeUp}
                className="block lg:hidden w-full my-2"
              >
                <CompactHeroCalculator />
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3.5 pt-1 w-full sm:w-auto"
              >
                <PrimaryButton
                  href="/contact"
                  size="lg"
                  variant="gold"
                  icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  className="flex-1 sm:flex-none shadow-lg w-full"
                >
                  <span className="hidden sm:inline">Get Free Consultation</span>
                  <span className="sm:hidden">Consultation</span>
                </PrimaryButton>

                <SecondaryButton
                  href={BUSINESS_INFO.contact.whatsapp}
                  isExternal
                  size="lg"
                  variant="white"
                  className="flex-1 sm:flex-none shadow-md w-full"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span className="hidden sm:inline">WhatsApp Us Direct</span>
                  <span className="sm:hidden">WhatsApp</span>
                </SecondaryButton>
              </motion.div>

              {/* Founders Trust Card & Trust Indicators */}
              <motion.div
                variants={fadeUp}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
              >
                {/* Mini Founders Badge */}
                <div className="flex items-center gap-3.5 p-3 pr-5 rounded-2xl bg-forest-900/90 border border-forest-700/90 backdrop-blur-md shadow-lg">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-gold-400 flex-shrink-0 bg-forest-950 shadow-md">
                    <Image
                      src="/images/founders-portrait.png"
                      alt="Sachin & Rakhi Pandit - SP Financial Services"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white font-serif">
                      Sachin &amp; Rakhi Pandit
                    </p>
                    <p className="text-[10px] text-gold-300 font-bold uppercase tracking-wider">
                      MDRT USA · 16+ Yrs Trust
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" /> 1,500+ Clients
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BadgeCheck className="w-4 h-4 text-gold-400" /> Kurla (W) Office
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Desktop Interactive Calculator (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end"
            >
              <CompactHeroCalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST STATS STRIP
         ========================================================================= */}
      <section className="bg-forest-950 text-white py-8 border-y border-gold-400/20 shadow-xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {BUSINESS_INFO.stats.map((stat, idx) => {
              const icons = [
                <Users key="users" className="w-5 h-5 text-gold-400" />,
                <Shield key="shield" className="w-5 h-5 text-gold-400" />,
                <Award key="award" className="w-5 h-5 text-gold-400" />,
                <Trophy key="trophy" className="w-5 h-5 text-gold-400" />,
              ];

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-forest-900/60 border border-forest-800 hover:border-gold-400/30 transition-all duration-300"
                >
                  <div className="mb-1.5 p-2 rounded-full bg-forest-800 text-gold-400">
                    {icons[idx]}
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-gold-300 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2.5. FOUNDERS SPOTLIGHT SECTION (High Clarity on Mobile & Laptop)
         ========================================================================= */}
      <SectionWrapper className="bg-cream-100 organic-texture border-b border-cream-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* High-Resolution Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-gold-400 via-cream-200 to-forest-900 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-forest-950">
                <Image
                  src="/images/founders-portrait.png"
                  alt="Sachin Pandit & Rakhi Pandit - Owners of SP Financial Services"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center p-3 rounded-xl bg-forest-950/95 backdrop-blur-sm border border-gold-400/40 shadow-lg">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Sachin Pandit &amp; Rakhi Pandit
                  </h3>
                  <p className="text-[11px] text-gold-300 font-bold tracking-wider uppercase mt-0.5">
                    Owners &amp; Wealth Advisors · Kurla, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Story & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/10 border border-forest-900/20 text-forest-800 text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-gold-500" /> Leadership &amp; Trust
            </div>

            <h2 className="font-serif fluid-h2 font-bold text-forest-900 leading-tight">
              Meet the Pillars Behind SP Financial Services
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              Founded and managed by <strong>Sachin Pandit</strong> (6x MDRT USA Award Winner) and{" "}
              <strong>Rakhi Pandit</strong>, SP Financial Services has been the trusted financial
              partner for over 1,500+ families and business owners across Mumbai and India for more than
              16 years.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-cream-300 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-forest-900 text-gold-400 flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-900">MDRT USA Certified</h4>
                  <p className="text-[11px] text-gray-600">Top 1% global financial advisory standards.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-cream-300 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-forest-900 text-gold-400 flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-900">LIC &amp; NJ Wealth Partner</h4>
                  <p className="text-[11px] text-gray-600">Authorized life &amp; mutual fund portfolio advisory.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton href="/about" size="md" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
                Read Founders Full Story
              </PrimaryButton>
              <SecondaryButton href="/contact" size="md" variant="navy">
                Book Consultation with Sachin Pandit
              </SecondaryButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          3. SERVICES GRID
         ========================================================================= */}
      <SectionWrapper className="bg-white border-y border-cream-300/80">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            End-to-End Solutions
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Comprehensive Financial &amp; Insurance Offerings
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
          <p className="fluid-body text-gray-600 mt-3">
            Custom portfolios for retirement security, children&apos;s education, family health,
            and wealth multiplication.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Life Insurance (LIC)",
              desc: "Term plans, endowment savings, and guaranteed lifelong pension plans backed by LIC of India sovereign guarantee.",
              icon: <Shield className="w-6 h-6" />,
              badge: "Sovereign Trust",
              color: "bg-forest-50 text-forest-800 border-forest-200",
            },
            {
              title: "Health & Mediclaim (Star Health)",
              desc: "Cashless family floaters, senior citizen covers, critical illness shields, and super surplus plans with zero room-rent capping.",
              icon: <HeartPulse className="w-6 h-6" />,
              badge: "Cashless Network",
              color: "bg-emerald-50 text-emerald-800 border-emerald-200",
            },
            {
              title: "NJ Mutual Funds & SIPs",
              desc: "Goal-based mutual fund investments, tax-saving ELSS (80C), equity SIPs, and disciplined wealth creation portfolios.",
              icon: <TrendingUp className="w-6 h-6" />,
              badge: "Wealth Compounding",
              color: "bg-amber-50 text-amber-800 border-amber-200",
            },
            {
              title: "Motor & General Insurance",
              desc: "HDFC ERGO car, bike, and commercial fleet insurance with instant policy issuance, zero-dep cover, and fast roadside assistance.",
              icon: <Car className="w-6 h-6" />,
              badge: "Instant Issue",
              color: "bg-blue-50 text-blue-800 border-blue-200",
            },
            {
              title: "Commercial & Corporate Insurance",
              desc: "Workmen's compensation, marine transit, fire & property protection, keyman insurance, and corporate group mediclaim.",
              icon: <Building className="w-6 h-6" />,
              badge: "Business Protection",
              color: "bg-purple-50 text-purple-800 border-purple-200",
            },
            {
              title: "Home Loan & Financial Advisory",
              desc: "Expert loan assistance, interest-rate optimization, tax-free asset creation under Sec 10(10D), and debt-free family planning.",
              icon: <Coins className="w-6 h-6" />,
              badge: "Advisory Guidance",
              color: "bg-teal-50 text-teal-800 border-teal-200",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-cream-50 rounded-2xl sm:rounded-3xl p-3 sm:p-7 border border-cream-300/80 shadow-card flex flex-col justify-between hover:border-gold-400/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-5 gap-2 sm:gap-0">
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center border shadow-sm ${service.color} group-hover:scale-110 transition-transform [&>svg]:!w-4 [&>svg]:!h-4 sm:[&>svg]:!w-6 sm:[&>svg]:!h-6`}
                  >
                    {service.icon}
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-forest-900/10 text-forest-800 line-clamp-1 w-full sm:w-auto text-center sm:text-left truncate">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif text-[11px] sm:text-xl font-bold text-forest-900 mb-1 sm:mb-2.5 group-hover:text-forest-700 transition-colors line-clamp-2 leading-tight">
                  {service.title}
                </h3>
                <p className="hidden sm:block text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                <p className="sm:hidden text-[9px] text-gray-600 leading-snug line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <div className="hidden sm:flex pt-6 mt-6 border-t border-cream-300 items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-forest-900 group-hover:text-gold-600 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire For Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Pill Tag Cloud */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-forest-950 text-white shadow-xl text-center">
          <h3 className="font-serif text-[1.15rem] sm:text-2xl font-bold text-white mb-1.5 sm:mb-3 leading-tight">
            Full Spectrum of Risk &amp; Investment Coverage
          </h3>
          <p className="text-gray-300 text-[11px] sm:text-sm mb-5 sm:mb-8">
            We structure policies for private individuals, families, NRIs, and corporate
            enterprises:
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
            {[
              "Life Insurance",
              "Travel Insurance",
              "Motor Insurance",
              "Workmen's Compensation",
              "Marine Insurance",
              "Fire Insurance",
              "Mediclaim Insurance",
              "Group Mediclaim",
              "Personal Accident",
              "Corporate Insurance",
              "Keyman Insurance",
              "Child Education Plans",
              "Retirement & Pension",
              "SIP & Mutual Funds",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-forest-700 bg-forest-900/50 text-emerald-100 text-[9px] sm:text-sm font-medium hover:bg-forest-800 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 sm:mt-10">
            <PrimaryButton href="/services" size="md" variant="gold" className="w-full sm:w-auto">
              View All Services
            </PrimaryButton>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          4. WHY CHOOSE US (MDRT Credibility + Video Player)
         ========================================================================= */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            The MDRT Advantage
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Why Over 1,500 Families Trust Sachin Pandit
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 4 Trust Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            {WHY_CHOOSE_US_POINTS.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-cream-300 shadow-sm flex items-start gap-3 sm:gap-4 hover:border-gold-400/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold text-[11px] sm:text-sm flex-shrink-0 shadow-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-serif text-[14px] sm:text-lg font-bold text-forest-900 mb-0.5 sm:mb-1 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Styled Video Card (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden bg-forest-950 shadow-2xl border border-gold-400/30 cursor-pointer group"
            >
              <Image
                src="/images/founders-portrait.png"
                alt="SP Financial Services Video"
                fill
                className="object-cover object-center filter brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="relative mb-3">
                  <div className="absolute -inset-3 rounded-full bg-gold-400/30 animate-ping pointer-events-none" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-400 text-forest-950 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-forest-950 translate-x-0.5" />
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Why Leaders Choose SP Financial Services
                </h3>
                <p className="text-xs text-gold-300 mt-1">
                  Click to play official video · 1 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          4.5. FINANCIAL WISDOM & REELS SHOWCASE (Real Client Awareness Posters)
         ========================================================================= */}
      <ReelsShowcase />

      {/* =========================================================================
          5. TESTIMONIAL TEASER
         ========================================================================= */}
      <SectionWrapper className="bg-white border-y border-cream-300/80">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Verified Experiences
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Trusted by Film Directors, Executives &amp; Families
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="bg-cream-50 rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-md relative min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-400/20 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="font-serif text-base sm:text-xl text-forest-900 leading-relaxed italic">
                  &ldquo;{TESTIMONIALS_DATA[activeTestimonialIdx].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-cream-300">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 shadow-sm bg-forest-950">
                    <Image
                      src={TESTIMONIALS_DATA[activeTestimonialIdx].image}
                      alt={TESTIMONIALS_DATA[activeTestimonialIdx].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-forest-900">
                      {TESTIMONIALS_DATA[activeTestimonialIdx].name}
                    </h4>
                    <p className="text-xs text-gray-600 font-medium">
                      {TESTIMONIALS_DATA[activeTestimonialIdx].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between pt-6 mt-4">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx
                        ? "w-8 bg-forest-900"
                        : "w-2 bg-cream-400 hover:bg-cream-300"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white border border-cream-300 text-forest-900 hover:bg-gold-400 hover:text-forest-950 transition-colors shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white border border-cream-300 text-forest-900 hover:bg-gold-400 hover:text-forest-950 transition-colors shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          6. SEO CONTENT BLOCK
         ========================================================================= */}
      <section className="bg-cream-50 py-12 border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cream-300 text-forest-900 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
              Trusted Financial Advisory, SIP &amp; Insurance Consultant in Kurla, Mumbai
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Looking for a top-rated <strong>LIC advisor in Kurla</strong> or a certified{" "}
              <strong>mutual fund advisor in Mumbai</strong>? <strong>SP Financial Services</strong>,
              founded by 6x MDRT USA award-winning consultant <strong>Sachin Pandit</strong> and{" "}
              <strong>Rakhi Pandit</strong>, provides personalized wealth management, life insurance,
              Star Health mediclaim, motor policies, and loan advisory. Whether you are calculating
              your mutual fund compounding via our <strong>SIP calculator Mumbai</strong> or seeking
              low-interest <strong>home loan calculators</strong> and tax-free retirement solutions
              under Section 10(10D), our Kurla West office is your dedicated partner in financial
              freedom.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-forest-800">
              <span className="px-2.5 py-1 bg-cream-100 rounded-md border border-cream-300">
                📍 Sayba Palace, Wadia Marg, Kurla (W), Mumbai - 400070
              </span>
              <span className="px-2.5 py-1 bg-cream-100 rounded-md border border-cream-300">
                📞 +91 98705 77706 / +91 96997 88445
              </span>
              <span className="px-2.5 py-1 bg-cream-100 rounded-md border border-cream-300">
                ✉️ sachinpandit1714@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FINAL CTA BAND
         ========================================================================= */}
      <section className="bg-gradient-to-r from-forest-950 via-forest-900 to-navy-950 text-white py-16 sm:py-20 text-center relative overflow-hidden border-t border-gold-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-300 mb-3 block">
            Start Your Journey
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-white mb-6">
            Ready to Plan Your Financial Future?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto mb-8">
            Schedule a complimentary 1-on-1 portfolio review session with Sachin Pandit at our Kurla
            office or online via Google Meet.
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {BUSINESS_INFO.contact.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/OuuJjjAM-sE?autoplay=1"
        title="SP Financial Services — Why Us"
      />
    </>
  );
}
