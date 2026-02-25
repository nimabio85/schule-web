import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata(input: MetadataInput): Metadata {
  const url = `${siteConfig.domain}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ?? [...siteConfig.seo.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: siteConfig.websiteName
    }
  };
}

