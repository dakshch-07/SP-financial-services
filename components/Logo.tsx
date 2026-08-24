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
  size = 42,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 group-hover:scale-105 ${className}`}
    >
      {/* Outer Classic Gold Circular Ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="#08201D"
        stroke="#D4AF37"
        strokeWidth="3"
      />

      {/* Inner Subtle Ring */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="#0C2D27"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.5"
      />

      {/* Clean, Simple, Classic Serif Monogram SP */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontWeight="bold"
        fontSize="28"
        fill="#FFFFFF"
        letterSpacing="1"
      >
        SP
      </text>

      {/* Small Classic Gold Star Accent at Top */}
      <circle cx="50" cy="19" r="2" fill="#D4AF37" />
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
    md: 42,
    lg: 52,
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
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase mt-1">
            SERVICES · WEALTH ADVISORY
          </span>
        </div>
      )}
    </Link>
  );
};
