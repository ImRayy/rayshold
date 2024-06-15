import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: true,
  prefetch: {
    defaultStrategy: "hover",
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      langs: ["ts", "tsx", "go", "astro", "py", "lua"],
    },

    remarkPlugins: [remarkToc],
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
