"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { wobblySm } from "@/lib/design";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const enabled = document.documentElement.classList.contains("dark");
    setIsDark(enabled);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-pencil bg-white text-pencil shadow-hand transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-70"
      style={{ borderRadius: wobblySm }}
      aria-label={isDark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
      title={isDark ? "Helles Design" : "Dunkles Design"}
    >
      {isDark ? <Sun size={19} strokeWidth={2.8} /> : <Moon size={19} strokeWidth={2.8} />}
    </button>
  );
}
