import { getCollection } from "astro:content";

export async function getSortedPosts() {
  const allBlogPosts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  allBlogPosts.sort((a, b) =>
    new Date(a.data.publishDate).getTime() >
    new Date(b.data.publishDate).getTime()
      ? -1
      : 1
  );

  return allBlogPosts;
}
