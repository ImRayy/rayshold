import { getCollection } from "astro:content";
import type { PostType } from "src/content/config";
import dayjs from "dayjs";

async function getPosts(): Promise<PostType[]> {
  return await getCollection("blog", (p: PostType) => {
    return p.data.draft !== true;
  });
}

export async function getSortedPosts(): Promise<PostType[]> {
  const posts = await getPosts();

  return posts.sort((a, b) =>
    new Date(a.data.publishDate).getTime() >
    new Date(b.data.publishDate).getTime()
      ? -1
      : 1
  );
}

export async function getPostsByYear(): Promise<{ [key: string]: PostType[] }> {
  const posts = await getPosts();

  return posts.reduce<{ [key: string]: PostType[] }>((acc, post) => {
    const year = dayjs(post.data.publishDate).year().toString();
    if (!acc[year]) acc[year] = [post];
    else acc[year].push(post);

    return acc;
  }, {});
}
