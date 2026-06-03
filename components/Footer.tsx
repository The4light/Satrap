"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#131b2e] w-full py-16 border-t border-white/10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-16 max-w-7xl mx-auto">
        
        {/* COLUMN 1: BRAND PLATFORM */}
        <div className="space-y-6">
          <span className="text-2xl font-bold font-serif block tracking-tight">
            Satrop Schools
          </span>
          <p className="text-[#7c839b]/80 text-sm leading-relaxed">
            Defining the next generation of academic excellence through rigorous instruction and empathetic leadership.
          </p>
          <div className="flex gap-4">
            <a 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" 
              href="#"
              aria-label="Social Feature 1"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
            <a 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" 
              href="#"
              aria-label="Social Feature 2"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMN 2: ACADEMICS NAVIGATION */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
            Academics
          </h4>
          <ul className="space-y-2">
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                Academic Calendar
              </a>
            </li>
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                Curriculum
              </a>
            </li>
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                E-Learning Portal
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: INSTITUTIONAL LINKS */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
            Institutional
          </h4>
          <ul className="space-y-2">
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-[#7c839b]/80 hover:text-white text-sm transition-all hover:underline" href="#">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: NEWSLETTER INSIGHTS CONNECT */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest">
            Connect
          </h4>
          <p className="text-[#7c839b]/80 text-sm">
            Subscribe to our newsletter for campus updates and academic insights.
          </p>
          <div className="flex">
            <input 
              className="bg-white/5 border border-white/20 text-white rounded-l px-4 py-2 w-full focus:outline-none focus:border-[#006398] transition-colors text-sm" 
              placeholder="Your email" 
              type="email" 
            />
            <button 
              className="bg-[#006398] px-4 py-2 rounded-r hover:bg-[#006398]/80 transition-colors flex items-center justify-center"
              aria-label="Submit newsletter signature"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* REPLICA ACCREDITATION & COPYRIGHT ROW */}
      <div className="mt-16 pt-8 border-t border-white/10 px-5 md:px-16 max-w-7xl mx-auto text-center">
        <p className="text-[#7c839b]/60 text-xs">
          © 2026 Satrop Schools. All Rights Reserved. Designed for Excellence.
        </p>
      </div>
    </footer>
  );
}