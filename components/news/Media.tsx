"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleCard {
  id: number;
  title: string;
  category: "Academic" | "Campus Life" | "Sports" | "Announcements";
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export default function NewsGalleryPage() {
  const allUpdates: ArticleCard[] = [
    {
      id: 1,
      title: "Welcoming Our Students to a New Academic Session",
      category: "Academic",
      date: "September 2026",
      excerpt: "Preparations are finalized as we welcome both returning and new learners into our small, personalized classroom environments.",
      content: "As we step into a new academic calendar session, Satrap Schools remains dedicated to nurturing individual intellect. This term focuses heavily on integrating hands-on instructional project frameworks alongside our baseline traditional British-Nigerian core studies. Class sizes remain structured and small to maintain close mentorship visibility, ensuring that every student transition feels seamless, supportive, and balanced.",
      image: "/satrap-one.jpg"
    },
    {
      id: 2,
      title: "Expanding Practical Studies with Modern Learning Aids",
      category: "Campus Life",
      date: "In View",
      excerpt: "A deep dive into how our integrated Montessori and British-Nigerian workflows utilize physical computing frameworks and instructional infrastructure.",
      content: "Practical comprehension beats rote memorization every single time. Our upcoming campus infrastructure overhaul introduces newly provisioned physical learning aid kits. Students will engage directly with modular spatial logic frames, basic mechanical blocks, and introductory structural templates designed to transform raw textbook abstract logic into concrete physical awareness.",
      image: "/learning-aid.jpg"
    },
    {
      id: 3,
      title: "Inter-House Sports & Turf Arena Track Launch",
      category: "Sports",
      date: "Coming Soon",
      excerpt: "Our state-of-the-art shock-absorbent artificial turf arena is scheduled to host its inaugural youth development tracks.",
      content: "Physical discipline forms an equal pillar of sound mental fortitude. Satrap Schools is proud to announce the final field alignments for our premium shock-absorbent mini turf layout arena. The facility will play host to track training routines, internal inter-house strategy sports leagues, and foundational coordination training paths built safely for multi-tiered age sets.",
      image: "/Playground4.jpg"
    },
    {
      id: 4,
      title: "Periodic Ministry Compliance Evaluation",
      category: "Announcements",
      date: "May 2026",
      excerpt: "Satrap Schools successfully scales the periodic multi-point ministry evaluation with flawless academic and infrastructural tracking reports.",
      content: "Following rigorous operational analysis by governing educational bodies, Satrap Schools has concluded its cyclic ministry review with unblemished clearance markings. Evaluators highlighted our clean infrastructure, consistent record tracking, safety measures, and instructional compliance ratios as exemplary standard benchmarks for urban Lagos private learning platforms.",
      image: "/satrap-four.jpg"
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedArticle, setSelectedArticle] = useState<ArticleCard | null>(null);

  const categories = ["All", "Academic", "Campus Life", "Sports", "Announcements"];

  const filteredUpdates = useMemo(() => {
    if (activeCategory === "All") return allUpdates;
    return allUpdates.filter(item => item.category === activeCategory);
  }, [activeCategory, allUpdates]);

  const displayedPosts = filteredUpdates.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24">
      {/* ─── ARCHITECTURAL HERO BANNER ────────────────────────────────── */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden bg-[#131b2e] pt-12">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-30 scale-[1.02]"
          style={{ backgroundImage: `url('/satrap-four.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-black/40 pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#5bb8fe] block"
          >
            Satrap Chronicles
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight"
          >
            News, Events & Campus Life
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-sans leading-relaxed"
          >
            Stay updated with the latest stories, structural milestones, and academic developments across our active school community.
          </motion.p>
        </div>
      </section>

      {/* ─── PERSISTENT MAIN CONTENT AREA ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 space-y-12">
        
        <div className="border-b border-slate-200/60 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-xl font-bold font-serif text-[#131b2e] tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
            Latest Announcements
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-xs transition-all border ${
                  activeCategory === cat
                    ? "bg-[#006398] text-white border-[#006398] shadow-sm"
                    : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-[#131b2e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEED GRID MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((item) => (
              <motion.article 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                onClick={() => setSelectedArticle(item)}
                className="bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full cursor-pointer group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#131b2e] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-[10px] font-semibold text-slate-400 font-sans tracking-wide block">
                    {item.date}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#131b2e] leading-snug tracking-tight group-hover:text-[#006398] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed flex-grow">
                    {item.excerpt}
                  </p>
                  <span className="text-[10px] font-bold text-[#ba1a1a] uppercase tracking-wider pt-2 flex items-center gap-1 group-hover:text-[#006398] transition-colors">
                    Read Entry Details →
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* INCREMENTAL ARCHIVAL LOAD REGULATOR */}
        {filteredUpdates.length > displayedPosts.length && (
          <div className="pt-6 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3.5 bg-white border border-slate-200 text-[#131b2e] text-[10px] font-bold uppercase tracking-widest rounded-xs hover:bg-[#131b2e] hover:text-white transition-all"
            >
              Load Archival Records
            </button>
          </div>
        )}
      </section>

      {/* ─── DYNAMIC OVERLAY READER FRAME (MODAL SYSTEM) ───────────────── */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-50 bg-[#131b2e]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100"
            >
              {/* ── Single unified scroll container ── */}
              <div className="overflow-y-auto flex-1 overscroll-contain">

                {/* Parallax image — sits in the flow, taller than its container so
                    object-position "top" means it naturally reveals more as you scroll */}
                <div className="relative w-full h-56 md:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                  {/* Gradient fade into white at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

                  {/* Close button — sticky inside the scroll so it's always reachable */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-4 right-4 bg-[#131b2e] text-white hover:bg-[#ba1a1a] w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg focus:outline-hidden"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-[#ba1a1a] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {selectedArticle.category}
                    </span>
                    <span className="bg-white/95 text-[#131b2e] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
                      {selectedArticle.date}
                    </span>
                  </div>
                </div>

                {/* Rich text body */}
                <div className="p-6 md:p-8 space-y-4">
                  <h2 className="font-serif font-bold text-xl md:text-2xl text-[#131b2e] tracking-tight leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <div className="w-12 h-1 bg-[#006398] rounded-xs" />
                  <p className="text-sm font-sans text-[#131b2e] font-medium leading-relaxed bg-slate-50 p-4 border-l-4 border-[#ba1a1a] rounded-r-xs">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-xs md:text-sm font-sans text-slate-600 leading-relaxed pt-2 whitespace-pre-line">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>

              {/* Sticky footer — always pinned at the bottom of the modal */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-[#131b2e] hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-xs transition-colors"
                >
                  Return To Feed
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}