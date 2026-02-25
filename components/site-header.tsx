"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PenTool } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site";
import { wobblyMd, wobblySm } from "@/lib/design";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-pencil bg-paper/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between py-2">
        <Link href="/" className="inline-flex items-center gap-3 text-lg heading-note scribble-underline">
          <span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white" style={{ borderRadius: wobblySm }}>
            <PenTool size={18} strokeWidth={2.8} />
          </span>
          {siteConfig.websiteName}
        </Link>

        <nav className="hidden items-center gap-4 md:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-base scribble-underline hover:rotate-1 transition-transform duration-100">
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary">Kontakt</Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-pencil bg-white shadow-hand"
            style={{ borderRadius: wobblySm }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menue umschalten"
          >
            {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="container-page mb-3 border-[3px] border-pencil bg-white p-4 md:hidden shadow-hand"
          style={{ borderRadius: wobblyMd }}
          aria-label="Mobile Navigation"
        >
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base scribble-underline" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}


