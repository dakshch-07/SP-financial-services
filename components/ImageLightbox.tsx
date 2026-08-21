"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { modalVariants } from "@/lib/motion-variants";

interface LightboxImage {
  src: string;
  title: string;
  year?: string;
  description?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/90 backdrop-blur-md"
          />

          {/* Lightbox Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl bg-navy-900 border border-gold-400/40 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#061833] border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                {currentImage.year && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-400 text-xs font-bold font-mono">
                    {currentImage.year}
                  </span>
                )}
                <h4 className="font-serif text-sm sm:text-base font-medium truncate max-w-[280px] sm:max-w-md">
                  {currentImage.title}
                </h4>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Viewport */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black/50 flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>

              {/* Prev Button */}
              {currentIndex > 0 && (
                <button
                  onClick={() => onNavigate(currentIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-gold-400 hover:text-navy-900 transition-all shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {currentIndex < images.length - 1 && (
                <button
                  onClick={() => onNavigate(currentIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-gold-400 hover:text-navy-900 transition-all shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Caption */}
            {currentImage.description && (
              <div className="px-6 py-3 bg-[#061833] border-t border-white/10 text-xs sm:text-sm text-gray-300">
                {currentImage.description}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
