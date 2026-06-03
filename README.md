# Max Blog

Personal engineering blog built with Astro, TypeScript, Markdown/MDX, Tailwind CSS, and pnpm.

## Features

- Responsive homepage with latest published posts
- Markdown and MDX post support through Astro Content Collections
- Post archive and static post detail pages
- Tag index and tag archive pages
- About page
- RSS feed at `/rss.xml`
- Sitemap generation through `@astrojs/sitemap`
- Basic SEO metadata, canonical URLs, and Open Graph/Twitter metadata
- Persistent light/dark theme toggle
- GitHub Actions CI for lint, typecheck, test, and build

## Requirements

- Node.js 24
- pnpm 10

Use the project Node version:

```sh
nvm use
```

Install dependencies:

```sh
pnpm install
```

## Development

Start the local dev server:

```sh
pnpm dev
```

Build the static site:

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

Run local checks:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

`pnpm test` is currently a placeholder because this project does not yet have runtime tests.

## Writing Posts

Add posts in `src/content/posts` as `.md` or `.mdx` files.

Example:

```md
---
title: "Building a Durable Development Loop"
description: "A practical note on keeping local checks, commits, and CI aligned."
pubDate: 2026-05-28
updatedDate: 2026-06-02
tags:
  - engineering
  - workflow
draft: false
---

Post content goes here.
```

Frontmatter fields:

- `title`: Post title.
- `description`: Short summary used in lists, RSS, and metadata.
- `pubDate`: Publish date.
- `updatedDate`: Optional update date.
- `tags`: List of topic tags.
- `draft`: Set to `true` to keep the post out of public lists, generated pages, and RSS.

Published posts are sorted by `pubDate` descending.

## Routes

- `/`
- `/posts`
- `/posts/[slug]`
- `/tags`
- `/tags/[tag]`
- `/about`
- `/rss.xml`

## Deployment

This is a static Astro site. Recommended deployment targets:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Use this build command:

```sh
pnpm build
```

Publish this directory:

```text
dist
```

The current `site` value is configured in `astro.config.mjs` as `https://maxxpan.github.io/max-blog/`. Update it if deploying to a custom domain or a different platform URL.

## CI

GitHub Actions runs on pull requests and pushes to `main`.

The workflow is defined in `.github/workflows/ci.yml` and runs:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
