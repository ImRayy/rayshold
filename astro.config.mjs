import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
const response = await fetch(
  "https://cdn.jsdelivr.net/gh/ImRayy/cdns@main/themes/moonlight/moonlight-ii.json"
);
const moonlight = await response.json();

export default defineConfig({
  prefetch: true,
  prefetch: {
    defaultStrategy: "hover",
  },
  markdown: {
    shikiConfig: {
      theme: moonlight,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      optimize: true,
    }),
  ],
});
