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
  alternates: {
    canonical: "https://www.sp-financials.com",
  },
  authors: [{ name: "Sachin Pandit" }, { name: "Rakhi Pandit" }],
  creator: "Sachin Pandit (MDRT USA)",
  publisher: "SP Financial Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SP Financial Services | Sachin Pandit | Best LIC & Mutual Fund Advisor Mumbai",
    description:
      "7x MDRT USA Award Winner. Trusted by 2,000+ families for LIC life insurance, Star Health mediclaim, NJ mutual funds SIPs, and loan advisory in Kurla & Mumbai.",
    url: "https://www.sp-financials.com",
    siteName: "SP Financial Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sp-financials.com/images/founders-portrait.png",
        width: 1200,
        height: 630,
        alt: "Sachin Pandit & Rakhi Pandit - SP Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Financial Services | Sachin Pandit | 7x MDRT USA Financial Advisor",
    description: "Top financial advisor in Kurla, Mumbai for LIC, Star Health, Mutual Funds & SIPs.",
    images: ["https://www.sp-financials.com/images/founders-portrait.png"],
  },
};

// JSON-LD Schema Markup for FinancialService, LocalBusiness, FAQPage, BreadcrumbList, and Person (E-E-A-T)
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
        "7x MDRT USA Award-winning financial advisory firm in Kurla West, Mumbai led by Sachin Pandit and Rakhi Pandit. Comprehensive services for LIC Life Insurance, Star Health Mediclaim, NJ Mutual Funds & SIPs, HDFC ERGO General Insurance, and Loan Advisory.",
      "telephone": "+919870577706",
      "email": "sachinpandit1714@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI, Cheque",
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
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "AdministrativeArea", "name": "Kurla West" },
        { "@type": "AdministrativeArea", "name": "Kurla East" },
        { "@type": "AdministrativeArea", "name": "Chembur" },
        { "@type": "AdministrativeArea", "name": "Ghatkopar" },
        { "@type": "AdministrativeArea", "name": "Vidyavihar" },
        { "@type": "AdministrativeArea", "name": "Sion" },
        { "@type": "AdministrativeArea", "name": "BKC" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "19:30"
        }
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Sachin Pandit",
          "jobTitle": "Founder & Senior Financial Consultant",
          "award": "MDRT – USA (7 Consecutive Years)",
          "knowsAbout": ["Life Insurance", "LIC Pension Plans", "Mutual Funds", "SIP Compounding", "Mediclaim", "Wealth Planning"]
        },
        {
          "@type": "Person",
          "name": "Rakhi Pandit",
          "jobTitle": "Co-Founder & Financial Advisor",
          "knowsAbout": ["Health Insurance", "Family Financial Planning", "Tax Saving ELSS", "Retirement Solutions"]
        }
      ],
      "sameAs": [
        "https://www.instagram.com/sp_financial_services/",
        "https://youtube.com/@sp_financial_services",
        "https://maps.google.com/?q=SP+Financial+Services+Unit+no+4+Parmar+industrial+Estate+Bail+Bazar+Kurla+West+Mumbai"
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
        "addressLocality": "Kurla West, Mumbai",
        "postalCode": "400070",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sp-financials.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What financial services does Sachin Pandit & SP Financial Services provide in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SP Financial Services provides comprehensive wealth advisory including LIC Life Insurance, Star Health Mediclaim, NJ Mutual Funds & SIP investments, HDFC ERGO General Insurance (Motor/Travel/Home), Retirement Pension Solutions, Child Education Funds, and Home Loan Balance Transfer consultancy."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose an MDRT USA Award-winning advisor like Sachin Pandit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Million Dollar Round Table (MDRT USA) represents the top tier of financial professionals globally. Sachin Pandit has qualified for MDRT USA for 7 consecutive years, providing clients with ethical, transparent, and proven wealth creation strategies backed by 20+ years of industry experience."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start a Mutual Fund SIP with SP Financial Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can start a Systematic Investment Plan (SIP) in top-rated mutual funds via NJ Wealth through SP Financial Services. We offer personalized risk profiling, portfolio allocation, and automated paperless setup starting from ₹500/month."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the office of SP Financial Services located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is located at Unit No. 4, First Floor, Parmar Industrial Estate, Bail Bazar, Kale Marg, Kurla (West), Mumbai - 400070. You can reach us via phone at +91 98705 77706 or WhatsApp for in-person or online consultations."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best health insurance policy for family cashless treatment in Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend top cashless health insurance plans from Star Health and HDFC ERGO with zero room rent capping, automatic restoration of sum insured, and extensive network hospital coverage across Mumbai."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sp-financials.com/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.sp-financials.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://www.sp-financials.com/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Financial Services",
          "item": "https://www.sp-financials.com/services"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Awards & Honors",
          "item": "https://www.sp-financials.com/achievements"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Client Reviews",
          "item": "https://www.sp-financials.com/testimonials"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Contact & Consultation",
          "item": "https://www.sp-financials.com/contact"
        }
      ]
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
