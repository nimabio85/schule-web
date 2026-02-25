import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { BadgeCheck, BookOpenCheck, Wallet } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Berufsausbildung",
  description:
    "Berufsausbildung fuer Jugendliche und junge Erwachsene im Bildungszentrum Muehlhausen.",
  path: "/berufskraftfahrer-weiterbildung"
});

export default function BerufskraftfahrerPage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <h1 className="heading-note text-4xl md:text-5xl">Berufsausbildung</h1>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Ausbildungsbereiche</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}>
            <span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><BookOpenCheck size={17} strokeWidth={2.8} /></span>
            Handel, Lager und Logistik, Hauswirtschaft, Gastronomie, Garten- und Landschaftsbau sowie Wirtschaft und Verwaltung.
          </p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Weitere Angebote</h2>
          <p className="mt-2 card rotate-1 text-sm" style={{ borderRadius: wobblyMd }}>
            <span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><BadgeCheck size={17} strokeWidth={2.8} /></span>
            Ausbildung im Auftrag der Bundesagentur fuer Arbeit inklusive Ergaenzungsausbildung in Gastronomie, Handel und Verwaltung.
          </p>

          <h2 className="mt-6 heading-note text-2xl md:text-3xl">Foerderung</h2>
          <p className="mt-2 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}>
            <span className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-pencil bg-white mb-2 mr-3" style={{ borderRadius: wobblySm }}><Wallet size={17} strokeWidth={2.8} /></span>
            Beratung und Zugang ueber Agentur fuer Arbeit und Jobcenter.
          </p>
        </div>
      </section>
      <CtaBlock text="Kontakt aufnehmen fuer Beratung zur Berufsausbildung." />
    </>
  );
}


