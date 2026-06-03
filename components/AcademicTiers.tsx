"use client";

import { motion, Variants } from "framer-motion";

export default function AcademicTiers() {
  // Stagger transition configuration for the grid layout entrance
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Smooth slide-up transition setup for each card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 px-5 md:px-16 max-w-7xl mx-auto">
      {/* SECTION HEADER BLOCK */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-[#191c1e]">
          Academic Excellence Tiers
        </h2>
        <div className="h-1 w-24 bg-[#006398] mx-auto mb-6" />
        <p className="text-base text-[#45464d]">
          A curriculum meticulously crafted to nurture minds from the earliest discovery to the heights of elementary mastery.
        </p>
      </div>

      {/* ASYMMETRIC BENTO GRID CONTAINER */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        
        {/* TIER 1: CRECHE (Col Span 7) */}
        <motion.div 
          className="md:col-span-7 relative group overflow-hidden rounded-xl border border-[#c6c6cd]/30 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[350px] md:min-h-auto"
          variants={cardVariants}
        >
          {/* Framed Asset Canvas Shell */}
          <div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-110 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 p-10 text-white z-20">
            <span className="text-[#cce5ff] text-sm font-semibold mb-2 block tracking-widest uppercase">
              Ages 3m - 18m
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Creche</h3>
            <p className="text-sm md:text-base opacity-80 max-w-md">
              Safe, nurturing, and cognitively stimulating care for our youngest learners in a sanctuary of comfort.
            </p>
            <button className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all">
              Learn More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* TIER 2: NURSERY (Col Span 5) */}
        <motion.div 
          className="md:col-span-5 relative group overflow-hidden rounded-xl border border-[#c6c6cd]/30 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[350px] md:min-h-auto"
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-slate-700 transition-transform duration-700 group-hover:scale-110 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 p-10 text-white z-20">
            <span className="text-[#cce5ff] text-sm font-semibold mb-2 block tracking-widest uppercase">
              Ages 18m - 4y
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Nursery</h3>
            <p className="text-sm md:text-base opacity-80">
              Building the foundations of literacy and creative exploration through structured play.
            </p>
          </div>
        </motion.div>

        {/* TIER 3: ELEMENTARY (Col Span 5) */}
        <motion.div 
          className="md:col-span-5 relative group overflow-hidden rounded-xl border border-[#c6c6cd]/30 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[350px] md:min-h-auto"
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-slate-700 transition-transform duration-700 group-hover:scale-110 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 p-10 text-white z-20">
            <span className="text-[#cce5ff] text-sm font-semibold mb-2 block tracking-widest uppercase">
              Primary Years
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Elementary</h3>
            <p className="text-sm md:text-base opacity-80">
              A world-class curriculum focused on critical thinking, coding, and global leadership skills.
            </p>
          </div>
        </motion.div>

        {/* TIER 4: AFTER SCHOOL CARE (Col Span 7) */}
        <motion.div 
          className="md:col-span-7 relative group overflow-hidden rounded-xl border border-[#c6c6cd]/30 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[350px] md:min-h-auto"
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-110 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 p-10 text-white z-20">
            <span className="text-[#cce5ff] text-sm font-semibold mb-2 block tracking-widest uppercase">
              Beyond the Bell
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">After School Care</h3>
            <p className="text-sm md:text-base opacity-80 max-w-md">
              Enrichment programs including robotics, foreign languages, and sports in a secure luxury campus.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}