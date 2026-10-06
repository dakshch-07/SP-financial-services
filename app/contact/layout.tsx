import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SP Financial Services | Kurla West Office and WhatsApp Mumbai",
  description: "Book a free consultation with Sachin Pandit at Unit No. 4, Parmar Industrial Estate, Bail Bazar, Kurla West, Mumbai 400070. Call +91 98705 77706 or WhatsApp today.",
  alternates: {
    canonical: "https://www.sp-financials.com/contact",
  },
  openGraph: {
    title: "Contact Sachin Pandit | SP Financial Services Mumbai",
    description: "Get in touch for in-person or online financial advisory for LIC, Health Insurance, and SIP portfolios.",
    url: "https://www.sp-financials.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
