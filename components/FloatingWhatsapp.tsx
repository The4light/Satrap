"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  // Direct line message link for quick engagement
  const whatsappUrl = "https://wa.me/2348000000000?text=Hello%20Satrop%20Schools,%20I%20would%20like%20to%20make%20an%20enquiry.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Subtle pulse ring animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-[#20ba5a]"
        aria-label="Chat on WhatsApp"
      >
        {/* Crisp WhatsApp SVG Path */}
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.481 5.362 1.483 5.513 0 10.003-4.49 10.006-10.004.002-2.671-1.034-5.182-2.919-7.07C17.206 1.674 14.7 1.632 12.012 1.632c-5.51 0-9.998 4.49-10.001 10.005-.001 2.11.55 4.148 1.597 5.922L2.57 21.43l3.921-1.029z" />
        </svg>
      </motion.a>
    </div>
  );
}