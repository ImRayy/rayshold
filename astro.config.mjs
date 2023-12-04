import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: true,
  prefetch: {
    defaultStrategy: "hover",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      optimize: true,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "material-theme",
      },
    }),
  ],
});
