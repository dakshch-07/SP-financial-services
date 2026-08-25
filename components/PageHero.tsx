"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumb,
}) => {
  return (
    <section className="relative min-h-[340px] sm:min-h-[380px] bg-forest-950 text-white flex items-center justify-center pt-32 pb-14 overflow-hidden border-b border-gold-400/20">
      {/* Luxury Ambient Glows & Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(12,45,39,0.9),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-400/30 backdrop-blur-sm shadow-md"
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
          className="font-serif fluid-h1 font-bold text-white tracking-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="fluid-body text-gray-200 max-w-2xl mx-auto font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};
