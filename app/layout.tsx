import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "SP Financial Services | Sachin Pandit | Best LIC & Mutual Fund Advisor",
  description:
    "SP Financial Services by Sachin Pandit (7x MDRT USA, 20+ Yrs Exp, 2000+ Clients). Top financial advisor for LIC, Star Health, Mutual Funds & SIP in Kurla, Nehru Nagar, Chembur, and Vidyavihar, Mumbai.",
  keywords: [
    "SP Financial Services",
    "SP Financial Services Kurla",
    "Sachin Pandit",
    "Sachin Pandit financial advisor",
    "Sachin Pandit LIC agent",
    "Rakhi Pandit",
    "LIC advisor Kurla",
    "LIC agent Nehru Nagar",
    "best LIC agent Chembur",
    "LIC policy advisor Vidyavihar",
    "top LIC agent in Mumbai",
    "Star Health Insurance Kurla",
    "Star Health agent Nehru Nagar",
    "mediclaim advisor Chembur",
    "health insurance Vidyavihar",
    "mutual fund advisor Kurla",
    "SIP investment Chembur",
    "best mutual fund agent Nehru Nagar",
    "NJ Wealth partner Kurla",
    "SIP calculator Mumbai",
    "home loan advisor Kurla",
    "home loan EMI calculator",
    "loan consultant Chembur",
    "loan agent Vidyavihar",
    "financial planner Kurla",
    "investment advisor Nehru Nagar",
    "wealth management Chembur",
    "retirement planning Vidyavihar",
    "child education planning Mumbai",
    "MDRT USA financial advisor Mumbai",
    "7x MDRT LIC agent",
    "HDFC ERGO General Insurance agent",
    "car insurance Kurla",
    "bike insurance Chembur",
    "term life insurance advisor",
    "endowment plans Kurla",
    "business insurance agent",
    "SME insurance Chembur",
    "health insurance family floater",
    "SIP investment for beginners",
    "tax saving mutual funds",
    "ELSS funds advisor Kurla",
    "financial consulting Nehru Nagar",
    "portfolio management services Chembur",
    "investment planner Vidyavihar",
    "Sachin Pandit SP Financial Services",
    "Kurla West financial advisor",
    "best investment plans 2024",
    "secure your family future Mumbai",
    "guaranteed return plans LIC",
    "medical insurance without room rent capping",
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
