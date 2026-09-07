"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean; // Kept for backwards compatibility but not used
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
}) => {
  const heightClasses = {
    sm: "h-12",
    md: "h-14 sm:h-16",
    lg: "h-20 sm:h-24",
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      <div 
        className={`relative ${heightClasses} aspect-[1.48] ${
          variant === "dark" ? "mix-blend-multiply" : "bg-white p-1 rounded-xl shadow-sm"
        }`}
      >
        <Image 
          src="/images/logo-new.png" 
          alt="SP Financial Services" 
          fill 
          className="object-contain object-left" 
          priority
        />
      </div>
    </Link>
  );
};
