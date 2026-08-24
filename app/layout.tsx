import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "SP Financial Services | Sachin Pandit | MDRT Advisor & SIP Calculator Mumbai",
  description:
    "Secure Today. Assured Tomorrow. Trusted financial advisory by Sachin Pandit (6x MDRT USA, 1,500+ Clients, 16+ Yrs) in Kurla West, Mumbai. Live SIP calculator, home loan EMI calculator, LIC life insurance, Star Health mediclaim & NJ Mutual Funds.",
  keywords: [
    "SIP calculator Mumbai",
    "home loan calculator",
    "LIC advisor Kurla",
    "mutual fund advisor Mumbai",
    "SP Financial Services",
    "Sachin Pandit financial advisor",
    "Rakhi Pandit",
    "MDRT USA financial advisor Mumbai",
    "loan EMI calculator",
    "Star Health Insurance Kurla",
    "HDFC ERGO General Insurance",
    "NJ Wealth SIP investment",
  ],
  authors: [{ name: "Sachin Pandit & Rakhi Pandit" }],
  openGraph: {
    title: "SP Financial Services | Wealth Creation, Insurance & Calculators",
    description:
      "MDRT USA-recognized financial advisory in Mumbai. Calculate your SIP compounding & loan EMIs live, and get tailored insurance & investment portfolios.",
    type: "website",
    locale: "en_IN",
  },
};

// JSON-LD Schema Markup for FinancialService & LocalBusiness
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://sp-financial-services.vercel.app/#organization",
      "name": "SP Financial Services",
      "legalName": "SP Financial Services",
      "url": "https://sp-financial-services.vercel.app",
      "logo": "https://sp-financial-services.vercel.app/images/founders-portrait.png",
      "image": "https://sp-financial-services.vercel.app/images/founders-portrait.png",
      "description":
        "MDRT USA Award-winning financial advisory for LIC life insurance, Star Health mediclaim, NJ mutual funds SIPs, and loan advisory run by Sachin Pandit & Rakhi Pandit in Kurla West, Mumbai.",
      "telephone": "+919870577706",
      "email": "sachinpandit1714@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "201, 202, 2nd Floor, Sayba Palace, Wadia Marg, Nr. New Post Office",
        "addressLocality": "Kurla West",
        "addressRegion": "Mumbai, Maharashtra",
        "postalCode": "400070",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.070967,
        "longitude": 72.875323
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:30"
      },
      "founder": {
        "@type": "Person",
        "name": "Sachin Pandit",
        "jobTitle": "Founder & MDRT USA Financial Advisor",
        "award": "MDRT – USA (Last 6 Consecutive Years)"
      },
      "sameAs": [
        "https://www.instagram.com/sp_financial_services/",
        "https://youtube.com/@sp_financial_services"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://sp-financial-services.vercel.app/#localbusiness",
      "name": "SP Financial Services Kurla",
      "image": "https://sp-financial-services.vercel.app/images/founders-portrait.png",
      "telephone": "+919870577706",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "201, 202, 2nd Floor, Sayba Palace, Nr. New Post Office, Kurla (W)",
        "addressLocality": "Mumbai",
        "postalCode": "400070",
        "addressCountry": "IN"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="bg-cream-100 text-forest-900 antialiased min-h-screen flex flex-col selection:bg-gold-400 selection:text-forest-950">
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
