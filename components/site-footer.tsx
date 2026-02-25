import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { wobblyMd, wobblySm } from "@/lib/design";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-pencil bg-paper">
      <div className="container-page section grid gap-6 md:grid-cols-3">
        <section className="card -rotate-1" style={{ borderRadius: wobblyMd }}>
          <h2 className="heading-note text-xl scribble-underline">{siteConfig.websiteName}</h2>
          <p className="mt-2 text-sm">{siteConfig.business.address}</p>
          <p className="text-sm">Telefon: {siteConfig.business.phone}</p>
          <p className="text-sm">E-Mail: {siteConfig.business.email}</p>
        </section>

        <section className="card rotate-1" style={{ borderRadius: wobblyMd }}>
          <h2 className="heading-note text-xl scribble-underline">Rechtliches</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/impressum" className="hover:line-through">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:line-through">Datenschutzerklaerung</Link></li>
            <li><Link href="/agb" className="hover:line-through">AGB</Link></li>
          </ul>
        </section>

        <section className="card -rotate-1" style={{ borderRadius: wobblyMd }}>
          <h2 className="heading-note text-xl scribble-underline">Hinweise</h2>
          <p className="mt-2 text-sm">Social media handles: {siteConfig.business.social}</p>
          <p className="mt-2 text-sm">SSL: {siteConfig.trust.security}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="postit inline-flex items-center gap-3 px-3 py-2 text-sm" style={{ borderRadius: wobblySm }}>
              <BadgeCheck size={16} strokeWidth={2.8} />
              AZAV
            </span>
            <span className="inline-flex items-center gap-3 border-[3px] border-pencil bg-white px-3 py-2 text-sm" style={{ borderRadius: wobblySm }}>
              <ShieldCheck size={16} strokeWidth={2.8} />
              GDPR
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}


