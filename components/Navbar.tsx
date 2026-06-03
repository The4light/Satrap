"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Unified link dictionary to make matching clean and error-free
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Admission", href: "/admission" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/70 backdrop-blur-md border-b border-[#c6c6cd]/30 shadow-sm transition-shadow duration-200">
      <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-7xl mx-auto">
        
        {/* BRAND EMBLEM SECTION */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#131b2e] rounded-full flex items-center justify-center overflow-hidden">
            <img 
              alt="Satrop Schools Logo" 
              className="w-full h-full object-contain p-1" 
              src="/satrap-logo.png" // Local public path updated here
            />
          </div>
          <span className="text-2xl font-semibold text-[#000000] tracking-tight font-serif">
            Satrop Schools
          </span>
        </div>

        {/* DESKTOP LINKS (Dynamic Active Line Tracking) */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.href}
                className={`${
                  isActive 
                    ? "text-[#006398] border-b-2 border-[#006398]" 
                    : "text-[#45464d] hover:text-[#006398]"
                } pb-1 text-sm font-semibold tracking-wider hover:scale-105 transition-all duration-200`} 
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* REGISTRATION ACTION BUTTON (Crimson Red Base) */}
        <div className="flex items-center gap-4">
          <Link 
            href="/admission"
            className="hidden md:block bg-[#ba1a1a] text-white transition-all duration-200 hover:bg-[#93000a] hover:scale-105 active:scale-95 px-6 py-2 rounded-lg text-sm font-semibold tracking-wider text-center"
          >
            Join Us Today
          </Link>
          
          {/* Mobile Menu Interactive Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#191c1e] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE FLYOUT NAVIGATION MENU CONTAINER */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f9fb] border-b border-[#c6c6cd]/30 px-5 py-4 space-y-3 animate-fadeIn">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                onClick={() => setIsOpen(false)} 
                className={`block font-semibold text-sm ${isActive ? "text-[#006398]" : "text-[#45464d]"}`} 
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            onClick={() => setIsOpen(false)}
            href="/admission"
            className="block w-full bg-[#ba1a1a] text-white text-center py-2.5 rounded-lg text-sm font-semibold tracking-wider mt-2"
          >
            Join Us Today
          </Link>
        </div>
      )}
    </header>
  );
}