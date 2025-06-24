"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
    const { theme } = useTheme();
    const primaryColor = theme === "dark" ? "#fff" : "#101828";

    // Determine size
    const dimensions = {
        sm: { width: 128, height: 32, fontSize: 14 },
        md: { width: 192, height: 48, fontSize: 25 },
        lg: { width: 256, height: 64, fontSize: 30 },
    }[size];

    return (
        <Link href="/" className={`flex items-center ${className}`}>
            <div
                className="relative flex items-center w-fit rounded-lg overflow-hidden"
                style={{ width: dimensions.width, height: dimensions.height }}
            >
                <span
                    className="font-serif text-white text-3xl"
                    style={{ fontSize: dimensions.fontSize, color: primaryColor }}
                >
                    Kevin Phuc
                </span>
            </div>
        </Link>
    );
}