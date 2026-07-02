"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { wobblyMd } from "@/lib/design";

const CONSENT_KEY = "school_website_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem(CONSENT_KEY);
    if (!value) setShow(true);
  }, []);

  if (!show) return null;

  const save = (choice: "essential" | "all") => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
    setShow(false);
  };

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 p-4" role="dialog" aria-label="Cookie Einwilligung">
      <div className="container-page flex flex-col gap-3 border-[3px] border-pencil bg-white p-4 shadow-hand md:flex-row md:items-center md:justify-between" style={{ borderRadius: wobblyMd }}>
        <p className="text-sm">
          <Cookie size={16} strokeWidth={2.8} className="mr-2 inline" />
          Diese Website verwendet notwendige Cookies. Optionale Cookies werden nur nach Einwilligung gesetzt.
        </p>
        <div className="flex gap-2">
          <button type="button" className="btn-secondary" onClick={() => save("essential")}>Nur notwendige</button>
          <button type="button" className="btn-primary" onClick={() => save("all")}>Alle akzeptieren</button>
        </div>
      </div>
    </aside>
  );
}

