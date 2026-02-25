import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { wobblyMd } from "@/lib/design";

export function CtaBlock({ text }: { text: string }) {
  return (
    <section className="section">
      <div className="container-page card -rotate-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between" style={{ borderRadius: wobblyMd }}>
        <p className="text-sm">{text}</p>
        <div className="flex gap-2">
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
            <ArrowRight size={18} strokeWidth={3} className="ml-2" />
          </Link>
          <Link href="/termine" className="btn-secondary">
            Termine ansehen
            <CalendarDays size={18} strokeWidth={3} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

