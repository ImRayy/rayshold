/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,astro,mdx,md,tsx}"],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            blockquote: {
              "p:first-of-type::before": { content: "none" },
              "p:first-of-type::after": { content: "none" },
              "@apply mt-0 p-0 border-none text-inherit not-italic": {},
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
          },
        },
      },
      colors: {
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
        border: "rgb(var(--color-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        alert: "rgb(var(--color-alert) / <alpha-value>)",
      },
      fontSize: {
        md: "17px",
      },
      fontFamily: {
        josefinSans: "Josefin Sans, 'sans-serif'",
        inter: "Inter, 'sans-serif'",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
