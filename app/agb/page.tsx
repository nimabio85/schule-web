import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { wobblyMd } from "@/lib/design";

export const metadata = buildMetadata({
  title: "AGB",
  description: "German terms and conditions page for training registration and payment handling.",
  path: "/agb"
});

export default function AgbPage() {
  return (
    <section className="section">
      <div className="container-page card -rotate-1 space-y-4" style={{ borderRadius: wobblyMd }}>
        <h1 className="heading-note text-4xl md:text-5xl scribble-underline">AGB</h1>
        <section>
          <h2 className="heading-note text-2xl">1. Geltungsbereich</h2>
          <p className="mt-1 text-sm">Valid for vocational education, driving school, and logistics qualification services.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">2. Leistungen</h2>
          <p className="mt-1 text-sm">Information, Termine, registration options, and course delivery in listed categories.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">3. Anmeldung und Beratung</h2>
          <p className="mt-1 text-sm">Registration via Kontakt page. Counseling sessions are typically free.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">4. Zahlungen und Foerderung</h2>
          <p className="mt-1 text-sm">Payment methods: {siteConfig.paymentAndFunding.methods.join(", ")}.</p>
        </section>
        <section>
          <h2 className="heading-note text-2xl">5. Weitere Vertragsdetails</h2>
          <p className="mt-1 text-sm">Not publicly visible.</p>
        </section>
      </div>
    </section>
  );
}

