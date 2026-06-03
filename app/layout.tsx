import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // Absolute relative track to safely find your components folder
import Footer from "../components/Footer"; // Global footer component placement
import FloatingWhatsApp from "../components/FloatingWhatsapp"; // Matching relative path to your new component
import "./globals.css";

export const metadata: Metadata = {
  title: "Satrop Schools | Nurturing Minds, Building Excellence",
  description: "Standard global curriculum for complete child development.",
  icons: {
    icon: "/satrap-logo.png", // Pulls directly from your public folder asset
  },
};

// Next.js expects a strict default export for your layout component framework
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Required Material Symbols font loader for your Core Pillars layout */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Global navigation frame loaded at the top of every page */}
        <Navbar />
        
        {/* Main Content Area stretches to push the footer down if content is short */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer frame loaded at the bottom of every page layout */}
        <Footer />

        {/* FLOATING WHATSAPP INTERACTION POINT */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}