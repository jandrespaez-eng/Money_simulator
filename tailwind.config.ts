import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Life Simulator Design System Colors
        bosque: {
          DEFAULT: "#2E5A44",
          50: "#E8F0ED",
          100: "#D1E1DA",
          200: "#A3C3B5",
          300: "#75A590",
          400: "#47876B",
          500: "#2E5A44",
          600: "#254836",
          700: "#1C3629",
          800: "#13241B",
          900: "#0A120E",
        },
        asesor: {
          DEFAULT: "#3A5674",
          50: "#EBF0F5",
          100: "#D7E1EB",
          200: "#AFC3D7",
          300: "#87A5C3",
          400: "#5F87AF",
          500: "#3A5674",
          600: "#2E455D",
          700: "#233446",
          800: "#17222E",
          900: "#0C1117",
        },
        estimado: {
          DEFAULT: "#B7570F",
          light: "#D97233",
          dark: "#944509",
        },
        extraordinario: {
          DEFAULT: "#BC3F2B",
          light: "#D45A47",
          dark: "#9A3322",
        },
        fondo: {
          DEFAULT: "#F8F4EF",
          dark: "#F0EBE5",
        },
        carbon: {
          DEFAULT: "#1E2320",
          light: "#2A2E2B",
        },
        // Semantic color mappings
        background: "#F8F4EF",
        foreground: "#1E2320",
        primary: {
          DEFAULT: "#2E5A44",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3A5674",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#E8E5DF",
          foreground: "#6B6A68",
        },
        accent: {
          DEFAULT: "#B7570F",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#BC3F2B",
          foreground: "#FFFFFF",
        },
        border: "#D4D0C8",
        input: "#FFFFFF",
        ring: "#2E5A44",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E2320",
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['84px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['60px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h1': ['44px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['32px', { lineHeight: '1.3' }],
        'h3': ['24px', { lineHeight: '1.4' }],
        'body-lg': ['17px', { lineHeight: '1.5' }],
        'body': ['15px', { lineHeight: '1.5' }],
        'body-sm': ['13px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '6px',
        'pill': '24px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
