import type { Metadata } from "next";
import Script from "next/script";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { MobileRegisterButton } from "@/components/mobile-register-button";
import { siteConfig } from "@/lib/site";

const headingFont = Kalam({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading"
});

const bodyFont = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.websiteName,
    template: `%s | ${siteConfig.websiteName}`
  },
  description: siteConfig.purpose,
  keywords: [...siteConfig.seo.keywords]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeInitScript = `
    (() => {
      try {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (saved === "dark" || (!saved && prefersDark)) {
          document.documentElement.classList.add("dark");
        }
      } catch {}
    })();
  `;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: siteConfig.websiteName,
        url: siteConfig.domain,
        description: siteConfig.purpose,
        areaServed: "Muehlhausen, Thueringen, Germany"
      },
      {
        "@type": "LocalBusiness",
        name: siteConfig.websiteName,
        url: siteConfig.domain,
        telephone: siteConfig.business.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muehlhausen",
          addressRegion: "Thueringen",
          addressCountry: "DE"
        }
      }
    ]
  };

  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieBanner />
        <MobileRegisterButton />
        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

