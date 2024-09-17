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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      borderWidth: {
        // Ajoute ou modifie la classe 'border-1'
        "1": "1px", // Exemple: changer 'border-1' pour 2px au lieu de 1px
      },
    },
  },
  plugins: [],
};
export default config;
