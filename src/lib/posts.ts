import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getPostPath(post: CollectionEntry<'posts'>) {
  return `/posts/${encodeURIComponent(post.id)}/`;
}
