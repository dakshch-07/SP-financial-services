"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumb,
  bgImage = "/images/awards/award-2023.png",
}) => {
  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] bg-forest-950 text-white flex items-center justify-center pt-36 pb-16 overflow-hidden">
      {/* Real Provided Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center filter brightness-90"
        />
        {/* Multi-Stop Dark Forest & Navy Gradient Overlay for Guaranteed 100% Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/96 via-forest-950/88 to-forest-950/96" />
        <div className="absolute inset-0 bg-forest-950/50 backdrop-blur-[1px]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-forest-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-3 px-3.5 py-1 rounded-full bg-forest-900/90 border border-gold-400/30 backdrop-blur-sm shadow-md"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-serif fluid-h1 font-bold text-white tracking-tight mb-4 drop-shadow-md"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="fluid-body text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};
