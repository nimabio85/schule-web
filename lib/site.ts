export const siteConfig = {
  websiteName: "Muster-Bildungszentrum e.V.",
  domain: "https://muster-bildungszentrum.de",
  tagline: "ENTDECKE DEINE CHANCEN",
  purpose:
    "Informationen, Kursangebote, Bildungsgange und Kontaktmoeglichkeiten rund um Schulabschluss, Berufsausbildung, Berufsorientierung und Weiterbildung in Musterstadt.",
  targetAudience:
    "Schülerinnen und Schüler, Auszubildende, junge Erwachsene, Arbeitssuchende sowie Teilnehmende an Maßnahmen der beruflichen Bildung und Integration.",
  industry: "Berufliche Bildung / Weiterbildung / Berufsorientierung",
  business: {
    companyName: "Muster-Bildungszentrum e.V.",
    founders: "Gründung des Vereins: Januar 2000",
    location: "Musterstadt/Sachsen, Germany",
    address: "Musterstraße 42, 12345 Musterstadt",
    phone: "01234 567890",
    fax: "01234 567891",
    email: "info@muster-bildungszentrum.de",
    social: "Facebook/Instagram handles are not publicly visible.",
    legalPages: ["Impressum", "Datenschutzerklaerung", "AGB"]
  },
  services: [
    "Schulabschluss",
    "Berufsausbildung",
    "Berufsorientierung",
    "Weiterbildung",
    "Integrationskurs (BAMF)",
    "BVJ Sprache und Jugendintegration"
  ],
  currentCourses: [
    {
      title: "Integrationskurs",
      subtitle: "fuer junge Erwachsene",
      details: "Fuer mehr Informationen und zur individuellen Terminvereinbarung nehmen Sie bitte Kontakt zu uns auf."
    },
    {
      title: "AEVO",
      subtitle: "Ausbilderqualifizierung",
      details: "80 Stunden Vollzeitkurs, Start 17.08.2026"
    },
    {
      title: "BVJ Sprache",
      subtitle: "fuer Jugendliche und junge Erwachsene",
      details: "Zugangsvoraussetzung: kein Schulabschluss, Deutschkenntnisse Niveau A2"
    }
  ],
  paymentAndFunding: {
    pricing: "Individuelle Auskunft auf Anfrage.",
    plans: "Nicht als Abo-Modell organisiert.",
    freeOffers: "Beratung und Terminvereinbarung ueber Kontakt.",
    methods: ["Ueberweisung", "Rechnung", "Foerderung ueber Bildungstraegerprogramme"]
  },
  marketing: {
    valueProposition:
      "Comprehensive, certified training in transport and logistics from experienced instructors in one central location.",
    sellingPoints: ["AZAV certification", "Modern vehicle fleet", "Flexible course dates"],
    ctas: ["Kontakt aufnehmen", "Jetzt anmelden", "Termine ansehen"],
    leadMagnets: "Course catalogs or schedules available for download (PDF).",
    funnel:
      "Homepage (overview of services) -> Specific category -> Course dates/details -> Contact/Registration form"
  },
  seo: {
    keywords: [
      "Bildungszentrum Musterstadt",
      "Schulabschluss Musterstadt",
      "Berufsausbildung Musterstadt",
      "Berufsorientierung Musterstadt",
      "Weiterbildung Musterstadt",
      "Integrationskurs Musterstadt"
    ],
    meta: "Not publicly visible.",
    contentStructure:
      "Service-based hierarchy with Driving School, Logistics, Professional Drivers, Dates, and Contact.",
    linking:
      "Service pages link to Termine and Kontakt for conversion."
  },
  trust: {
    testimonials: "Not publicly visible.",
    reviews: "Not publicly visible.",
    certifications: ["DIN EN ISO 9001:2015", "AZAV zugelassener Traeger"],
    security: "SSL (HTTPS) active"
  },
  monetization:
    "Lead-generation and booking website. Revenue is generated offline through course fees, driving lessons, and government-funded training programs.",
  competition: {
    competitors:
      "Local training centers in the district and national chains in the state.",
    advantages:
      "One-stop-shop for private individuals and B2B logistics clients.",
    weaknesses:
      "Localized reach and dependency on regional economy and employment agency funding."
  },
  compliance: {
    scamIndicators: "None",
    missingLegalInfo: "None",
    suspiciousClaims: "None"
  }
} as const;

export const navigation = [
  { href: "/", label: "Homepage" },
  { href: "/fahrschule", label: "Schulabschluss" },
  { href: "/berufskraftfahrer-weiterbildung", label: "Berufsausbildung" },
  { href: "/gabelstaplerschein", label: "Berufsorientierung" },
  { href: "/adr-gefahrgut", label: "Weiterbildung" },
  { href: "/termine", label: "Aktuelle Kurse" }
] as const;

export type CourseCategory =
  | "Integrationskurs"
  | "AEVO"
  | "BVJ Sprache"
  | "Berufsorientierung"
  | "Weiterbildung";

export type CourseDate = {
  id: number;
  date: string;
  category: CourseCategory;
  title: string;
};

export const courseDates: CourseDate[] = [
  { id: 1, date: "2026-08-01", category: "Integrationskurs", title: "Integrationskurs fuer junge Erwachsene (Start August 2026)" },
  { id: 2, date: "2026-08-17", category: "AEVO", title: "AEVO Ausbilderqualifizierung (80 Stunden Vollzeitkurs)" },
  { id: 3, date: "2026-09-01", category: "BVJ Sprache", title: "BVJ Sprache (Jugendliche und junge Erwachsene)" },
  { id: 4, date: "2026-09-15", category: "Berufsorientierung", title: "Berufsfelderkundung und Berufsfelderprobung" },
  { id: 5, date: "2026-10-01", category: "Weiterbildung", title: "Berufliche Weiterbildung in Vollzeit und berufsbegleitend" }
];

