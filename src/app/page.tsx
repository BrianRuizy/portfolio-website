import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  ContentCard,
  ContentCardCta,
  ContentCardDescription,
  ContentCardEyebrow,
  ContentCardTitle,
} from '@/components/ContentCard'
import { PageEnter } from '@/components/PageEnter'
import { formatDate } from '@/lib/formatDate'
import { getAllPosts, type Post } from '@/lib/posts'
import { homeHeroTitle } from '@/lib/site-copy'

function LatestPost({ post }: { post: Post }) {
  return (
    <ContentCard as="article">
      <ContentCardTitle href={post.href}>{post.title}</ContentCardTitle>
      <ContentCardEyebrow as="time" dateTime={post.date}>
        {formatDate(post.date)}
      </ContentCardEyebrow>
      <ContentCardDescription className="text-pretty">
        {post.description}
      </ContentCardDescription>
      <ContentCardCta>Read post</ContentCardCta>
    </ContentCard>
  )
}

const experience = [
  { company: 'Company name', role: 'Your role', dates: '2023 — Present' },
  { company: 'Previous company', role: 'Previous role', dates: '2020 — 2023' },
]

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <>
      <Container className="mt-9">
        <PageEnter className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            {homeHeroTitle}
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Add a short introduction about who you are, what you make, and what
            you care about. Keep it personal and make it yours.
          </p>
          <div className="mt-6 flex gap-6 text-sm font-medium">
            <Link href="/about" className="link-underline">
              About
            </Link>
            <Link href="/writing" className="link-underline">
              Writing
            </Link>
          </div>
        </PageEnter>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 md:max-w-none md:grid-cols-2">
          <section aria-labelledby="latest-heading" className="space-y-10">
            <h2
              id="latest-heading"
              className="text-sm font-semibold tracking-tight"
            >
              Latest writing
            </h2>
            <div className="flex flex-col gap-12">
              {posts.map((post) => (
                <LatestPost key={post.href} post={post} />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="experience-heading"
            className="space-y-6 md:pl-8 lg:pl-16 xl:pl-24"
          >
            <h2
              id="experience-heading"
              className="text-sm font-semibold tracking-tight"
            >
              Experience
            </h2>
            <ol className="space-y-5 rounded-2xl border border-border p-6">
              {experience.map((item) => (
                <li
                  key={item.company}
                  className="flex flex-wrap gap-x-3 gap-y-1 text-sm"
                >
                  <span className="font-medium text-foreground">
                    {item.role}
                  </span>
                  <span className="text-muted-foreground">
                    at {item.company}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.dates}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </Container>
    </>
  )
}
