import { CourseDatesTable } from "@/components/course-dates-table";
import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { CalendarClock } from "lucide-react";
import { wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Aktuelle Kurse",
  description: "Aktuelle Kurse: Integrationskurs, AEVO und BVJ Sprache.",
  path: "/termine"
});

export default function TerminePage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <h1 className="heading-note text-4xl md:text-5xl">Aktuelle Kurse</h1>
          <div className="postit mt-3 inline-flex items-center gap-3 px-3 py-2 text-sm shadow-hand" style={{ borderRadius: wobblySm }}>
            <CalendarClock size={16} strokeWidth={2.8} />
            Aktuelle Kurse ansehen
          </div>
          <p className="mt-3 card -rotate-1 text-sm" style={{ borderRadius: wobblyMd }}>
            Integrationskurs, AEVO Ausbilderqualifizierung und BVJ Sprache werden laufend angeboten.
          </p>
        </div>
      </section>
      <CourseDatesTable />
      <CtaBlock text="Kontakt aufnehmen zur individuellen Terminvereinbarung." />
    </>
  );
}


