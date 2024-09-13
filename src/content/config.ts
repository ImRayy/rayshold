import { z, defineCollection } from "astro:content";

const post = z.object({
  draft: z.boolean(),
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  tags: z.array(z.string()),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })
    .optional(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: post,
});

export const collections = {
  blog: blogCollection,
};

export type PostType = {
  id: string;
  slug: string;
  body: string;
  data: z.infer<typeof post>;
};
