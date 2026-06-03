    "use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SCHOOL_DATA } from "../../config/SchoolData";
import ContactForm from "../../components/contacts/ContactForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const }
  }
};

export default function ContactPage() {
  const { phone, email, address } = SCHOOL_DATA.contact;

  // Build string format for the address blocks safely
  const formattedAddress = `${address.street}, ${address.estate}, ${address.highway}, ${address.area}, ${address.cityState}, ${address.country}.`;

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] antialiased min-h-screen pt-32 pb-24 selection:bg-[#006398]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* ─── HERO BRANDING HEADER ────────────────────────────────────────── */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#006398] block">
            Connect With Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#131b2e]">
            Begin the Conversation
          </h1>
          <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed font-sans">
            Have questions about admissions, curriculum structures, or scheduling a physical campus tour? Reach out directly to our administrative desk.
          </p>
        </div>

        {/* ─── TWO COLUMN FORM & DETAILS SPLIT ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* COLUMN 1: DIRECT COMMUNICATION CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 p-8 rounded-xs space-y-8 shadow-xs">
              
              {/* Phone Channel */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#006398]/5 text-[#006398] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#131b2e] uppercase tracking-wider font-sans mb-1">
                    Call Admissions
                  </h4>
                  <p className="text-sm font-semibold text-slate-700">{phone}</p>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">Mon - Fri • 8:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Email Channel */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#ba1a1a]/5 text-[#ba1a1a] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#131b2e] uppercase tracking-wider font-sans mb-1">
                    Email Correspondence
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 break-all">{email}</p>
                </div>
              </div>

              {/* Location Channel */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#131b2e] uppercase tracking-wider font-sans mb-1">
                    Campus Location
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                    {formattedAddress}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 2: ENQUIRY INTAKE FORM */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>

        {/* ─── EMBEDDED MAP SECTION ────────────────────────────────────────── */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#006398]">map</span>
            <h3 className="font-serif text-lg font-bold text-[#131b2e]">Find Our Campus Layout</h3>
          </div>
          <div className="w-full h-96 rounded-xs overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717140902266!2d3.7152341!3d6.4303493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf90fa6ca84eb%3A0x6b4ef8d4ec967759!2sAbijo%20Gra%2C%20Ibeju%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
              className="w-full h-full border-0 grayscale opacity-90 contrast-105"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </div>
  );
}