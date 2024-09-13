import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import swup from "@swup/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["ik.imagekit.io"],
  },
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
    /**
     * I'm currently using the manual method to initialize Swup to avoid the
     * window.swup type error while globalInstance is set to true
     * **/
    // swup({
    //   theme: false,
    //   cache: true,
    //   smoothScrolling: false,
    //   accessibility: true,
    //   globalInstance: true,
    // }),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      optimize: true,
    }),
    react(),
  ],
});
