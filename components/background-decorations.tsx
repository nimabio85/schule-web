"use client";

import { useEffect, useState } from "react";

export function BackgroundDecorations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-[0.18] dark:opacity-[0.08] transition-opacity duration-500">
      {/* Sketchy Spiral - Top Left */}
      <svg
        className="absolute left-[3%] top-[14%] h-24 w-24 animate-float-1 animate-sketchy-spin text-pencil"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <path d="M50,50 C55,40 40,30 35,40 C30,50 45,65 55,60 C70,50 65,25 45,20 C20,15 15,55 35,70 C60,85 90,65 85,35 C80,10 30,5 15,30 C-2,60 10,95 50,90" />
      </svg>

      {/* Sketchy Star - Top Right */}
      <svg
        className="absolute right-[4%] top-[22%] h-20 w-20 animate-float-2 text-pencil"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50,10 L59,38 L88,38 L65,56 L74,84 L50,66 L26,84 L35,56 L12,38 L41,38 Z" />
        <path d="M48,15 L56,36 L80,36 L61,50 L68,74 L48,60 L28,74 L35,50 L16,36 L40,36 Z" />
      </svg>

      {/* Sketchy Cloud - Middle Left */}
      <svg
        className="absolute left-[2%] top-[45%] h-28 w-28 animate-float-2 text-pencil"
        viewBox="0 0 120 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30,60 C15,60 10,45 20,35 C15,20 35,10 45,20 C55,10 75,15 75,30 C90,25 95,40 85,50 C95,60 80,70 65,65 C55,75 35,70 30,60 Z" />
        <path d="M40,52 C45,55 55,55 60,50" />
      </svg>

      {/* Sketchy Pencil/Line Doodle - Middle Right */}
      <svg
        className="absolute right-[3%] top-[56%] h-24 w-24 animate-float-1 text-pencil"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <path d="M15,80 C35,65 40,85 60,50 C70,35 85,45 80,20" strokeDasharray="3 3" />
        <path d="M72,25 L82,18 L85,28" />
      </svg>

      {/* Sketchy Grid Crosses - Bottom Left */}
      <div className="absolute left-[4%] top-[76%] flex flex-col gap-8 animate-float-1">
        <svg className="h-6 w-6 text-pencil" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M10,2 L10,18 M2,10 L18,10" />
        </svg>
        <svg className="h-6 w-6 text-pencil ml-8 opacity-60" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M10,2 L10,18 M2,10 L18,10" />
        </svg>
      </div>

      {/* Sketchy Arrow - Bottom Right */}
      <svg
        className="absolute right-[5%] top-[80%] h-20 w-20 animate-float-2 text-pencil"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,20 C40,25 70,35 60,70" />
        <path d="M45,62 L60,70 L72,55" />
      </svg>
    </div>
  );
}
