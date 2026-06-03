import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostPath, getPublishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Max Blog',
    description: 'Engineering notes, essays, and project write-ups.',
    site: context.site ?? 'https://maxxpan.github.io/max-blog/',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostPath(post).replace(/^\//, ''),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
