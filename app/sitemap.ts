import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/fahrschule",
    "/berufskraftfahrer-weiterbildung",
    "/gabelstaplerschein",
    "/adr-gefahrgut",
    "/termine",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb"
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date()
  }));
}

