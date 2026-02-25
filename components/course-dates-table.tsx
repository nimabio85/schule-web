"use client";

import { useMemo, useState } from "react";
import { CalendarRange } from "lucide-react";
import { courseDates, type CourseCategory } from "@/lib/site";
import { wobblyMd, wobblySm } from "@/lib/design";

const filters: Array<"Alle" | CourseCategory> = [
  "Alle",
  "Integrationskurs",
  "AEVO",
  "BVJ Sprache",
  "Berufsorientierung",
  "Weiterbildung"
];

export function CourseDatesTable() {
  const [active, setActive] = useState<(typeof filters)[number]>("Alle");

  const rows = useMemo(() => {
    if (active === "Alle") return courseDates;
    return courseDates.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="section">
      <div className="container-page">
        <h2 className="heading-note text-3xl md:text-4xl scribble-underline">Kurstermine</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`border-[3px] px-3 py-2 text-base shadow-hand transition-all duration-100 ${active === filter ? "border-pencil bg-accent text-white translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_#2d2d2d]" : "border-pencil bg-white text-pencil hover:rotate-1"}`}
              style={{ borderRadius: wobblySm }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto border-[3px] border-pencil bg-white shadow-hand" style={{ borderRadius: wobblyMd }}>
          <table className="min-w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2">Datum</th>
                <th className="px-4 py-2">Kategorie</th>
                <th className="px-4 py-2">Kurs</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-slate-200">
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center gap-3">
                      <CalendarRange size={15} strokeWidth={2.8} />
                      {new Date(row.date).toLocaleDateString("de-DE")}
                    </span>
                  </td>
                  <td className="px-4 py-2">{row.category}</td>
                  <td className="px-4 py-2">{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


