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
  size = "md",
  className = "",
}) => {
  // Use explicit height rather than aspect-ratio padding to fit properly inside flex header
  const heightClasses = {
    sm: "h-12",
    md: "h-14 sm:h-16",
    lg: "h-20 sm:h-24",
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      {/* We set height based on size, and width will auto-adjust since we use object-contain */}
      <div className={`relative w-40 sm:w-48 ${heightClasses}`}>
        <Image 
          src="/images/logo.png" 
          alt="SP Financial Services" 
          fill 
          className="object-contain object-left" 
          priority
        />
      </div>
    </Link>
  );
};
