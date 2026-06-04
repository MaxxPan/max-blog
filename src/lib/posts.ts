import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { withBase } from './urls';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getPostPath(post: CollectionEntry<'posts'>) {
  return withBase(`/posts/${encodeURIComponent(post.id)}/`);
}
