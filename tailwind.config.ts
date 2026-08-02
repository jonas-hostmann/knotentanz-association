import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f8f5f0",
        muted: "#7d766b",
        "muted-foreground": "#a8a19a",
        border: "#2a2520",
        card: "#0f0f0f",
        "card-foreground": "#f8f5f0",
        primary: {
          DEFAULT: "#c5a059",
          foreground: "#050505",
          50: "#f9f3e8",
          100: "#efe2cb",
          200: "#e3cea8",
          300: "#d7ba85",
          400: "#d1ad6e",
          500: "#c5a059",
          600: "#b08b4a",
          700: "#8c6e3a",
          800: "#675129",
          900: "#423419",
        },
        secondary: {
          DEFAULT: "#14110f",
          foreground: "#f8f5f0",
        },
        accent: {
          DEFAULT: "#f4efe6",
          foreground: "#050505",
        },
        burgundy: {
          DEFAULT: "#6b1c23",
          light: "#8f2a33",
          dark: "#4a1219",
        },
        cream: "#f4efe6",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #c5a059 0%, #f4efe6 50%, #c5a059 100%)",
        "dark-gradient": "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.95) 100%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(197, 160, 89, 0.15)",
        "gold-lg": "0 0 60px rgba(197, 160, 89, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
