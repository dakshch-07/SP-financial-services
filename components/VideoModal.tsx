"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink, Instagram } from "lucide-react";
import { modalVariants } from "@/lib/motion-variants";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/OuuJjjAM-sE?autoplay=1",
  title = "SP Financial Services — Video Insights",
}) => {
  const isInstagram = videoUrl?.includes("instagram.com");
  const rawInstagramUrl = isInstagram
    ? videoUrl.replace(/\/embed\/?$/, "")
    : videoUrl;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-forest-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative w-full ${
              isInstagram ? "max-w-[420px]" : "max-w-3xl"
            } bg-forest-950 border border-gold-400/40 rounded-3xl overflow-hidden shadow-2xl z-10`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-forest-800 bg-[#061833]">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="p-1.5 rounded-full bg-gold-400/20 text-gold-400 flex-shrink-0">
                  {isInstagram ? (
                    <Instagram className="w-4 h-4 text-pink-400" />
                  ) : (
                    <Play className="w-4 h-4 fill-gold-400" />
                  )}
                </span>
                <h3 className="font-serif text-white font-medium text-xs sm:text-sm truncate">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {isInstagram && (
                  <a
                    href={rawInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 px-2.5 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-300 hover:bg-pink-600/40 text-[10px] font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Frame */}
            <div
              className={`relative w-full bg-black flex items-center justify-center ${
                isInstagram
                  ? "h-[540px] sm:h-[620px] max-h-[78vh]"
                  : "aspect-video sm:aspect-[16/9]"
              }`}
            >
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
