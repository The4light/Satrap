"use client";

import { motion } from "framer-motion";

export default function AdmissionHero() {
  return (
    <section className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden bg-[#131b2e] pt-20 md:pt-0">
      {/* Cinematic Campus Backdrop Canvas */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-40 scaling-trend"
        style={{
          backgroundImage: `url('/satrap-one.jpg')`, // Clean local asset fallback path
        }}
        role="img"
        aria-label="Satrop Academic Hall"
      />
      
      {/* Pure Gradient Darkener Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-black/60 pointer-events-none" />

      {/* Content Canvas */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto space-y-4">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Admission Form: Join us at Satrop Schools
        </motion.h1>
        
        <motion.p 
          className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto font-sans leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Begin your journey toward excellence. Our admissions process is designed to identify students who will thrive in our rigorous academic environment.
        </motion.p>
      </div>
    </section>
  );
}