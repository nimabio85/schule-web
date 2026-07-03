import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { Car, Truck, Bike, Bus } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Schulabschluss",
  description: "Schulabschluss-Angebote und Praxisbezug als Chance fuer den Einstieg in das Berufsleben.",
  path: "/fahrschule"
});

export default function FahrschulePage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <h1 className="heading-note text-4xl md:text-5xl">Schulabschluss</h1>
          <h2 className="mt-6 heading-note text-2xl md:text-3xl scribble-underline">Der besondere Schulabschluss mit Praxisbezug</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <article className="card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Car size={17} strokeWidth={2.8} /></span>Ausbildung in einer kleinen Lerngruppe mit sozialpaedagogischer Begleitung.</article>
            <article className="card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Bike size={17} strokeWidth={2.8} /></span>Verzahnung von theoretischem Unterricht und berufspraktischen Anteilen.</article>
            <article className="card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Truck size={17} strokeWidth={2.8} /></span>Individuelle Foerderung bis zum erfolgreichen Abschluss.</article>
            <article className="card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}><span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Bus size={17} strokeWidth={2.8} /></span>Unterstuetzung beim Uebergang in Ausbildung oder Beruf.</article>
          </div>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Ablauf</h2>
          <p className="mt-2 text-sm">Beratung und Eignungsklaerung -&gt; Aufnahme in den Bildungsgang -&gt; Unterricht und Praxis -&gt; Schulabschluss und Anschlussplanung.</p>
        </div>
      </section>
      <CtaBlock text="Jetzt anmelden fuer den Bildungsgang Schulabschluss." />
    </>
  );
}
