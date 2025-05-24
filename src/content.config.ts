import { file, glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

// -----------------------------------------
// POST COLLECTION SCHEMA
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
// PROJECTS COLLECTION
// -----------------------------------------
const projectsSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  sourceUrl: z.string().optional(),
  hostedUrl: z.string().optional(),
  image: z.string(),
  status: z.enum(["PLANNING", "WIP", "COMPLETE"]),
  stack: z.array(z.string()),
  features: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        color: z.string(),
      })
    )
    .optional(),
});

export type ProjectType = z.infer<typeof projectsSchema>;

const projects = defineCollection({
  loader: file("src/content/resources/projects.json"),
  schema: projectsSchema,
});

// -----------------------------------------
// EXPORTS
// -----------------------------------------
export const collections = {
  blog: blogCollection,
  projects,
};
