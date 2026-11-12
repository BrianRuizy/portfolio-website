# Personal Portfolio Starter

A customizable personal portfolio and writing site built with Next.js. It includes project and gear lists, a photo gallery, experience, a newsletter form, and three sample posts. Replace the sample copy and details with your own.

See my portfolio at [b-r.io](https://b-r.io).

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
| `CONVERTKIT_API_KEY`   | Kit API key used by the newsletter form               |
| `CONVERTKIT_FORM_ID`   | Kit form ID used by the newsletter form               |

## Content

- Update `src/lib/site-copy.ts` and `src/app/page.tsx` for the homepage, photos, and experience list.
- Replace the sample bio in `src/app/about/page.tsx`.
- Edit `src/app/projects/page.tsx` and `src/app/gear/tools.ts` for your project and hardware lists.
- Configure the Kit variables above to enable newsletter subscriptions.
- Add a `post.ts`, `page.tsx`, and `content.mdx` under `src/app/writing/<slug>/` for each article.
- Set your site URL in `.env.local` before deploying.
