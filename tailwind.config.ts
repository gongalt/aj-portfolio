import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#1d3461",
        },
        green: {
          accent: "#64ffda",
        },
        slate: {
          dark: "#495670",
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        hero: ["clamp(40px, 8vw, 80px)", { lineHeight: "1.1" }],
        "hero-sub": ["clamp(16px, 3vw, 20px)", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};
export default config;
