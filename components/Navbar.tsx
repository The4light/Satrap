"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Admission", href: "/admission" },
    { name: "Facilities", href: "/facilities" },
    { name: "News", href: "/news" }, // Clean injection into matching tracking stack
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 40) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "top-3 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-max md:right-auto rounded-2xl shadow-lg shadow-black/10 border border-[#c6c6cd]/40 bg-[#f7f9fb]/90 backdrop-blur-lg"
            : "top-0 left-0 right-0 rounded-none border-b border-[#c6c6cd]/30 bg-[#f7f9fb]/70 backdrop-blur-md shadow-sm"
        }`}
      >
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled
              ? "h-14 px-4 md:px-6"
              : "h-20 px-5 md:px-16 max-w-7xl mx-auto"
          }`}
        >
          {/* BRAND */}
          <div className="flex items-center gap-2.5">
            <div
              className={`bg-[#131b2e] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
                scrolled ? "w-7 h-7" : "w-10 h-10"
              }`}
            >
              <img
                alt="Satrop Schools Logo"
                className="w-full h-full object-contain p-1"
                src="/satrap-logo.png"
              />
            </div>
            <span
              className={`font-semibold text-[#000000] tracking-tight font-serif transition-all duration-300 ${
                scrolled ? "text-base" : "text-2xl"
              }`}
            >
              Satrop Schools
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-6 ml-8">
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

          {/* CTA + HAMBURGER */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className={`hidden md:block bg-[#ba1a1a] text-white transition-all duration-200 hover:bg-[#93000a] hover:scale-105 active:scale-95 rounded-lg text-sm font-semibold tracking-wider text-center ${
                scrolled ? "px-4 py-1.5 ml-4" : "px-6 py-2"
              }`}
            >
              Join Us Today
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#191c1e] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FLYOUT */}
      {isOpen && (
        <div
          className={`fixed z-40 md:hidden bg-[#f7f9fb]/95 backdrop-blur-md border border-[#c6c6cd]/40 rounded-2xl shadow-lg px-5 py-4 space-y-3 transition-all duration-300 ${
            scrolled ? "top-20 left-4 right-4" : "top-[84px] left-0 right-0 rounded-none border-x-0"
          }`}
        >
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-semibold text-sm py-1 ${isActive ? "text-[#006398]" : "text-[#45464d]"}`}
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
    </>
  );
}