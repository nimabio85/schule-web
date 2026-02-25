import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontakt zum Bildungszentrum Handel/Gewerbe/Freie Berufe e.V. in Muehlhausen.",
  path: "/kontakt"
});

export default function KontaktPage() {
  return (
    <section className="section">
      <div className="container-page grid gap-6 lg:grid-cols-2">
        <div className="card -rotate-1" style={{ borderRadius: wobblyMd }}>
          <h1 className="heading-note text-4xl md:text-5xl">Kontaktieren Sie uns</h1>
          <p className="mt-4 text-sm inline-flex items-center gap-3"><span className="inline-flex h-8 w-8 items-center justify-center border-[3px] border-pencil bg-white" style={{ borderRadius: wobblySm }}><MapPin size={14} strokeWidth={2.8} /></span><strong>Adresse:</strong> {siteConfig.business.address}</p>
          <p className="mt-2 text-sm inline-flex items-center gap-3"><span className="inline-flex h-8 w-8 items-center justify-center border-[3px] border-pencil bg-white" style={{ borderRadius: wobblySm }}><Phone size={14} strokeWidth={2.8} /></span><strong>Telefon:</strong> {siteConfig.business.phone}</p>
          <p className="mt-2 text-sm"><strong>Telefax:</strong> {siteConfig.business.fax}</p>
          <p className="mt-2 text-sm inline-flex items-center gap-3"><span className="inline-flex h-8 w-8 items-center justify-center border-[3px] border-pencil bg-white" style={{ borderRadius: wobblySm }}><Mail size={14} strokeWidth={2.8} /></span><strong>E-Mail:</strong> {siteConfig.business.email}</p>

          <h2 className="mt-6 heading-note text-2xl">Weitere Kontaktmoeglichkeiten</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Sabine Ziehn - 03601 401540</li>
            <li>Anika Bierwirth (Assistenz der Geschaeftsleitung, Sekretariat) - 03601 401540</li>
            <li>Beatrix Kaempfe (Stellv. Vorstandsvorsitzende, QM-Beauftragte) - 03601 401540</li>
            <li>Silke Breitbarth - 03601 401540</li>
            <li>Sabine Trautmann (Vorstandsmitglied, Teamleiterin Weiterbildung) - 03601 401540</li>
            <li>Marion Beckmann - 03601 401549</li>
            <li>Mareen Winterberg - 03601 401549</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}


