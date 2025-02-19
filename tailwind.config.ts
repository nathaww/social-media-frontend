import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryLight: "#C1F0A4",
        secondaryLight: "#EDEFEA",
        primaryDark: "#292D27",
        secondaryDark: "#131512",
      },
    },
  },
  plugins: [],
};
export default config;
