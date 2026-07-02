import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { AlertTriangle, RefreshCcw, Scale } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Weiterbildung",
  description: "Weiterbildungsangebote in Vollzeit und berufsbegleitend im Bildungszentrum Musterstadt.",
  path: "/adr-gefahrgut"
});

export default function AdrPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <h1 className="heading-note text-4xl md:text-5xl">Weiterbildung</h1>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Angebote</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><AlertTriangle size={17} strokeWidth={2.8} /></span>Firmenschulungen, individuelles Einzelcoaching sowie berufliche Weiterbildung in Vollzeit und berufsbegleitend.</p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Unterstuetzung</h2>
          <p className="mt-2 card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><RefreshCcw size={17} strokeWidth={2.8} /></span>Angebote fuer Personen, Bedarfsgemeinschaften und Familien im Kontext von Agentur fuer Arbeit und Jobcenter.</p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Qualitaet und Zulassung</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Scale size={17} strokeWidth={2.8} /></span>Qualitaetsmanagement nach DIN EN ISO 9001:2015 und AZAV-zugelassener Traeger.</p>
        </div>
      </section>
      <CtaBlock text="Kontakt aufnehmen fuer individuelle Weiterbildungsangebote." />
    </>
  );
}


