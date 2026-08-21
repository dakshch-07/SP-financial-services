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
        navy: {
          900: "#061833",
          800: "#0B2A55", // Primary navy
          700: "#123B7A", // Secondary navy
          600: "#194C9E",
          500: "#2460C4",
          100: "#EAF1FB",
          50: "#F4F7FC",
        },
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EEDFA8",
          300: "#E3CB7A",
          400: "#D4AF37", // Primary gold accent
          500: "#C29B27",
          600: "#A6821C",
          700: "#7E6014",
        },
        cyanAccent: {
          DEFAULT: "#2E9BD6",
          hover: "#2284B9",
          light: "#E8F5FD",
        },
        brandGreen: {
          DEFAULT: "#1E8F5F",
          light: "#E8F8F0",
        },
        brandOrange: {
          DEFAULT: "#E06B2C",
          light: "#FCF0EA",
        },
        warmBg: "#FAF9F6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.35)",
        navy: "0 15px 35px -10px rgba(11, 42, 85, 0.25)",
        card: "0 4px 20px -2px rgba(11, 42, 85, 0.08)",
        "card-hover": "0 20px 35px -5px rgba(11, 42, 85, 0.14)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
