import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-console": "warn",
      "prefer-const": "warn",

      // Security Vulnerability
      "astro/no-set-html-directive": "error",

      // Styling
      "astro/no-unused-css-selector": "warn",

      semi: "off",
      "astro/semi": [
        "error",
        "always", // or "never"
        { omitLastInOneLineBlock: true },
        // or { "beforeStatementContinuationChars": "any" | "always" | "never" }
      ],
    },
  },
];
