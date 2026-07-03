import Link from "next/link";
import { ArrowRight, BadgeCheck, Bus, Car, Truck, Wrench } from "lucide-react";
import { CtaBlock } from "@/components/cta-block";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { hardShadowLg, wobblyMd, wobblySm } from "@/lib/design";

export const metadata = buildMetadata({
  title: "Homepage",
  description:
    "Aktuelle Kurse, Bildungsgaenge und Kontaktinformationen des Muster-Bildungszentrum e.V. in Musterstadt.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-3">
            <p className="postit inline-block -rotate-2">Notiz</p>
            <span className="inline-block border-[3px] border-pencil bg-accent text-white font-heading font-bold text-sm px-3 py-1 shadow-hand-soft rotate-3 animate-bounce" style={{ borderRadius: wobblySm }}>
              ✓ Online-Anmeldung aktiv!
            </span>
          </div>
          <h1 className="mt-3 heading-note text-4xl md:text-6xl">{siteConfig.websiteName} <span className="inline-block rotate-6">!</span></h1>
          <p className="mt-3 text-base md:text-lg">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm">{siteConfig.purpose}</p>
          <p className="mt-3 text-sm"><strong>Target audience:</strong> {siteConfig.targetAudience}</p>
          <p className="mt-3 text-sm"><strong>Industry:</strong> {siteConfig.industry}</p>
          <div className="mt-4 hidden md:block text-pencil">
            <svg width="180" height="60" viewBox="0 0 180 60" fill="none" aria-hidden="true" className="overflow-visible">
              <path d="M2 10 C 50 40, 100 0, 175 30" stroke="currentColor" strokeWidth="3" className="animate-dash-flow" />
              <path d="M160 22 L175 30 L158 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="heading-note text-3xl md:text-5xl scribble-underline">Wir bieten vielseitige Bildungsgaenge</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {siteConfig.services.map((service, index) => {
              const icons = [Car, Truck, Wrench, Wrench, Bus, BadgeCheck];
              const Icon = icons[index] ?? BadgeCheck;
              const rotations = ["-rotate-1", "rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1"];
              return (
                <article key={service} className={`card ${rotations[index] ?? ""} text-base`} style={{ borderRadius: wobblyMd }}>
                  <span className="mb-2 inline-flex h-10 w-10 items-center justify-center border-[3px] border-pencil bg-white" style={{ borderRadius: wobblySm }}>
                    <Icon size={18} strokeWidth={2.8} />
                  </span>
                  <p className="mt-2">{service}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page card rotate-1" style={{ borderRadius: wobblyMd }}>
          <h2 className="heading-note text-3xl md:text-4xl">Aktuelle Kurse</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {siteConfig.currentCourses.map((course) => (
              <article key={course.title} className="card p-4 text-base" style={{ borderRadius: wobblySm }}>
                <h3 className="heading-note text-2xl">{course.title}</h3>
                <p className="mt-1">{course.subtitle}</p>
                <p className="mt-2">{course.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page card -rotate-1" style={{ borderRadius: wobblyMd }}>
          <h2 className="heading-note text-3xl md:text-4xl">Entdecke deine Chancen</h2>
          <p className="mt-3 text-sm"><strong>Schulabschluss:</strong> Die besondere Chance fuer den Einstieg in die Zukunft.</p>
          <p className="mt-2 text-sm"><strong>Berufsausbildung:</strong> Wir bilden im Auftrag der Agentur fuer Arbeit in den Bereichen Handel, Lager, Gastronomie und Hauswirtschaft aus.</p>
          <p className="mt-2 text-sm"><strong>Berufsorientierung:</strong> Berufsfelderkundung und Berufsfelderprobung in Musterstadt and Nachbarstadt.</p>
          <p className="mt-2 text-sm"><strong>Weiterbildung:</strong> Angebote in Vollzeit und berufsbegleitend, auch fuer Mitarbeiterqualifizierung.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="heading-note text-3xl md:text-4xl scribble-underline">Kontakt und Anmeldung</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary" style={{ boxShadow: hardShadowLg }}>Jetzt anmelden <ArrowRight size={18} strokeWidth={3} className="ml-2" /></Link>
            <Link href="/termine" className="btn-secondary">Termine ansehen</Link>
          </div>
        </div>
      </section>

      <CtaBlock text="Kontakt aufnehmen fuer Beratung, Kurstermine und Registrierung." />
    </>
  );
}
