import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "SP Financial Services | Sachin Pandit & Rakhi Pandit | Kurla (W), Mumbai",
  description:
    "Secure Today. Assured Tomorrow. Trusted LIC, HDFC ERGO, Star Health Insurance & NJ Mutual Fund advisory run by Sachin Pandit (6x MDRT USA Award Winner, 1500+ Clients, 16+ Years Experience) in Kurla West, Mumbai.",
  keywords: [
    "SP Financial Services",
    "Sachin Pandit",
    "Rakhi Pandit",
    "LIC Advisor Kurla",
    "MDRT USA Financial Advisor",
    "Life Insurance Mumbai",
    "Mediclaim Star Health",
    "HDFC ERGO General Insurance",
    "NJ Mutual Fund SIP",
    "Wealth Creation Advisory",
    "Kurla West Financial Consultant",
  ],
  authors: [{ name: "Sachin Pandit & Rakhi Pandit" }],
  openGraph: {
    title: "SP Financial Services — Secure Today. Assured Tomorrow.",
    description:
      "Award-winning financial and insurance advisory by Sachin Pandit (6x MDRT USA) & Rakhi Pandit. Comprehensive life, health, motor, and mutual fund solutions in Mumbai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-warmBg text-navy-800 antialiased min-h-screen flex flex-col selection:bg-gold-400 selection:text-navy-900">
        <Preloader />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
