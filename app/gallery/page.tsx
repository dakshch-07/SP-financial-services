import React from "react";
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Gallery | SP Financial Services",
  description: "View our awards, achievements, and client success stories.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-12 bg-cream-50 min-h-screen">
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-gold-500 mb-2 block">
            Our Legacy
          </span>
          <h1 className="font-serif fluid-h1 font-bold text-forest-900 mb-6">
            Gallery & Moments
          </h1>
          <p className="text-gray-600 text-lg">
            A glimpse into our 20+ years of dedicated financial advisory, awards, and happy client memories.
          </p>
        </div>

        {/* Temporary Gallery Grid Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 border border-gray-300 shadow-sm"
            >
              <span>Image {item}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
