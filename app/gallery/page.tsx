import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PageHero } from "@/components/PageHero";
import { Award, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery & Milestone Moments | SP Financial Services Mumbai",
  description:
    "Explore photos of MDRT USA awards, LIC corporate felicitations, educational video reels, and client consultation moments with Sachin Pandit & Rakhi Pandit in Mumbai.",
  alternates: {
    canonical: "https://www.sp-financials.com/gallery",
  },
  openGraph: {
    title: "Gallery & Awards Showcase | SP Financial Services",
    description: "20+ years of award-winning financial consulting, trophies, and client success milestones in Kurla, Mumbai.",
    url: "https://www.sp-financials.com/gallery",
  },
};

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Founders Portrait - Sachin Pandit & Rakhi Pandit",
    category: "Leadership",
    image: "/images/founders-portrait.png",
    alt: "Sachin Pandit (7x MDRT USA Winner) and Rakhi Pandit, Founders of SP Financial Services in Kurla, Mumbai",
    description: "MDRT USA Award-winning leadership serving over 2,000+ families across Mumbai.",
  },
  {
    id: 2,
    title: "Kya Term Insurance Zaruri Hai? (Awareness Session)",
    category: "Financial Awareness",
    image: "/images/reels/reel-term-insurance-zaruri.jpg",
    alt: "Sachin and Rakhi Pandit hosting financial literacy session on Term Life Insurance",
    description: "Spreading awareness on the critical necessity of high-cover pure term protection.",
  },
  {
    id: "3",
    title: "₹1,00,000 Monthly Lifelong LIC Pension Plan",
    category: "Retirement Planning",
    image: "/images/reels/reel-lic-pension-1lakh.jpg",
    alt: "LIC Pension Plan consultation for guaranteed lifelong retirement income by Sachin Pandit",
    description: "Structuring guaranteed post-retirement income streams for senior professionals.",
  },
  {
    id: 4,
    title: "Step-Up SIP & Mutual Funds Compounding",
    category: "Wealth Multiplication",
    image: "/images/reels/reel-topup-sip.jpg",
    alt: "Mutual Fund Step-Up SIP investment strategy and wealth multiplication guide",
    description: "Guiding young professionals on multiplying wealth through disciplined SIPs.",
  },
  {
    id: 5,
    title: "Mediclaim & Health Insurance Shield",
    category: "Health Protection",
    image: "/images/reels/reel-mediclaim-warning.jpg",
    alt: "Emergency health insurance and cashless mediclaim advisory session by SP Financial Services",
    description: "Protecting families against sudden hospitalization and catastrophic medical expenses.",
  },
  {
    id: 6,
    title: "Why Choose a Certified Professional Advisor?",
    category: "MDRT Standards",
    image: "/images/reels/reel-why-choose-professional.jpg",
    alt: "MDRT USA professional advisory standards comparison by Sachin Pandit Mumbai",
    description: "Adhering to strict international fiduciary standards for ethical financial planning.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery & Moments"
        subtitle="A visual retrospective of our 20+ years of award-winning financial advisory, community awareness, and client milestones."
        breadcrumb="Gallery"
      />

      <SectionWrapper className="bg-cream-100 organic-texture py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-md hover:shadow-xl hover:border-gold-400/50 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-950">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-gold-400/40 text-gold-300 text-[11px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 group-hover:text-gold-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between text-xs text-forest-800 font-semibold">
                    <span className="inline-flex items-center gap-1 text-gold-700">
                      <Shield className="w-3.5 h-3.5" /> SP Financial Services
                    </span>
                    <span>Mumbai</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-400/30 text-center shadow-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Secure Your Family&apos;s Financial Future?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6">
              Connect with 7x MDRT USA Consultant Sachin Pandit for a customized, confidential financial consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors shadow-gold"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
