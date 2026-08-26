import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "forest" remapped to SP logo navy blues — no class names need to change
        forest: {
          950: "#020C1B", // Deepest Navy (hero backgrounds)
          900: "#061428", // Deep Navy (cards, dark sections)
          850: "#0A1C38",
          800: "#0D2345", // Primary Navy Blue (logo primary)
          700: "#122E5C",
          600: "#1A4280", // Mid Navy
          500: "#2257A8",
          100: "#E6EDF8",
          50:  "#F0F4FB",
        },
        navy: {
          950: "#020C1B",
          900: "#061428",
          800: "#0D2345",
          700: "#122E5C",
          600: "#1A4280",
          100: "#E6EDF8",
          50:  "#F0F4FB",
        },
        gold: {
          50:  "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA8",
          300: "#E3CB7A",
          400: "#D4AF37", // Rich Gold Accent (logo gold arrows/text)
          500: "#C29B27",
          600: "#A6821C",
          700: "#7E6014",
        },
        cream: {
          50:  "#FCFBF9",
          100: "#FBF9F5",
          200: "#F5F2EA",
          300: "#EAE5D8",
          400: "#D8D0BE",
        },
        // Sky blue for chart bars / secondary accents (logo bar chart color)
        skyBlue: {
          DEFAULT: "#1976D2",
          light:   "#E3F0FB",
          dark:    "#1044A0",
        },
        emeraldAccent: {
          DEFAULT: "#1E8F5F",
          light:   "#E8F8F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Fraunces", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "Manrope", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold:         "0 10px 30px -10px rgba(212, 175, 55, 0.35)",
        forest:       "0 15px 35px -10px rgba(6, 20, 40, 0.25)",
        card:         "0 4px 25px -2px rgba(6, 20, 40, 0.06)",
        "card-hover": "0 20px 40px -5px rgba(6, 20, 40, 0.12)",
        navy:         "0 10px 30px -8px rgba(13, 35, 69, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

