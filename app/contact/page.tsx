"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  MessageCircle,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PageHero } from "@/components/PageHero";
import { slideInLeft } from "@/lib/motion-variants";
import { BUSINESS_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestType: "Mutual Fund & SIP",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <>
      {/* High-Contrast Luxury Page Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="A goal without a plan is just a wish — let's build yours together."
        breadcrumb="Contact Us"
      />

      {/* Contact Details & Form */}
      <SectionWrapper className="bg-cream-100 organic-texture">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-forest-950 to-forest-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-gold-400/30">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6 border border-gold-400/30">
                <Sparkles className="w-3.5 h-3.5" /> Direct Contact
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                SP Financial Services
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <motion.div variants={slideInLeft} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-gold-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-relaxed">
                      {BUSINESS_INFO.contact.fullAddressDetails}
                    </p>
                  </div>
                </motion.div>

                {/* Sachin Pandit */}
                <motion.div variants={slideInLeft} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-gold-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Sachin Pandit (MDRT Advisor)
                    </h3>
                    <p className="text-sm text-white font-semibold mt-0.5">
                      {BUSINESS_INFO.founders[0].phoneDisplay}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href={`tel:${BUSINESS_INFO.founders[0].phone}`}
                        className="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-medium transition-colors"
                      >
                        Call Direct
                      </a>
                      <a
                        href={BUSINESS_INFO.founders[0].whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-emerald-600/50 hover:bg-emerald-600/70 text-emerald-200 text-xs font-medium transition-colors flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Rakhi Pandit */}
                <motion.div variants={slideInLeft} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-gold-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Rakhi Pandit (Financial Advisor)
                    </h3>
                    <p className="text-sm text-white font-semibold mt-0.5">
                      {BUSINESS_INFO.founders[1].phoneDisplay}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href={`tel:${BUSINESS_INFO.founders[1].phone}`}
                        className="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-medium transition-colors"
                      >
                        Call Direct
                      </a>
                      <a
                        href={BUSINESS_INFO.founders[1].whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-emerald-600/50 hover:bg-emerald-600/70 text-emerald-200 text-xs font-medium transition-colors flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={slideInLeft} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-gold-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.contact.email}`}
                      className="text-xs sm:text-sm text-white hover:text-gold-300 transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.contact.email}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                  Socials:
                </span>
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={BUSINESS_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 text-pink-400"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href={BUSINESS_INFO.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 text-red-400"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-cream-300">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-1 block">
                  Book Free Consultation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill in your details below. Sachin Pandit will personally review and contact you
                  promptly.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-emerald-950">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto">
                      Thank you <strong>{formData.name}</strong>. We have noted your interest in{" "}
                      <strong>{formData.interestType}</strong>. Sachin Pandit will contact you at{" "}
                      <strong>{formData.phone}</strong>.
                    </p>

                    <div className="pt-3">
                      <a
                        href={`https://wa.me/919870577706?text=${encodeURIComponent(
                          `Hello Sachin Pandit, I just submitted an inquiry for ${formData.interestType}. Name: ${formData.name}, Phone: ${formData.phone}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" /> Message on WhatsApp Now
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-800/10 bg-cream-50 text-forest-900 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98705 XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-800/10 bg-cream-50 text-forest-900 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-800/10 bg-cream-50 text-forest-900 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Area of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.interestType}
                        onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-800/10 bg-cream-50 text-forest-900 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="Mutual Fund & SIP (NJ Wealth)">Mutual Fund &amp; SIP (NJ Wealth)</option>
                        <option value="Life Insurance (LIC Plans)">Life Insurance (LIC Plans)</option>
                        <option value="Health / Mediclaim (Star Health)">Health / Mediclaim (Star Health)</option>
                        <option value="Home Loan & EMI Planning">Home Loan &amp; EMI Planning</option>
                        <option value="Motor Insurance (HDFC ERGO)">Motor Insurance (HDFC ERGO)</option>
                        <option value="Retirement & Pension Plan">Retirement &amp; Pension Plan</option>
                        <option value="Child Education / Marriage Fund">Child Education / Marriage Fund</option>
                        <option value="Corporate / Group Mediclaim">Corporate / Group Mediclaim</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
                        Message / Query (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-800/10 bg-cream-50 text-forest-900 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-forest-950 font-bold uppercase tracking-widest text-xs sm:text-sm shadow-gold hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Google Map Embed */}
      <SectionWrapper className="bg-white border-t border-cream-300">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700 mb-2 block">
            Visit Our Kurla Office
          </span>
          <h2 className="font-serif fluid-h2 font-bold text-forest-900">
            Sayba Palace, Kurla (W), Mumbai
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-card border border-cream-300 h-[360px] sm:h-[420px]">
          <iframe
            src={BUSINESS_INFO.contact.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SP Financial Services Location Map"
          />
        </div>
      </SectionWrapper>
    </>
  );
}
