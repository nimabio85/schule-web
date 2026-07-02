"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollDrawingArrow() {
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(200); // fallback path length

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const handleScroll = () => {
      const y = window.scrollY;
      // Triggers drawing over the first 250px of scrolling
      const progress = Math.min(1, Math.max(0, y / 250));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // strokeDashoffset goes from full pathLength (invisible) to 0 (fully drawn)
  const strokeDashoffset = pathLength * (1 - scrollProgress);
  const showHead = scrollProgress > 0.85;

  return (
    <div className="mt-4 hidden md:block text-pencil">
      <svg
        width="180"
        height="60"
        viewBox="0 0 180 60"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        {/* The wavy arrow line - draws itself on scroll */}
        <path
          ref={pathRef}
          d="M2 10 C 50 40, 100 0, 175 30"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-75 ease-out"
        />

        {/* The arrow head - pops in smoothly once the line is almost fully drawn */}
        <path
          d="M160 22 L175 30 L158 36"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-200 ease-out origin-[175px_30px]"
          style={{
            opacity: showHead ? 1 : 0,
            transform: `scale(${showHead ? 1 : 0})`,
          }}
        />
      </svg>
    </div>
  );
}
