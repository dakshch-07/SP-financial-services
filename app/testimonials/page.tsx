"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Play,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CountUp } from "@/components/CountUp";
import { PrimaryButton } from "@/components/Buttons";
import { VideoModal } from "@/components/VideoModal";
import { PageHero } from "@/components/PageHero";
import { cardHoverVariants } from "@/lib/motion-variants";
import {
  BUSINESS_INFO,
  TESTIMONIALS_DATA,
} from "@/lib/data";

export default function TestimonialsPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* High-Contrast Luxury Page Hero */}
      <PageHero
        title="What Our Clients Say"
        subtitle="Real feedback from prominent film directors, corporate HR leaders, entrepreneurs, and families who trust SP Financial Services."
        breadcrumb="Testimonials"
      />

      {/* Featured Video */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
              Watch Our Story
            </span>
            <h2 className="font-serif fluid-h2 font-bold text-forest-900">
              Why Leaders Trust Sachin Pandit
            </h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto mt-3 rounded-full" />
          </div>

          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-forest-950 shadow-2xl border border-gold-400/30 cursor-pointer group"
          >
            <Image
              src="/images/founders-portrait.png"
              alt="Why Choose SP Financial Services Video Preview"
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

              <h3 className="font-serif text-lg sm:text-2xl font-bold text-white max-w-lg">
                &ldquo;Protecting Lives... Securing Futures...&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-gold-300 mt-1">
                Click to play official video · 1 min
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Grid */}
      <SectionWrapper className="bg-white border-y border-cream-300">
        {/* Google 5-Star Rating Trust Header */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-cream-50 via-white to-cream-100 rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-lg text-center mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-2xl border border-cream-300 shadow-sm">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="text-forest-950 font-bold text-lg leading-none">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-gray-500 font-medium">Google Verified Rating</span>
              </div>
            </div>

            <div className="text-forest-900 text-sm sm:text-base font-semibold text-center sm:text-left">
              ⭐ 5.0 / 5.0 Rated on Google Business Profile
              <p className="text-xs text-forest-700 font-normal mt-0.5">
                Authentic experiences from families &amp; business owners across Mumbai
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://maps.google.com/?q=SP+Financial+Services+Unit+no+4+Parmar+industrial+Estate+Bail+Bazar+Kurla+West+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-950 text-white text-xs font-bold hover:bg-forest-900 transition-colors shadow-sm"
            >
              <span>View All Google Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://maps.google.com/?q=SP+Financial+Services+Unit+no+4+Parmar+industrial+Estate+Bail+Bazar+Kurla+West+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-forest-950 border border-gold-400/50 text-xs font-bold hover:bg-gold-50 transition-colors shadow-sm"
            >
              <span>✍️ Write a Google Review</span>
            </a>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Featured Client Testimonials
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Real Stories &amp; Authentic Feedback
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-cream-50 rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-card flex flex-col justify-between relative hover:border-gold-400/50 hover:shadow-card-hover transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-400/20 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="font-serif text-base sm:text-lg text-forest-900 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-cream-300">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 shadow-sm bg-forest-950">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-forest-900">{item.name}</h4>
                  <p className="text-xs text-gray-600 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Trust Stats */}
      <section className="bg-forest-950 text-white py-12 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {BUSINESS_INFO.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-forest-900/60 border border-forest-800">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-semibold text-gold-300 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-forest-950 to-forest-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif fluid-h2 font-bold text-white mb-4">
            Join 2,000+ Satisfied Clients Today
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-8 max-w-xl mx-auto">
            Experience proactive, transparent financial management tailored precisely for your family.
          </p>
          <PrimaryButton href="/contact" size="lg" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
            Start With a Free Consultation
          </PrimaryButton>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/OuuJjjAM-sE?autoplay=1"
        title="Why Choose SP Financial Services"
      />
    </>
  );
}
