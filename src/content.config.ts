import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

// -----------------------------------------
// POST SCHEMA
// -----------------------------------------
const post = z.object({
  draft: z.boolean(),
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  tags: z.array(z.string()),
  image: image.optional(),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: post,
});

export type PostType = {
  id: string;
  body?: string;
  data: z.infer<typeof post>;
};

// -----------------------------------------
// EXPORTS
// -----------------------------------------
export const collections = {
  blog: blogCollection,
};
