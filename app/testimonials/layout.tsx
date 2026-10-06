import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | 5.0 Google Rated SP Financial Services",
  description: "Read verified Google reviews and authentic client testimonials for Sachin Pandit from Bollywood directors, corporate HR heads, and 2,000+ families across Mumbai.",
  alternates: {
    canonical: "https://www.sp-financials.com/testimonials",
  },
  openGraph: {
    title: "5.0 Star Verified Reviews | SP Financial Services Mumbai",
    description: "Real feedback from satisfied clients trusting Sachin Pandit for life insurance, health mediclaim, and SIP investments.",
    url: "https://www.sp-financials.com/testimonials",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
