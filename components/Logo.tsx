"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean;
  className?: string;
}

export const LogoMark: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 44,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="spGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A03A" />
          <stop offset="50%" stopColor="#DFBE5B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="spForestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#08201D" />
          <stop offset="100%" stopColor="#0F3B32" />
        </linearGradient>
        <filter id="spShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#08201D" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Hexagonal Shield Foundation */}
      <path
        d="M50 6 L88 26 L88 68 L50 94 L12 68 L12 26 Z"
        fill="url(#spForestGrad)"
        stroke="url(#spGoldGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#spShadow)"
      />

      {/* Modern Interlocking 'S' & 'P' with Upward Growth Arrow */}
      {/* Upper S-Curve into P stem */}
      <path
        d="M32 34 C32 26 44 24 54 24 C64 24 68 28 68 34 C68 40 60 43 48 46 C36 49 28 54 28 64 C28 74 38 78 50 78 C60 78 68 74 72 68"
        stroke="url(#spGoldGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* P Stem rising into dynamic 45° Upward Financial Growth Arrow */}
      <path
        d="M50 76 L50 26 L66 26 C74 26 80 32 80 40 C80 48 74 54 66 54 L50 54"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Upward Growth Arrow Apex */}
      <path
        d="M74 16 L88 16 L88 30 M88 16 L62 42"
        stroke="url(#spGoldGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  size = "md",
  withWordmark = true,
  className = "",
}) => {
  const isLight = variant === "light";

  const sizeDimensions = {
    sm: 36,
    md: 44,
    lg: 54,
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <LogoMark size={sizeDimensions} />

      {withWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif font-bold tracking-wider leading-none text-base sm:text-lg md:text-xl ${
                isLight ? "text-white" : "text-forest-900"
              }`}
            >
              SP FINANCIAL
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-gold-400 font-bold uppercase mt-1">
            SERVICES · WEALTH ADVISORY
          </span>
        </div>
      )}
    </Link>
  );
};
