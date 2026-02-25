import Link from "next/link";
import { wobblyMd } from "@/lib/design";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page card -rotate-1" style={{ borderRadius: wobblyMd }}>
        <h1 className="heading-note text-4xl md:text-5xl">Seite nicht gefunden</h1>
        <p className="mt-2 text-sm">Die angeforderte Seite ist nicht verfuegbar.</p>
        <Link href="/" className="btn-secondary mt-4">Zur Homepage</Link>
      </div>
    </section>
  );
}

