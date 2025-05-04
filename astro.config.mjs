import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeComponents from "rehype-components";
import remarkDirective from "remark-directive";
import react from "@astrojs/react";
import { parseDirectiveNode } from "./src/plugins/remark/directive-rehype";
import { externalLink } from "./src/plugins/rehype/externalLink";
import { CalloutComponent } from "./src/plugins/rehype/callout";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rayshold.vercel.app/",
  image: {
    domains: ["ik.imagekit.io"],
  },
  prefetch: true,
  prefetch: {
    defaultStrategy: "hover",
  },
  markdown: {
    shikiConfig: {
      theme: "aurora-x",
      langs: ["ts", "tsx", "go", "astro", "py", "lua"],
    },
    remarkPlugins: [remarkToc, remarkDirective, parseDirectiveNode],
    rehypePlugins: [
      [externalLink, { domain: "rayshold.vercel.app" }],
      [
        rehypeComponents,
        {
          components: {
            tip: (x, y) => CalloutComponent(x, y, "tip"),
            note: (x, y) => CalloutComponent(x, y, "note"),
            important: (x, y) => CalloutComponent(x, y, "important"),
            caution: (x, y) => CalloutComponent(x, y, "caution"),
            warning: (x, y) => CalloutComponent(x, y, "warning"),
          },
        },
      ],
    ],
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
    sitemap(),
  ],
});

