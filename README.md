# Muster-Bildungszentrum e.V. Website

_A modern, responsive education-center website with a hand-drawn sketchy design system._

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Next.js: 15](https://img.shields.io/badge/Next.js-15-000000.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6.svg)](https://www.typescriptlang.org/)

---

## ✨ Overview

Muster-Bildungszentrum e.V. is a modern, highly interactive, and responsive web application built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**. The site features a premium, unique sketchy hand-drawn aesthetic with custom micro-animations (sketchy floats, wobbling buttons), custom page layouts, a fully integrated contact form with Server Actions, and privacy-compliant elements like a cookie consent banner.

- **No client-side form handling** — contact submissions run through Next.js Server Actions with built-in validation.
- **No third-party cookie library** — consent choices are stored locally via a custom banner.
- **No unoptimized images** — AVIF/WebP formats are configured out of the box.

## 🚀 Features

- **Custom Sketchy Design System** — Tailored HSL-based color palette with hand-drawn style components and custom CSS micro-animations
- **Responsive Page Layouts**:
  - Homepage (Overview, Course Previews, Features)
  - Driving School / Schulabschluss (`/fahrschule`)
  - Professional Driver / Berufskraftfahrer (`/berufskraftfahrer-weiterbildung`)
  - Forklift Certification / Gabelstaplerschein (`/gabelstaplerschein`)
  - ADR Hazmat Training / Weiterbildung (`/adr-gefahrgut`)
  - Live Schedule Table (`/termine`)
  - Interactive Contact Form (`/kontakt`)
- **Secure Actions** — Contact forms use Next.js Server Actions with built-in validation and honeypot spam protection
- **Privacy Controls** — Custom cookie consent banner storing choices locally
- **Performance & SEO** — Configured meta descriptions, semantic HTML, and image format optimization (AVIF/WebP)

## 📋 Requirements

- [Node.js](https://nodejs.org/) LTS (version 18+ or 20+ recommended)
- An SMTP provider for contact-form email delivery

## 📦 Installation

### Option A — Local development

```bash
git clone <repository-url>
cd schule-website

npm install
```

Create a `.env.local` file in the root directory (based on `.env.example`) and fill in your SMTP details:

```env
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_username
```

Then start the dev server:

```bash
npm run dev
```

> The app will be available at [http://localhost:3000](http://localhost:3000) (or the next available port if 3000 is occupied).

### Option B — Production build

```bash
npm run build
npm run start
```

## 🎛 Configuration

Configuration is done via environment variables in `.env.local`.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `SMTP_HOST` | string | — (required) | SMTP server host for contact-form email delivery |
| `SMTP_PORT` | int | `587` | SMTP server port |
| `SMTP_USER` | string | — (required) | SMTP authentication username |

## 🛠 Tech Stack

- **Core**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v3, Vanilla CSS Animations
- **Icons**: Lucide React

## 🖼 Preview

<!-- Add a screenshot or GIF here, e.g. -->
<!-- ![Muster-Bildungszentrum homepage](docs/preview.png) -->

_Feel free to add a screenshot of the homepage and the sketchy design system in action._

## 🛠 Troubleshooting

| Problem | Solution |
| --- | --- |
| Contact form doesn't send | Verify `SMTP_HOST`, `SMTP_PORT`, and `SMTP_USER` are set correctly in `.env.local` |
| Form submissions silently rejected | Check the honeypot field wasn't unintentionally filled by autofill/browser extensions |
| Port 3000 already in use | Next.js automatically falls back to the next available port; check the terminal output for the actual URL |
| Animations not rendering | Confirm `globals.css` keyframes weren't stripped by a CSS purge/build step |
| Images not optimized | Confirm images are served through `next/image`, not raw `<img>` tags |

## 💻 Development

### Project structure

```text
├── app/                  # Next.js App Router (Pages, layouts, actions, metadata)
│   ├── actions.ts        # Server Actions (Contact form handler)
│   ├── globals.css       # Core design system and custom keyframe animations
│   └── page.tsx          # Homepage
├── components/           # Reusable UI Components (Header, Footer, Tables, Forms)
├── lib/                  # Utilities (Site config, SEO helper, validation, email)
├── public/               # Static assets (images, fonts, sitemap)
├── .gitignore            # Git exclusion rules (ignores secrets & local builds)
├── package.json          # Node dependency definitions
└── tsconfig.json         # TypeScript configuration compiler options
```

### How it works

- The App Router in `app/` handles routing, layouts, and metadata for each page (homepage, Fahrschule, Berufskraftfahrer, Gabelstaplerschein, ADR-Gefahrgut, Termine, Kontakt).
- `app/actions.ts` defines the Server Action that validates and processes contact form submissions server-side, including honeypot spam protection.
- `app/globals.css` holds the HSL-based color palette, hand-drawn component styles, and custom keyframe animations (sketchy floats, wobbling buttons).
- `lib/` centralizes site configuration, SEO metadata helpers, form validation, and email sending logic used across routes and actions.
- Images are served via `next/image` with AVIF/WebP optimization configured for performance and SEO.

## 📄 License

This repository is licensed under a **Proprietary License**.

Copyright © 2026 **Muster-Bildungszentrum e.V.** All Rights Reserved.

Commercial and private use, copy, modification, and distribution of this software are strictly prohibited without the express written permission of the copyright owner. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/)
