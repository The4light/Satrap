import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Keep your absolute folder pinning for Turbopack using a clean literal string
  turbopack: {
    root: "./",
  },

  // 2. Clear the unconfigured host runtime error permanently
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;