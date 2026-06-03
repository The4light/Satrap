"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { SCHOOL_DATA } from "../../config/SchoolData";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface LeaderCardProps {
  role: string;
  name: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

interface PillarCardProps {
  icon: string;
  title: string;
  description: string;
}

interface FrameworkItemProps {
  number: string;
  title: string;
  description: string;
}

// ─── ANIMATION PRESETS ────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.215, 0.61, 0.355, 1] as const 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <div className="group flex flex-col items-start text-left p-8 rounded-sm border border-slate-200 bg-white shadow-xs relative overflow-hidden transition-all duration-300 hover:border-[#006398] hover:shadow-md">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ba1a1a] scale-x-0 group-hover:scale-x-105 transition-transform origin-left duration-300" />
      <div className="w-12 h-12 rounded-xs flex items-center justify-center mb-6 bg-[#006398]/5 text-[#006398] group-hover:bg-[#006398] group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <h3 className="font-serif text-lg font-bold mb-3 text-[#131b2e] uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

function LeaderCard({ role, name, bio, imageSrc, imageAlt }: LeaderCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white border border-slate-200/80 rounded-sm shadow-xs">
      <div className="h-80 overflow-hidden relative bg-slate-900">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-xs leading-relaxed italic">
            {bio}
          </p>
        </div>
      </div>
      <div className="p-6 bg-white relative z-10">
        <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-[#006398]">
          {role}
        </p>
        <h4 className="font-serif text-base font-bold text-[#131b2e] tracking-tight mb-1">
          {name}
        </h4>
        <div className="w-6 h-0.5 bg-[#ba1a1a] mt-2 mb-4 group-hover:w-12 transition-all duration-300" />
        <div className="flex gap-3 text-slate-400">
          <span className="material-symbols-outlined cursor-pointer hover:text-[#006398] transition-colors text-lg">
            mail
          </span>
          <span className="material-symbols-outlined cursor-pointer hover:text-[#006398] transition-colors text-lg">
            call
          </span>
        </div>
      </div>
    </div>
  );
}

function FrameworkItem({ number, title, description }: FrameworkItemProps) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="flex-shrink-0 w-12 h-12 border border-slate-200 bg-white font-mono font-bold text-xs flex items-center justify-center text-[#ba1a1a] group-hover:bg-[#ba1a1a] group-hover:text-white transition-colors duration-300 shadow-xs">
        {number}
      </div>
      <div>
        <h4 className="font-serif text-base font-bold mb-1.5 text-[#131b2e] tracking-tight uppercase">
          {title}
        </h4>
        <p className="text-xs leading-relaxed text-slate-500 max-w-xl">{description}</p>
      </div>
    </div>
  );
}

// ─── MAIN ABOUT PAGE COMPONENT ────────────────────────────────────────────────
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");
  
const coreValues: PillarCardProps[] = [
    {
      icon: "gavel",
      title: "Integrity",
      description: "Cultivating transparent character traits, honesty, and an internal moral compass within every young mind.",
    },
    {
      icon: "auto_stories",
      title: "Excellence",
      description: "Pushing limits of conventional learning setups to cross global benchmarks using integrated academic paths.",
    },
    {
      icon: "shield_with_heart", // Fixed to valid material icon string
      title: "Discipline",        // Restored your proper section title
      description: "Fostering respect for structured peer ecosystems, community ethical codes, and personal accountability.",
    },
  ];

  const frameworkItems: FrameworkItemProps[] = [
    {
      number: "01",
      title: "Integrated Hybrid Curriculum",
      description: "Blending the thorough structural depth of the British National Curriculum with local Nigerian cultural contexts for deep dual-literacy mastery.",
    },
    {
      number: "02",
      title: "Early Years Montessori Method",
      description: "Hands-on, sensory-driven physical lab tools for learners between 3 months and 5 years, unlocking natural cognitive curiosity.",
    },
    {
      number: "03",
      title: "Key Stage 2 Specialization",
      description: "Targeted critical analysis setups for children aged 6 to 11, focusing heavily on creative problem solving and logical agility.",
    },
  ];

  const teamMembers: LeaderCardProps[] = [
    {
      role: "Head of School",
      name: "Mrs. O. Satrop",
      bio: "Dedicated to building standard operational frameworks driven by traditional moral integrity and international hybrid methodologies.",
      imageSrc: SCHOOL_DATA.home.welcomeSection.image,
      imageAlt: "Head of School Profile",
    },
    {
      role: "Lead Montessori Coordinator",
      name: "Academic Specialist",
      bio: "Focusing heavily on custom pre-school development structures, fine motor skill coordination, and play-based cognitive expansion.",
      imageSrc: SCHOOL_DATA.home.classSize.image,
      imageAlt: "Montessori Coordinator Profile",
    },
    {
      role: "Primary Pillar Head",
      name: "Curriculum Administrator",
      bio: "Directing the blended British-Nigerian primary syllabus pathways to challenge and stretch children based on personal strengths.",
      imageSrc: SCHOOL_DATA.home.promiseSection.images[0],
      imageAlt: "Primary Administrator Profile",
    },
  ];

  return (
    <main className="font-sans bg-[#f7f9fb] text-[#191c1e] antialiased">

      {/* ─── 1. HERO/FOUNDATIONAL OVERVIEW ──────────────────────────────────── */}
    <section className="relative flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[700px] border-b border-slate-200">
      
      {/* TEXT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center p-6 sm:p-12 md:p-16 z-10 bg-white">
        <div className="max-w-2xl space-y-6">
          <motion.span
            className="block text-xs font-bold uppercase text-[#006398] tracking-[0.25em]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            The Satrop Legacy
          </motion.span>

          <motion.h1
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#131b2e] tracking-tight leading-[1.1]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Nurturing Minds, <br />
            <span className="italic font-normal text-[#006398]">Grounded in Excellence</span>
          </motion.h1>

          <div className="w-12 h-1 bg-[#ba1a1a]" />

          <motion.div
            className="text-sm leading-relaxed text-slate-600 space-y-4 pt-2 font-sans"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p>
              <strong>SATROP SCHOOLS</strong> is a government-approved institution providing
              excellent foundational education for children from early years through to Key Stage 2.
              We warmly welcome children from 3 months to 5 years for Creche and Pre-school
              education, focusing deeply on the <strong>Montessori Method of learning</strong>.
            </p>
            <p>
              For children from 6 years to 11 years of age, we offer an excellent primary education
              based on a meticulously integrated <strong>British and Nigerian curricula</strong>.
            </p>
            <p>
              Our class sizes are intentionally small—with just one or two classes per year group.
              This allows our academic staff to take great care to encourage, monitor, and stretch
              children based directly on their individual needs, personal growth tracks, and
              strengths.
            </p>
          </motion.div>
        </div>
      </div>

      {/* IMAGE PANEL */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] bg-[#131b2e] overflow-hidden">

        {/* Full colour photo */}
        <img
          src="/satrap-about-one.png"
          alt="Satrop Schools Academic Environment"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.88) saturate(1.2)" }}
        />

        {/* Blue → red brand colour bar across the top */}
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{
            height: "5px",
            background: "linear-gradient(to right, #006398, #ba1a1a)",
          }}
        />

        {/* Bottom fade to navy */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#131b2e]/88" />

        {/* Overlay card */}
        <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#131b2e]/90 backdrop-blur-md text-white border-l-4 border-[#006398] shadow-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5bb8fe]">
            Government Approved Standard
          </p>
          <p className="mt-1 text-slate-300 text-xs leading-relaxed font-serif">
            Providing holistic pathways from infancy to 11 years with rigorous attention to detail.
          </p>
        </div>
      </div>

    </section>

      {/* ─── 2. DYNAMIC MISSION & VISION SELECTOR ───────────────────────────── */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200/60 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-12 border border-slate-200 p-1 bg-slate-100/80 rounded-sm max-w-sm mx-auto">
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all ${
                activeTab === "vision" ? "bg-[#131b2e] text-white shadow-xs" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all ${
                activeTab === "mission" ? "bg-[#131b2e] text-white shadow-xs" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Our Mission
            </button>
          </div>

          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === "vision" ? (
                <motion.div
                  key="vision-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <span className="material-symbols-outlined text-4xl text-[#ba1a1a]">visibility</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#131b2e]">To Lead in Quality Foundational Development</h2>
                  <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
                    To be a leading educational haven recognized across West Africa for forging the ideal blend of academic excellence, self-reliance, and uncompromising global character traits.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="mission-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <span className="material-symbols-outlined text-4xl text-[#006398]">rocket_launch</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#131b2e]">Nurturing the Whole Child Competent</h2>
                  <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
                    Our mission is to carefully discover and maximize individual potential through premium small-classroom environments using a dual Montessori and British-Nigerian hybrid network.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE VALUES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div 
            className="text-center mb-16 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398]">The Pillars of Action</span>
            <h2 className="font-serif font-bold text-3xl text-[#131b2e]">
              Our Core Values
            </h2>
            <div className="w-16 h-0.5 bg-[#ba1a1a] mx-auto pt-0.5" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <PillarCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. CURRICULUM FRAMEWORK SECTION ────────────────────────────────── */}
      <section className="py-24 overflow-hidden bg-[#f7f9fb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="relative w-full lg:w-1/2 max-w-lg lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#ba1a1a]/10 z-0" />
            <img
              src="/satrap-our-mission.jpg"
              alt="Blended International Framework"
              className="relative w-full aspect-video md:aspect-[4/3] object-cover shadow-md rounded-xs border border-slate-200 z-10"
            />
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398] block mb-2">Educational Framework</span>
              <h2 className="font-serif font-bold text-3xl text-[#131b2e] leading-tight">
                Our Educational Framework
              </h2>
              <p className="text-xs text-slate-400 mt-1">Built to stretch and accommodate unique potential.</p>
            </div>
            
            <div className="flex flex-col gap-8">
              {frameworkItems.map((item) => (
                <FrameworkItem key={item.number} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. MEET THE TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div 
            className="max-w-xl mb-14 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#006398] block">Mentorship Pillars</span>
            <h2 className="font-serif font-bold text-3xl text-[#131b2e]">
              Meet Our Team
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our classrooms are led by collaborative educators deeply versed in developmental tracking and curriculum delivery.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { 
                name: "Mrs. Sarah Amusa", 
                role: "Director of Studies", 
                imageSrc: "/Mrs.-Sarah-Amusa-Director-of-Studies.jpg",
                imageAlt: "Mrs. Sarah Amusa - Director of Studies",
                bio: "Overseeing specialized curriculum execution and academic excellence."
              },
              { 
                name: "Mrs. Iyabo Payne", 
                role: "Head of School", 
                imageSrc: "/Mrs.-Iyabo-Payne-Head-of-School.jpg",
                imageAlt: "Mrs. Iyabo Payne - Head of School",
                bio: "Leading holistic educational management and student developmental pipelines."
              },
              { 
                name: "Mr. Uduak Isaac", 
                role: "Head - ICT", 
                imageSrc: "/Mr.-Isaac-Uduak-Deputy-Head-of-School.jpg",
                imageAlt: "Mr. Isaac Uduak - Head of ICT",
                bio: "Directing computational frameworks and modern technical instruction."
              }
            ].map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <LeaderCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. JOIN US TODAY CTA ───────────────────────────────────────────── */}
      <section className="bg-[#131b2e] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#ba1a1a]/5 skew-x-12 transform translate-x-12 hidden md:block pointer-events-none" />

        <div className="px-6 max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5bb8fe]">Admissions Processing Active</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight leading-tight">
            Ready to Begin Your Childs Journey?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Experience the dynamic difference of an integrated British-Nigerian syllabus within small class environments crafted explicitly for your childs core milestones.
          </p>
          <div className="w-12 h-0.5 bg-[#ba1a1a] mx-auto" />
          <div className="pt-4">
            <button className="bg-[#ba1a1a] hover:bg-[#93000a] text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md">
              Secure An Entry Slot Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}