# Personal Portfolio Starter

A customizable personal portfolio and writing site built with Next.js. Replace the sample copy, profile details, and example article with your own content.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [MDX](https://mdxjs.com) for writing
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for animation

## Getting started

1. `npm install`
2. Copy `.env.example` to `.env.local` and set your site URL
3. `npm run dev`

## Environment

| Variable               | Purpose                                                |
| ---------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, sitemap, and RSS |

## Content

- Update `src/lib/site-copy.ts` and `src/app/page.tsx` for the homepage.
- Replace the sample page in `src/app/about/page.tsx`.
- Add a `post.ts`, `page.tsx`, and `content.mdx` under `src/app/writing/<slug>/` for each article.
- Set your site URL in `.env.local` before deploying.
