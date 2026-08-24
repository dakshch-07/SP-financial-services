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
        forest: {
          950: "#041412",
          900: "#08201D", // Deep Forest Dark (Primary Trust)
          850: "#0C2D27",
          800: "#0F3B32", // Primary Forest Green
          700: "#144D42",
          600: "#1E6B5C",
          500: "#2B8A77",
          100: "#E3F3EF",
          50: "#F0F8F6",
        },
        navy: {
          950: "#050E1A",
          900: "#0A1D33", // Deep Slate Navy
          800: "#0E2847",
          700: "#153B66",
          600: "#1E508A",
          100: "#E6EEF8",
          50: "#F2F6FB",
        },
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA8",
          300: "#E3CB7A",
          400: "#D4AF37", // Warm Gold Accent (MDRT Prestige)
          500: "#C29B27",
          600: "#A6821C",
          700: "#7E6014",
        },
        cream: {
          50: "#FCFBF9",
          100: "#FBF9F5", // Warm Cream Background
          200: "#F5F2EA",
          300: "#EAE5D8",
          400: "#D8D0BE",
        },
        emeraldAccent: {
          DEFAULT: "#1E8F5F",
          light: "#E8F8F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.35)",
        forest: "0 15px 35px -10px rgba(8, 32, 29, 0.25)",
        card: "0 4px 25px -2px rgba(8, 32, 29, 0.06)",
        "card-hover": "0 20px 40px -5px rgba(8, 32, 29, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
