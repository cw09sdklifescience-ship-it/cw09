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
        // Primary: emerald green
        primary: {
          50:  "#f7fbf9",
          100: "#e6f5ec",
          200: "#c8ead6",
          300: "#a8dfc0",
          400: "#7cc9a0",
          500: "#1f8a55",  // brand emerald
          600: "#146b3e",
          700: "#0f5631",
          800: "#0c4327",
          900: "#09331e",
        },
        // Secondary: charcoal-tinted neutral
        mint: {
          50:  "#f7fbf9",
          100: "#e6f5ec",
          200: "#c8ead6",
          300: "#a8dfc0",
          400: "#7cc9a0",
          500: "#1f8a55",
          600: "#146b3e",
          700: "#0f5631",
          800: "#0c4327",
          900: "#09331e",
        },
        navy: {
          50:  "#f7fbf9",
          100: "#e6f5ec",
          500: "#1f8a55",
          700: "#161c18",
          900: "#10140f",
        },
        // Charcoal family (headers, buttons, dark sections)
        coral: {
          50:  "#f4f5f4",
          100: "#e3e6e4",
          300: "#8b938d",
          400: "#4a534d",
          500: "#2a332c",
          600: "#202822",
          700: "#1b1f1c",
        },
        accent: "#1f8a55",
        surface: "#f7fbf9",
        dark: "#1b1f1c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Georgia", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
