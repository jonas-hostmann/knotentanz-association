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
        background: "#0a0a0a",
        foreground: "#f8f8f8",
        muted: "#737373",
        "muted-foreground": "#a3a3a3",
        border: "#262626",
        card: "#111111",
        "card-foreground": "#f8f8f8",
        primary: {
          DEFAULT: "#c9a227",
          foreground: "#0a0a0a",
          50: "#f9f1d8",
          100: "#f0e0b0",
          200: "#e6cf88",
          300: "#ddbe60",
          400: "#d4ad38",
          500: "#c9a227",
          600: "#a1811f",
          700: "#796117",
          800: "#50410f",
          900: "#282007",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#f8f8f8",
        },
        accent: {
          DEFAULT: "#e8dcc0",
          foreground: "#0a0a0a",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
