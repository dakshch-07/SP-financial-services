import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Achievements | 7x MDRT USA Winner Sachin Pandit",
  description: "Discover 70+ national and international accolades won by Sachin Pandit, including 7 consecutive years of MDRT USA (Million Dollar Round Table) and LIC Champions Trophies.",
  alternates: {
    canonical: "https://www.sp-financials.com/achievements",
  },
  openGraph: {
    title: "Awards & MDRT Honors | Sachin Pandit Financial Advisor",
    description: "7 consecutive years of MDRT USA recognition and 70+ prestigious LIC corporate awards.",
    url: "https://www.sp-financials.com/achievements",
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
