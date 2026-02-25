"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { wobblySm } from "@/lib/design";

export function MobileRegisterButton() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <Link href="/kontakt" className="btn-primary w-full" style={{ borderRadius: wobblySm }}>
        Jetzt anmelden
        <ArrowRight size={18} strokeWidth={3} className="ml-2" />
      </Link>
    </div>
  );
}

