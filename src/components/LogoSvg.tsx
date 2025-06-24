"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function LogoSvg({ className = "" }: LogoProps) {
  const { theme } = useTheme();
  
  // Determine colors based on theme
  const primaryColor = theme === "dark" ? "#8b5cf6" : "#4f46e5";
  const secondaryColor = theme === "dark" ? "#3b82f6" : "#2563eb";
  
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background shape with gradient */}
        <rect width="48" height="48" rx="8" fill="url(#paint0_linear)" />
        
        {/* Stylized VBP text */}
        <path d="M14 34L19 14H21.5L16.5 34H14Z" fill="white" />
        <path d="M23 14H29C30.3333 14 31.3333 14.3333 32 15C32.6667 15.6667 33 16.6667 33 18C33 19.3333 32.6667 20.3333 32 21C31.3333 21.6667 30.3333 22 29 22H25L24 26H29C30.3333 26 31.3333 26.3333 32 27C32.6667 27.6667 33 28.6667 33 30C33 31.3333 32.6667 32.3333 32 33C31.3333 33.6667 30.3333 34 29 34H23L23 14Z" fill="white" />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor={secondaryColor} />
            <stop offset="1" stopColor={primaryColor} />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}