"use client";

import React from "react";
import { motion } from "framer-motion";
import NewsMediaSection from "../../components/news/Media";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <NewsMediaSection />
    </main>
  );
}