"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SCHOOL_DATA } from "../../config/SchoolData";

// ─── ANIMATION PRESETS ────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function CampusFacilities() {
  const { modernFacilitiesIntro, mainFeatures, services, otherFacilitiesGrid } = SCHOOL_DATA.facilities;

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] antialiased min-h-screen selection:bg-[#006398]/10">
      
      {/* ─── 1. HERO BRANDING HEADER ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#006398] block">
            {modernFacilitiesIntro.title}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#131b2e]">
            Engineered For Excellence
          </h1>
          <p className="text-sm sm:text-base text-[#45464d] max-w-2xl mx-auto leading-relaxed font-sans">
            {modernFacilitiesIntro.description}
          </p>
        </motion.div>
      </section>

      {/* ─── 2. QUICK INTRODUCTION BULLETS GRID ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {modernFacilitiesIntro.bullets.map((bullet, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200/60 rounded-xs shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-[#006398]/10 text-[#006398] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <p className="text-xs font-medium text-slate-700 font-sans">{bullet}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── 3. CORE SPECIALIZED SPACES (STAGGERED EDITORIAL LAYOUT) ────────── */}
      <section className="max-w-6xl mx-auto px-6 mb-32 space-y-24">
        <div className="text-center mb-20 space-y-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#ba1a1a] block">Creative & Scientific Ecosystems</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#131b2e]">
            Specialized Instructional Labs & Studios
          </h2>
          <div className="h-[2px] w-12 bg-[#006398] mx-auto mt-2" />
        </div>

        <div className="space-y-20">
          {mainFeatures.map((feature, idx) => {
            const cardImage = Array.isArray(feature.images) ? feature.images[0] : feature.image;
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Asymmetric Image Wrapper with Floating Frame Effect */}
                <div className="w-full lg:w-3/5 relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#006398]/5 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="overflow-hidden border border-slate-200/80 bg-white p-2 rounded-sm shadow-xs transition-shadow duration-500 group-hover:shadow-md">
                    <img
                      src={cardImage || "/images/facilities/fallback.jpg"}
                      alt={feature.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </div>

                {/* Elegant Typography Block */}
                <div className="w-full lg:w-2/5 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#ba1a1a] font-bold tracking-wider">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="h-[1px] w-8 bg-slate-200" />
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#131b2e] tracking-tight hover:text-[#006398] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed font-sans font-normal border-l-2 border-slate-200 pl-4 py-1 italic">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── 4. HIGH-GRADE PREMIUM SHOCK-ABSORBENT TURF SPOTLIGHT ───────────── */}
      <section className="bg-[#131b2e] text-white py-20 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5bb8fe] block">
              {services.title} Spotlight
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white leading-tight">
              Premium Shock-Absorbent <br />Artificial Turf Arena
            </h2>
            <div className="w-12 h-1 bg-[#ba1a1a]" />
            <p className="text-xs font-sans text-slate-300 leading-relaxed">
              {services.highlightText}
            </p>
            
            {/* Value Check tags */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {services.list.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-xs text-[#5bb8fe]">verified</span>
                  <span className="text-[11px] uppercase tracking-wider font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side View Slider Mock Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {services.images.slice(0, 4).map((imgUrl, imgIdx) => (
              <div 
                key={imgIdx} 
                className={`overflow-hidden border border-white/10 rounded-xs bg-slate-800 ${
                  imgIdx === 0 ? "aspect-square" : "aspect-video lg:aspect-auto"
                }`}
              >
                <img 
                  src={imgUrl} 
                  alt={`Playground Surface Frame ${imgIdx + 1}`} 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. FULL UTILITY OVERVIEW GRID (OTHER FACILITIES) ────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-28">
        <div className="bg-[#eceef0]/60 p-8 md:p-12 rounded-sm border border-slate-200/60">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#131b2e]">
              Comprehensive Campus Provisions
            </h2>
            <p className="text-xs text-slate-500 font-sans mt-1">Meticulously managed systems across our Abijo layout.</p>
          </div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {otherFacilitiesGrid.map((facility, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-6 border border-slate-200/80 text-center rounded-xs flex flex-col items-center justify-center space-y-3 group hover:border-[#006398] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 text-[#131b2e] group-hover:bg-[#006398] group-hover:text-white flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-xl">{facility.icon}</span>
                </div>
                <p className="text-xs font-bold text-[#131b2e] uppercase tracking-tight font-sans">
                  {facility.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}