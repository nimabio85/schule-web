import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        pencil: "rgb(var(--color-pencil) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        pen: "rgb(var(--color-pen) / <alpha-value>)"
      },
      boxShadow: {
        hand: "4px 4px 0px 0px #2d2d2d",
        "hand-lg": "8px 8px 0px 0px #2d2d2d",
        "hand-soft": "3px 3px 0px 0px rgba(45,45,45,0.1)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "cursive"],
        body: ["var(--font-body)", "cursive"]
      }
    }
  },
  plugins: []
};

export default config;
