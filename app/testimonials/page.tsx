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
import { cardHoverVariants } from "@/lib/motion-variants";
import {
  BUSINESS_INFO,
  TESTIMONIALS_DATA,
} from "@/lib/data";

export default function TestimonialsPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
            <span className="text-white">Testimonials</span>
          </div>

          <h1 className="font-serif fluid-h1 font-bold text-white tracking-tight mb-4">
            What Our Clients Say
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            Real feedback from prominent film directors, corporate HR leaders, entrepreneurs, and
            families who trust SP Financial Services.
          </p>
        </div>
      </section>

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Verified Testimonials
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Client Words of Trust
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
            Join 1,500+ Satisfied Clients Today
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
