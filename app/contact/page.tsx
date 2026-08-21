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
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PrimaryButton } from "@/components/Buttons";
import { slideInLeft, fadeUp } from "@/lib/motion-variants";
import { BUSINESS_INFO } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    insuranceType: "Life Insurance",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp or mailto prefilled as convenience
      const text = `Hello Sachin Pandit, I am ${formData.name} (${formData.phone}). I am interested in ${formData.insuranceType}. Note: ${formData.message}`;
      const waUrl = `https://wa.me/919870577706?text=${encodeURIComponent(text)}`;
      // Optional direct redirect if desired, or user sees confirmation checkmark
    }, 1000);
  };

  return (
    <>
      {/* =========================================================================
          1. PAGE HERO (~40vh)
         ========================================================================= */}
      <section className="relative min-h-[40vh] bg-gradient-to-b from-[#0B2A55] via-[#0E356A] to-[#123B7A] text-white flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 subtle-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto font-medium">
            &ldquo;A goal without a plan is just a wish — let&apos;s build yours together.&rdquo;
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. CONTACT INFO + ENQUIRY FORM (Two-Column Desktop / Stacked Mobile)
         ========================================================================= */}
      <SectionWrapper className="bg-warmBg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0B2A55] to-[#123B7A] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-gold-400/30">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6 border border-gold-400/30">
                <Sparkles className="w-3.5 h-3.5" /> Direct Contact Channels
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
                SP Financial Services
              </h2>

              {/* Contact Rows with Left-Slide Stagger */}
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
                    <p className="text-sm text-gray-200 mt-1 leading-relaxed">
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
                    <p className="text-sm text-white font-semibold mt-1">
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
                    <p className="text-sm text-white font-semibold mt-1">
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
                      className="text-sm text-white hover:text-gold-300 transition-colors mt-1 block"
                    >
                      {BUSINESS_INFO.contact.email}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Channels with Hover Micro-Interactions */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-4">
                <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                  Follow Us:
                </span>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  href={BUSINESS_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-pink-600/30 text-pink-400 transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  href={BUSINESS_INFO.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-red-600/30 text-red-400 transition-colors shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-1 block">
                  Book Free Consultation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill in your details below. Sachin Pandit will review and respond within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-emerald-900">
                      Enquiry Received!
                    </h4>
                    <p className="text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you <strong>{formData.name}</strong>. We have received your request for{" "}
                      <strong>{formData.insuranceType}</strong>. Sachin Pandit will contact you
                      promptly at <strong>{formData.phone}</strong>.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/919870577706?text=${encodeURIComponent(
                          `Hello Sachin, I just submitted an inquiry for ${formData.insuranceType}. Name: ${formData.name}, Phone: ${formData.phone}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Message on WhatsApp Now
                      </a>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-semibold text-gray-500 hover:text-gray-800 underline"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 bg-warmBg text-navy-900 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98705 XXXXX"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 bg-warmBg text-navy-900 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 bg-warmBg text-navy-900 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Insurance Type Dropdown */}
                    <div>
                      <label
                        htmlFor="insuranceType"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
                      >
                        Area of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="insuranceType"
                        value={formData.insuranceType}
                        onChange={(e) =>
                          setFormData({ ...formData, insuranceType: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 bg-warmBg text-navy-900 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="Life Insurance (LIC)">Life Insurance (LIC Plans)</option>
                        <option value="Health / Mediclaim Insurance (Star Health)">
                          Health / Mediclaim Insurance (Star Health)
                        </option>
                        <option value="Motor Insurance (HDFC ERGO)">
                          Motor Insurance (HDFC ERGO)
                        </option>
                        <option value="Mutual Fund & SIP Investments (NJ Wealth)">
                          Mutual Fund &amp; SIP Investments (NJ Wealth)
                        </option>
                        <option value="Retirement & Pension Solutions">
                          Retirement &amp; Pension Solutions
                        </option>
                        <option value="Child Education / Marriage Fund">
                          Child Education / Marriage Fund
                        </option>
                        <option value="Corporate / Group Mediclaim">Corporate / Group Mediclaim</option>
                        <option value="Other Financial Advisory">Other Financial Advisory</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2"
                      >
                        Your Message or Requirements (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, current policies, or specific questions..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 bg-warmBg text-navy-900 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#D4AF37] text-navy-900 font-bold uppercase tracking-widest text-sm shadow-gold hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Backend integration note */}
                    {/* Note for production: Connect this form handler to Formspree, Resend, or your custom SMTP backend endpoint */}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          3. MAP EMBED
         ========================================================================= */}
      <SectionWrapper className="bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-2 block">
            Visit Our Office
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy-900">
            Sayba Palace, Kurla (W), Mumbai
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Conveniently situated near the New Post Office on Wadia Marg, Kurla West.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-card border border-gray-200 h-[380px] sm:h-[450px]">
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

      {/* =========================================================================
          4. FINAL TRUST TAGLINE BAND
         ========================================================================= */}
      <section className="bg-[#061833] text-white py-12 border-t border-gold-400/20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 font-bold tracking-wide">
            Trusted Advice · Tailored Solutions · Your Future, Our Priority
          </p>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
            SP Financial Services — Sachin Pandit &amp; Rakhi Pandit
          </p>
        </div>
      </section>
    </>
  );
}
