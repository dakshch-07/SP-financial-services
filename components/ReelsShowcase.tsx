"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Sparkles,
  MessageCircle,
  Instagram,
  Filter,
} from "lucide-react";
import { FINANCIAL_REELS_DATA, BUSINESS_INFO } from "@/lib/data";
import { VideoModal } from "./VideoModal";

const CATEGORIES = [
  { id: "all", label: "All Insights (9)" },
  { id: "retirement", label: "Pension & Retirement" },
  { id: "sip", label: "Mutual Funds & SIP" },
  { id: "child", label: "Child Education" },
  { id: "health", label: "Health & Mediclaim" },
  { id: "advisory", label: "Smart Advisory" },
];

export const ReelsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const filteredReels =
    activeCategory === "all"
      ? FINANCIAL_REELS_DATA
      : FINANCIAL_REELS_DATA.filter((r) => r.category === activeCategory);

  return (
    <section className="bg-forest-950 text-white py-16 sm:py-20 relative overflow-hidden border-y border-gold-400/20">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-forest-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-widest border border-gold-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Financial Wisdom &amp; Video Insights
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-white">
              Watch Sachin &amp; Rakhi Pandit in Action
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mt-2 font-medium">
              Real advice on lifelong LIC pensions, Amritbaal child funds, SIP compounding, health
              emergency shields, and avoiding costly financial mistakes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-300 hover:bg-pink-600/30 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @sp_financial_services</span>
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-gold-400 text-forest-950 shadow-gold"
                    : "bg-forest-900/90 text-gray-300 hover:text-white border border-forest-800 hover:border-gold-400/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Reels Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredReels.map((reel) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden bg-forest-900 border border-forest-800 hover:border-gold-400/60 shadow-xl flex flex-col justify-between transition-all duration-300"
              >
                {/* 9:16 Video Poster */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-forest-950">
                  <Image
                    src={reel.image}
                    alt={reel.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />

                  {/* Gradient Shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${reel.tagColor}`}
                    >
                      {reel.badge}
                    </span>
                    <span className="p-1 px-2 rounded-full bg-black/50 text-white text-[10px] font-bold">
                      Reel
                    </span>
                  </div>

                  {/* Center Play Button on Hover */}
                  <div
                    onClick={() =>
                      setSelectedVideo({
                        url: "https://www.youtube.com/embed/OuuJjjAM-sE?autoplay=1",
                        title: reel.title,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold-400 text-forest-950 flex items-center justify-center shadow-gold group-hover:scale-115 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-forest-950 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest-950 via-forest-950/95 to-transparent">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 block mb-0.5">
                      {reel.speakers}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-white line-clamp-2 leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 line-clamp-2 mt-1 leading-relaxed">
                      {reel.description}
                    </p>
                  </div>
                </div>

                {/* Bottom WhatsApp CTA */}
                <div className="p-3 bg-forest-900 border-t border-forest-800">
                  <a
                    href={`https://wa.me/919870577706?text=${encodeURIComponent(
                      `Hello Sachin Pandit, I watched your video on "${reel.title}". I would like to get more guidance on this.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-gold-300 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-forest-700 hover:border-gold-400/40"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};
