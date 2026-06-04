import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostPath, getPublishedPosts } from '../lib/posts';
import { absoluteUrl } from '../lib/urls';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Max Blog',
    description: 'Engineering notes, essays, and project write-ups.',
    site: absoluteUrl('/', context.site ?? 'https://maxxpan.github.io'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: absoluteUrl(getPostPath(post), context.site ?? 'https://maxxpan.github.io'),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
