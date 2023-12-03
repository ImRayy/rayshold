/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,astro,mdx,md}"],
  theme: {
    extend: {
      colors: {
        primary: "#18181b",
        secondary: "#1f1f22",
        accent: "#1f1f22",
        hover: "#35353b",
        onedark: "#272c34",
        moonlight: "#212127",
      },

      width: {
        custom: "768px",
        customLg: "55rem",
      },
      fontSize: {
        md: "17px",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        ramettoOne: "'Rammetto One', cursive",
        josefinSans: "Josefin Sans, sans-serif",
        atkinsonHyperlegible: "Atkinson Hyperlegible, sans-serif",
        signika: "'Signika', sans-serif'",
      },

      transitionTimingFunction: {
        gentle: "cubic-bezier(0.38, 0, 0, 0.25, 0.99)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
