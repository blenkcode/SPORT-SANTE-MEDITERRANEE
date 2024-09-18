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
        newblue: "#9FBDC3",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      borderWidth: {
        // Ajoute ou modifie la classe 'border-1'
        "1": "1px", // Exemple: changer 'border-1' pour 2px au lieu de 1px
      },
      height: {
        circle: "1000px",
        "200": "480px",
        "700": "600px",
        "600": "600px",
        "800": "800px",
        "1000": "1000px",

        banner: "200px",
      },
      width: {
        "200": "1000px",
        circle: "1000px",
      },
      transitionDuration: {
        "2000": "1700ms",
        title: "1200ms",
      },
    },
  },
  plugins: [
    function (pluginApi: any) {
      // Désactivation temporaire du typage avec `any`
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "0.001px white",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1.5px white",
        },
        ".text-stroke-white2": {
          "-webkit-text-stroke": "0.5px white",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "2px black",
        },
      };

      pluginApi.addUtilities(newUtilities);
    },
  ],
};
export default config;
