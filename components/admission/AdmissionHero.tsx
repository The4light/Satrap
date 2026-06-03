"use client";

import { motion } from "framer-motion";

export default function AdmissionHero() {
  return (
    <section className="relative h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden bg-[#131b2e]">
      {/* Cinematic Campus Backdrop Canvas */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-40 scaling-trend"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0u_HbMs_Qk3yj9XD1f_yIKTa7WrA42bt-jWqo-iJYg7IDCCreFUShMasGEKtUv5uITokMYXgYP_1U5I9BsiZxkL7h7zDTRfIZ0_XNJNcGn8BQvqqaEo_vqauG4KZxMJFsGqEuDsPBzb3lv-5-946UW8lry-R_0im0vKg1moQmfbY_fhRykOABzrkiIl7Yl9OgFxWX7ox-KOq30vgPyBcYh_I0DTHhNJed-Mk1os0l7a4LAlpVg9bccpWqQ-eiefIsaOTV4nq9Xwo')`,
        }}
        role="img"
        aria-label="Satrop Academic Hall"
      />
      
      {/* Pure Gradient Darkener Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-black/50 pointer-events-none" />

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
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed"
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