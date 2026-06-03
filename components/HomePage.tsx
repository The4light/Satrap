"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { SCHOOL_DATA } from "../config/SchoolData";

// ─── FRAMER MOTION ANIMATION PRESETS ───────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1] } 
  }
};

export default function HomePage() {
  const data = SCHOOL_DATA.home;

  // CAROUSEL CONFIGURATION
  const carouselImages = [
    "/satrap-one.jpg",
    "/satrap-two.jpg",
    "/satrap-three.jpg",
    "/satrap-four.jpg"
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3D Mouse Parallax State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Handle subtle 3D tilt movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateX(-y / 35);
    setRotateY(x / 35);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="w-full min-h-screen bg-[#fcfdfe] text-[#191c1e] antialiased">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative h-[75vh] md:h-[85vh] min-h-[650px] w-full overflow-hidden bg-[#131b2e] pt-24 md:pt-32 pb-12 flex flex-col justify-between">
        {/* BACKGROUND IMAGE CAROUSEL LAYER */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-[#0b1329]/55 absolute inset-0 z-10" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {carouselImages.map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105"
              style={{ 
                backgroundImage: `url(${src})`,
                opacity: index === currentSlide ? 0.5 : 0,
                zIndex: index === currentSlide ? 5 : 1
              }}
            />
          ))}
        </div>

        {/* FOREGROUND INTERFACE */}
        <div className="relative z-30 w-full px-6 md:px-16 max-w-7xl mx-auto text-white h-full flex flex-col justify-between items-start flex-1">
          
          {/* SUBTLE 3D TILT CONTAINER PANEL */}
          <motion.div 
            className="max-w-3xl space-y-5 p-2 rounded-xl transition-all duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* RESPONSIVE BADGE */}
            <motion.span 
              className="text-[#5bb8fe] text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase block bg-[#5bb8fe]/10 border border-[#5bb8fe]/20 w-max max-w-full px-2 sm:px-3 py-1 rounded-sm whitespace-normal sm:whitespace-nowrap"
              style={{ transform: "translateZ(20px)" }}
              variants={fadeInUp}
            >
              {data.hero.badge}
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-[65px] font-bold tracking-tight leading-none font-serif"
              style={{ transform: "translateZ(40px)" }}
              variants={fadeInUp}
            >
              Building a <br />
              <span className="italic font-normal text-[#5bb8fe]">Brighter Tomorrow</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg max-w-xl opacity-95 font-normal leading-relaxed text-slate-200 font-sans"
              style={{ transform: "translateZ(30px)" }}
              variants={fadeInUp}
            >
              {SCHOOL_DATA.brand.missionStatement}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-1" 
              style={{ transform: "translateZ(15px)" }}
              variants={fadeInUp}
            >
              <Link
                href="/admission"
                className="bg-[#ba1a1a] text-white transition-all duration-300 hover:bg-[#93000a] hover:shadow-lg hover:shadow-[#ba1a1a]/20 px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider text-center"
              >
                {data.hero.ctaText}
              </Link>
              
              <Link 
                href="/facilities"
                className="bg-transparent border border-white/30 hover:border-white/80 hover:bg-white/5 px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 text-center justify-center"
              >
                Explore Facilities
              </Link>
            </motion.div>
          </motion.div>

          {/* BOTTOM LEFT PROFESSIONAL INTERACTIVE DASH INDICATORS */}
          <div className="mt-auto mb-4 flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 z-40 w-max select-none">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative focus:outline-none py-1"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    index === currentSlide 
                      ? "w-8 bg-[#5bb8fe]" 
                      : "w-3 bg-white/40 group-hover:bg-white/75"
                  }`} 
                />
              </button>
            ))}
            <span className="text-[10px] tracking-widest uppercase font-bold text-white/60 pl-1 font-sans">
              0{currentSlide + 1}
            </span>
          </div>

        </div>
      </section>
      {/* ─── 2. PRESTIGE METRICS BAR ─────────────────────────────────── */}
      <section className="bg-[#f2f4f6] border-y border-[#c6c6cd]/30 py-10 relative z-40 shadow-sm">
        <div className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          {data.features.map((feat, index) => (
            <React.Fragment key={feat.title}>
              <motion.div 
                className="flex items-start gap-4 flex-1 max-w-md"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#006398] p-2 bg-[#006398]/5 rounded-sm shrink-0">
                  <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-[#191c1e] uppercase mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#45464d] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>

              {index < data.features.length - 1 && (
                <div className="w-px h-12 bg-[#c6c6cd]/60 hidden md:block shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ─── 3. WELCOME ADDRESS BY THE HEAD OF SCHOOL ────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 aspect-[4/5] bg-slate-100 border border-slate-200 p-2 rounded-sm shadow-sm relative group"
          >
            <img 
              src="/Mrs.-Iyabo-Payne-Head-of-School.jpg" 
              alt={data.welcomeSection.author}
              className="w-full h-full object-cover rounded-xs transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#131b2e]/90 backdrop-blur-md p-4 border-l-4 border-[#006398] text-white">
              <p className="font-serif text-base font-bold">{data.welcomeSection.author}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">{data.welcomeSection.role}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398] block">Institutional Address</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight leading-tight">
              Welcome Address by the <br />Head of School
            </h2>
            <div className="w-12 h-1 bg-[#ba1a1a]" />
            <p className="text-base text-slate-600 leading-relaxed font-sans pt-2">
              {data.welcomeSection.quote}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our recent school upgrades signal a bold future-forward standard in learning formats. We cultivate curiosity, honor community ethics, and foster resilience within customized configurations.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006398] hover:text-[#ba1a1a] transition-colors group">
                {data.welcomeSection.ctaText}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. OUR UNIQUENESS GRID ─────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc] border-y border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#006398]">Why Satrop</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#131b2e] mt-2 mb-4">Our Uniqueness</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-16">
            We provide standard specialized structural assets aimed at developing robust global core competencies.
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {data.uniqueness.map((item) => (
              <motion.div 
                key={item.title}
                variants={fadeInUp}
                className="p-6 bg-white border border-slate-200/60 shadow-xs rounded-sm flex flex-col items-center justify-center text-center group hover:border-[#006398] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#006398]/5 flex items-center justify-center text-[#006398] mb-4 group-hover:bg-[#006398] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <p className="text-xs font-bold text-[#131b2e] tracking-tight uppercase leading-snug">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. SMALL CLASS SIZE & PROMISE FLOW ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 order-2 lg:order-1"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398] block">
              Personalized Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#131b2e] tracking-tight">
              {data.classSize.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 font-sans">
              {data.classSize.desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {data.classSize.points.map((pt) => (
                <div key={pt.title} className="p-5 border border-slate-100 bg-[#f8fafc] rounded-xs relative group">
                  <div className="w-1 h-full bg-[#006398] absolute left-0 top-0 rounded-l-xs group-hover:bg-[#ba1a1a] transition-colors" />
                  <h4 className="text-sm font-bold text-[#131b2e] mb-2">{pt.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pt.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/facilities" 
                className="px-6 py-3.5 bg-[#006398] hover:bg-[#131b2e] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-md shadow-[#006398]/10"
              >
                {data.classSize.ctaText}
              </Link>
            </div>
          </motion.div>

          {/* ─── OFFSET GRAPHIC STACK CONTAINER ────────────────────────── */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 order-1 lg:order-2">
            <div className="relative w-full max-w-[380px] aspect-[4/5]">
              
              {/* The Shifting Colored Geometric Backdrop Layer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 10, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-0 left-0 w-[90%] h-[90%] bg-[#006398] rounded-xs shadow-lg" 
              />

              {/* The Foreground Visual Image Layer with Micro Glass Framing */}
              <motion.div 
                initial={{ opacity: 0, x: -15, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-white p-2 rounded-xs shadow-2xl border border-slate-100"
              >
                <img 
                  src="/Smartboard-class-size.jpg"
                  alt="Small Class Configuration Setup" 
                  className="w-full h-full object-cover rounded-xs" 
                />
              </motion.div>

            </div>
          </div>

        </div>
      </section>
      
     {/* ─── 6. LATEST UPDATES (NEWSLETTER / GALLERY FEED) ──────────── */}
<section className="py-24 bg-[#f8fafc] border-t border-slate-200/60">
  <div className="max-w-7xl mx-auto px-6 sm:px-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398]">Stay Informed</span>
        <h2 className="font-serif text-3xl font-bold text-[#131b2e] mt-1">Latest Updates & News</h2>
      </div>
      <Link href="/news" className="text-xs font-bold uppercase tracking-wider text-[#006398] hover:text-[#ba1a1a] transition-colors flex items-center gap-1 border-b border-[#006398]/30 pb-0.5">
        Open News Gallery
        <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* CARD 1 Linked */}
      <Link href="/news" className="bg-white border border-slate-200/60 rounded-sm overflow-hidden flex flex-col group shadow-xs transition-all hover:shadow-md">
        <div className="h-48 bg-slate-200 overflow-hidden relative">
          <div className="absolute top-3 left-3 bg-[#006398] text-white font-mono text-[10px] uppercase font-bold px-2 py-1 rounded-xs tracking-wider z-10">Announcement</div>
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('/news.jpg')` }} />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Academic Year 2025/2026</p>
            <h3 className="text-base font-bold font-serif text-[#131b2e] mb-3 line-clamp-2 group-hover:text-[#006398] transition-colors">Our Ultra-Modern Renovation Upgrade Project Launch</h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Satrop Schools marks a bold new chapter with state-of-the-art interactive playground modules and pristine instructional lab kits built for immediate integration.</p>
          </div>
          <span className="text-xs font-bold text-[#ba1a1a] mt-6 inline-block uppercase tracking-wider">Read Article</span>
        </div>
      </Link>

      {/* CARD 2 Linked */}
      <Link href="/news" className="bg-white border border-slate-200/60 rounded-sm overflow-hidden flex flex-col group shadow-xs transition-all hover:shadow-md">
        <div className="h-48 bg-slate-200 overflow-hidden relative">
          <div className="absolute top-3 left-3 bg-[#ba1a1a] text-white font-mono text-[10px] uppercase font-bold px-2 py-1 rounded-xs tracking-wider z-10">Admissions</div>
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('news2.jpg')` }} />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">Enrollment Open</p>
            <h3 className="text-base font-bold font-serif text-[#131b2e] mb-3 line-clamp-2 group-hover:text-[#006398] transition-colors">Securing Entry Slots For Modern Curriculum Tracking</h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Registration parameters are active for parent partnerships. Secure tailored placement tracks structured directly on personal moral code parameters.</p>
          </div>
          <span className="text-xs font-bold text-[#ba1a1a] mt-6 inline-block uppercase tracking-wider">Read Article</span>
        </div>
      </Link>

      {/* Newsletter Subscription Card (Remains fully functional locally) */}
      <div className="bg-[#131b2e] text-white border border-[#1d273f] rounded-sm p-8 flex flex-col justify-between relative overflow-hidden shadow-md">
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#006398]/10 rounded-full blur-xl pointer-events-none" />
        <div>
          <span className="material-symbols-outlined text-3xl text-[#5bb8fe] mb-4 block">mail_lock</span>
          <h3 className="text-lg font-bold font-serif mb-2">Subscribe to News</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">Receive priority operational letters, term dates, and specialized circular reports directly in your mail inbox.</p>
        </div>
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="Parent's Email Address" 
            className="w-full bg-[#1c263f] text-xs font-medium text-white placeholder-slate-500 px-4 py-3 rounded-xs border border-slate-700/50 focus:outline-hidden focus:border-[#5bb8fe] transition-colors"
          />
          <button className="w-full bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xs transition-colors">
            Join Newsletter
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ─── 7. HIGH-IMPACT JOIN US TODAY CTA SECTION ────────────────── */}
      <section className="bg-[#131b2e] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba1a1a]/5 skew-x-12 transform translate-x-20 hidden md:block pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#006398]/5 -skew-x-12 transform -translate-x-20 hidden md:block pointer-events-none" />

        <div className="px-6 md:px-16 max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5bb8fe]">Enrollment Portal Active</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
            Secure Your Child’s Place <br />in Our Legacy
          </h2>
          <p className="text-[#9ea6bf] text-base max-w-xl mx-auto leading-relaxed">
            Admissions for the current academic session are actively processing. Give your child the definitive advantage of standard facilities, moral foundations, and international scope.
          </p>
          <div className="w-16 h-0.5 bg-[#ba1a1a] mx-auto my-4" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link 
              href="/admission" 
              className="w-full sm:w-auto bg-[#ba1a1a] hover:bg-[#93000a] text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-black/20"
            >
              Join Us Today
            </Link>
            <a 
              href={`https://wa.me/${SCHOOL_DATA.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/60 text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              Chat With Admissions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}