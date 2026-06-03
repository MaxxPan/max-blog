import type { CollectionEntry } from 'astro:content';
import { getPublishedPosts } from './posts';

export interface TagGroup {
  tag: string;
  slug: string;
  posts: CollectionEntry<'posts'>[];
}

export function getTagSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function getTagPath(tag: string) {
  return `/tags/${encodeURIComponent(getTagSlug(tag))}/`;
}

export async function getTagGroups() {
  const posts = await getPublishedPosts();
  const groups = new Map<string, TagGroup>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = getTagSlug(tag);
      const group = groups.get(slug) ?? { tag, slug, posts: [] };
      group.posts.push(post);
      groups.set(slug, group);
    }
  }

  return Array.from(groups.values()).sort((a, b) =>
    a.tag.localeCompare(b.tag, 'en', { sensitivity: 'base' }),
  );
}
