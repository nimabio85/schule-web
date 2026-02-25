import type { MetadataRoute } from "next";

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
    url: `https://bz-muehlhausen.de${route}`,
    lastModified: new Date()
  }));
}

