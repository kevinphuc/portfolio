import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/portfolio" : "",
  output: 'export',
  distDir: 'dist',
  images: {
    domains: ['images.unsplash.com'],
  },
  devIndicators: false,
};

export default nextConfig;
