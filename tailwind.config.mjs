/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,astro,mdx,md}"],
  theme: {
    extend: {
      colors: {
        // primary: "#18181b",
        hover: "#35353b",
        core: {
          DEFAULT: "rgb(var(--color-core) / <alpha-value>)",
          content: "rgb(var(--color-core-content) / <alpha-value>)",
        },
        crust: {
          DEFAULT: "rgb(var(--color-crust) / <alpha-value>)",
          content: "rgb(var(--color-crust-content) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          content: "rgb(var(--color-primary-content) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          content: "rgb(var(--color-secondary-content) / <alpha-value>)",
        },
        link: "rgb(var(--color-link) / <alpha-value>)",

        // secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
