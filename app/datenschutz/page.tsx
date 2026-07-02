import { buildMetadata } from "@/lib/seo";
import { wobblyMd } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Datenschutzerklaerung",
  description: "Datenschutzerklaerung gemaess den gesetzlichen Vorgaben.",
  path: "/datenschutz"
});

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="container-page card rotate-1 space-y-4" style={{ borderRadius: wobblyMd }}>
        <h1 className="heading-note text-4xl md:text-5xl scribble-underline">Datenschutzerklaerung</h1>
        <section>
          <h2 className="heading-note text-2xl">Datenschutz</h2>
          <p className="mt-1 text-sm">Die Betreiber dieser Seiten nehmen den Schutz personenbezogener Daten sehr ernst und behandeln Daten vertraulich entsprechend der gesetzlichen Vorschriften.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">Cookies</h2>
          <p className="mt-1 text-sm">Die Website verwendet teilweise Cookies. Session-Cookies werden nach dem Besuch geloescht; andere Cookies bleiben gespeichert, bis sie im Browser geloescht werden.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">Server-Log-Files</h2>
          <p className="mt-1 text-sm">Erfasst werden Browsertyp, Betriebssystem, Referrer URL, Hostname und Uhrzeit der Anfrage. Diese Daten sind nicht direkt bestimmten Personen zuordenbar.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">Recht auf Auskunft, Loeschung, Sperrung</h2>
          <p className="mt-1 text-sm">Sie haben jederzeit ein Recht auf Auskunft, Berichtigung, Sperrung oder Loeschung gespeicherter personenbezogener Daten.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">Quelle</h2>
          <p className="mt-1 text-sm">Quelle: eRecht24</p>
        </section>
      </div>
    </section>
  );
}

