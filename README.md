# Muster-Bildungszentrum e.V. Website

A modern, highly interactive, and responsive web application built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**. The site features a premium, unique sketchy hand-drawn aesthetic with custom micro-animations (like sketchy floats and wobbling buttons), custom layouts, a fully integrated contact form with Server Actions, and privacy-compliant elements like a cookie consent banner.

---

## 🚀 Key Features

* **Custom Sketchy Design System**: Tailored HSL-based color palette with hand-drawn style components and custom CSS micro-animations.
* **Responsive Page Layouts**:
  * Homepage (Overview, Course Previews, Features)
  * Driving School / Schulabschluss (`/fahrschule`)
  * Professional Driver / Berufskraftfahrer (`/berufskraftfahrer-weiterbildung`)
  * Forklift Certification / Gabelstaplerschein (`/gabelstaplerschein`)
  * ADR Hazmat Training / Weiterbildung (`/adr-gefahrgut`)
  * Live Schedule Table (`/termine`)
  * Interactive Contact Form (`/kontakt`)
* **Secure Actions**: Contact forms use Next.js Server Actions with built-in validation and honeypot spam protection.
* **Privacy Controls**: Custom cookie consent banner storing choices locally.
* **Performance & SEO**: Configured meta descriptions, semantic HTML, and image format optimization (AVIF/WebP).

---

## 🛠️ Tech Stack

* **Core**: Next.js 15, React 19, TypeScript
* **Styling**: Tailwind CSS v3, Vanilla CSS Animations
* **Icons**: Lucide React

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js LTS** (version 18+ or 20+ recommended) installed on your system.

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd schule-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory (based on `.env.example`) and fill in your SMTP details:
   ```env
   SMTP_HOST=smtp.yourprovider.com
   SMTP_PORT=587
   SMTP_USER=your_username
   ```

### Running the Application

* **Development Mode (Windows / Command Line):**
  You can run the interactive batch file to automatically handle port assignment and open the browser:
  ```cmd
  run.bat
  ```
  Or run the standard dev command:
  ```bash
  npm run dev
  ```
  The app will be available at [http://localhost:3000](http://localhost:3000) (or the next available port if 3000 is occupied).

* **Production Build:**
  To build and start the optimized production bundle:
  ```bash
  npm run build
  ```
  ```bash
  npm run start
  ```

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (Pages, layouts, actions, metadata)
│   ├── actions.ts        # Server Actions (Contact form handler)
│   ├── globals.css       # Core design system and custom keyframe animations
│   └── page.tsx          # Homepage
├── components/           # Reusable UI Components (Header, Footer, Tables, Forms)
├── lib/                  # Utilities (Site config, SEO helper, validation, email)
├── public/               # Static assets (images, fonts, sitemap)
├── .gitignore            # Git exclusion rules (ignores secrets & local builds)
├── run.bat               # Windows automation startup script
├── package.json          # Node dependency definitions
└── tsconfig.json         # TypeScript configuration compiler options
```

---

## 📄 License

This repository is licensed under a **Proprietary License**. 

Copyright © 2026 **Muster-Bildungszentrum e.V.** All Rights Reserved.

Commercial and private use, copy, modification, and distribution of this software are strictly prohibited without the express written permission of the copyright owner. See the [LICENSE](file:///c:/Users/kings/Desktop/free%20time%20project/schule%20web/LICENSE) file for details.
