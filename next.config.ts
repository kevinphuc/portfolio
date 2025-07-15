import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['images.unsplash.com'],
  },
  devIndicators: false,
};

export default nextConfig;
