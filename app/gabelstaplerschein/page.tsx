import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { BadgeCheck, Clock3, Users, Wrench } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Berufsorientierung",
  description: "Praxisnahe berufliche Orientierung, Berufsfelderkundung und Potentialanalyse.",
  path: "/gabelstaplerschein"
});

export default function GabelstaplerscheinPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <h1 className="heading-note text-4xl md:text-5xl">Berufsorientierung</h1>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Berufsfelderkundung und Berufsfelderprobung</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Wrench size={17} strokeWidth={2.8} /></span>Praxisnahe berufliche Orientierung an den Standorten Muehlhausen und Bad Langensalza im Bildungsverbund.</p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Potentialanalyse</h2>
          <p className="mt-2 card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Clock3 size={17} strokeWidth={2.8} /></span>Ermittlung von Kompetenzen und Leistungspotentialen fuer Schuelerinnen und Schueler als Teil der praxisnahen Berufsorientierung.</p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Zielsetzung</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><BadgeCheck size={17} strokeWidth={2.8} /></span>Berufsfelder kennenlernen, Staerkenprofil erstellen und begruendete Berufsentscheidungen treffen.</p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Zielgruppe</h2>
          <p className="mt-2 card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Users size={17} strokeWidth={2.8} /></span>Schuelerinnen und Schueler der Klassenstufen 7/8 im Rahmen der Berufsorientierungsprogramme.</p>
        </div>
      </section>
      <CtaBlock text="Kontakt aufnehmen fuer Berufsorientierung und Potentialanalyse." />
    </>
  );
}


