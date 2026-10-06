import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sachin Pandit (7x MDRT) | SP Financial Services Mumbai",
  description: "Learn about Sachin Pandit and Rakhi Pandit, founders of SP Financial Services in Kurla, Mumbai. Over 20+ years of MDRT USA-certified wealth advisory and 2,000+ satisfied clients.",
  alternates: {
    canonical: "https://www.sp-financials.com/about",
  },
  openGraph: {
    title: "About Sachin Pandit & Rakhi Pandit | SP Financial Services",
    description: "20+ years of award-winning financial consulting, MDRT USA standards, and trusted family advisory in Mumbai.",
    url: "https://www.sp-financials.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
