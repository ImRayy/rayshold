import { getCollection } from "astro:content";
import type { PostType } from "src/content/config";

export async function getSortedPosts() {
  const allBlogPosts: PostType[] = await getCollection(
    "blog",
    (p: PostType) => {
      return p.data.draft !== true;
    }
  );

  allBlogPosts.sort((a, b) =>
    new Date(a.data.publishDate).getTime() >
    new Date(b.data.publishDate).getTime()
      ? -1
      : 1
  );

  return allBlogPosts;
}
