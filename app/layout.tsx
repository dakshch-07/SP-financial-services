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
    // 1. Brand & Founders
    "SP Financial Services", "SP Financial Services Kurla", "Sachin Pandit", "Sachin Pandit financial advisor", "Sachin Pandit LIC agent", "Rakhi Pandit", "Sachin Pandit SP Financial Services", "MDRT USA financial advisor Mumbai", "7x MDRT LIC agent",
    
    // 2. LIC & Life Insurance (Local + Colloquial)
    "LIC advisor Kurla", "LIC agent Nehru Nagar", "best LIC agent Chembur", "LIC policy advisor Vidyavihar", "top LIC agent in Mumbai", "term life insurance advisor", "endowment plans Kurla", "buy LIC policy in Kurla", "LIC agent near me", "best LIC agent in Ghatkopar", "LIC agent in Sion", "LIC office near Kurla station", "Jeevan Umang LIC agent Kurla", "child education plan LIC", "pension plan LIC Kurla", "child marriage plan LIC", "buy term insurance Kurla", "guaranteed return plans LIC", "LIC premium agent near me",
    
    // 3. Health & General Insurance (Star Health, HDFC ERGO)
    "Star Health Insurance Kurla", "Star Health agent Nehru Nagar", "mediclaim advisor Chembur", "health insurance Vidyavihar", "health insurance family floater", "HDFC ERGO General Insurance agent", "car insurance Kurla", "bike insurance Chembur", "business insurance agent", "SME insurance Chembur", "medical insurance without room rent capping", "mediclaim agent in Ghatkopar", "medical insurance in Sion", "Star Health policy agent near me", "HDFC ERGO health agent near me", "car insurance renewal Kurla", "two wheeler insurance agent Chembur", "health insurance for parents in Mumbai", "health insurance claim settlement agent", "best mediclaim policy agent Mumbai", "shop insurance agent Kurla", "factory insurance Chembur",
    
    // 4. Mutual Funds & SIP (NJ Wealth)
    "mutual fund advisor Kurla", "SIP investment Chembur", "best mutual fund agent Nehru Nagar", "NJ Wealth partner Kurla", "tax saving mutual funds", "ELSS funds advisor Kurla", "SIP investment for beginners", "mutual fund agent near me", "best SIP plans to invest right now", "NJ Wealth distributor Mumbai", "tax saving investment 80C Kurla", "how to start SIP in Mumbai", "SIP returns calculator", "lumpsum investment advisor", "mutual fund portfolio restructuring", "demat account opening Kurla", "best mutual fund distributor Chembur",
    
    // 5. Loans & General Finance
    "home loan advisor Kurla", "loan consultant Chembur", "loan agent Vidyavihar", "home loan EMI calculator", "SIP calculator Mumbai", "home loan agent Kurla East", "home loan agent Kurla West", "loan balance transfer agent", "mortgage loan agent Chembur", "business loan consultant Kurla", "property loan agent Mumbai",
    
    // 6. Wealth Management & Local Queries
    "financial planner Kurla", "investment advisor Nehru Nagar", "wealth management Chembur", "retirement planning Vidyavihar", "child education planning Mumbai", "portfolio management services Chembur", "investment planner Vidyavihar", "financial consulting Nehru Nagar", "Kurla West financial advisor", "best investment plans 2024", "secure your family future Mumbai", "best financial advisor in Kurla", "investment consultant Chembur", "top LIC agent in Ghatkopar", "reliable insurance agent in Vidyavihar", "personal financial planner in Mumbai", "safe investment options 2024", "wealth creation advisor Mumbai", "financial independence planning", "fixed deposit alternate investment"
  ],
  metadataBase: new URL("https://www.sp-financials.com"),
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
      "@id": "https://www.sp-financials.com/#organization",
      "name": "SP Financial Services",
      "legalName": "SP Financial Services",
      "url": "https://www.sp-financials.com",
      "logo": "https://www.sp-financials.com/images/logo-new.png",
      "image": "https://www.sp-financials.com/images/founders-portrait.png",
      "description":
        "MDRT USA Award-winning financial advisory for LIC life insurance, Star Health mediclaim, NJ mutual funds SIPs, and loan advisory run by Sachin Pandit & Rakhi Pandit in Kurla West, Mumbai.",
      "telephone": "+919870577706",
      "email": "sachinpandit1714@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit No. 4, First Floor, Parmar Industrial Estate, Bail Bazar, Kale Marg",
        "addressLocality": "Kurla West, Mumbai",
        "addressRegion": "Maharashtra",
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
        "award": "MDRT – USA (Last 7 Consecutive Years)"
      },
      "sameAs": [
        "https://www.instagram.com/sp_financial_services/",
        "https://youtube.com/@sp_financial_services"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sp-financials.com/#localbusiness",
      "name": "SP Financial Services Kurla",
      "image": "https://www.sp-financials.com/images/founders-portrait.png",
      "telephone": "+919870577706",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit No. 4, First Floor, Parmar Industrial Estate, Bail Bazar, Kale Marg",
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
