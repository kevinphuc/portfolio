import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
