import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { wobblyMd } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum gemaess den veroeffentlichten Angaben auf bz-muehlhausen.de.",
  path: "/impressum"
});

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="container-page card -rotate-1" style={{ borderRadius: wobblyMd }}>
        <h1 className="heading-note text-4xl md:text-5xl scribble-underline">Impressum</h1>
        <p className="mt-4 text-sm"><strong>Anbieter:</strong> {siteConfig.business.companyName}</p>
        <p className="mt-2 text-sm"><strong>Adresse:</strong> {siteConfig.business.address}</p>
        <p className="mt-2 text-sm"><strong>Vertreten durch:</strong> Sabine Ziehn, Beatrix Kaempfe, Sabine Trautmann</p>
        <p className="mt-2 text-sm"><strong>Kontakt:</strong> Telefon {siteConfig.business.phone}, Telefax {siteConfig.business.fax}, E-Mail {siteConfig.business.email}</p>
        <p className="mt-2 text-sm"><strong>Registereintrag:</strong> Vereinsregister, Registergericht Amtsgericht Muehlhausen, Registernummer HR 460214</p>
        <p className="mt-2 text-sm"><strong>Verantwortlich fuer den Inhalt nach § 55 Abs. 2 RStV:</strong> Sabine Ziehn, Beatrix Kaempfe, Sabine Trautmann</p>
        <p className="mt-2 text-sm"><strong>Streitschlichtung:</strong> Keine Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.</p>
      </div>
    </section>
  );
}

