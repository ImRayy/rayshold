import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  prefetch: {
    defaultStrategy: "hover"
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-theme"
    }
  })],
  output: "server",
  adapter: vercel()
});