import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Services | LIC, Star Health, Mutual Funds and Loans Mumbai",
  description: "Explore complete financial advisory services by Sachin Pandit: LIC Life Insurance, Star Health Mediclaim, NJ Mutual Funds & SIPs, HDFC ERGO General Insurance, and Loan solutions.",
  alternates: {
    canonical: "https://www.sp-financials.com/services",
  },
  openGraph: {
    title: "Wealth & Insurance Services | SP Financial Services",
    description: "Comprehensive life insurance, family mediclaim, SIP compounding, and loan consultancy in Kurla and Chembur, Mumbai.",
    url: "https://www.sp-financials.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
