import Link from 'next/link'
import Image from 'next/image'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { PageEnter } from '@/components/PageEnter'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { type PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/formatDate'

export function PostLayout({
  post,
  children,
  showDescription = true,
  showCover = true,
}: {
  post: PostMeta
  children: React.ReactNode
  showDescription?: boolean
  showCover?: boolean
}) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/writing"
            aria-label="Back to writing"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-md ring-1 shadow-foreground/5 ring-border transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:bg-muted dark:ring-0 dark:hover:ring-1 dark:hover:ring-foreground/20"
          >
            <ArrowUturnLeftIcon className="size-4 text-muted-foreground transition group-hover:text-foreground" />
          </Link>
          <article>
            <PageEnter as="header" className="flex flex-col">
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                {post.title}
              </h1>
              <time
                dateTime={post.date}
                className="order-first flex items-center text-base text-muted-foreground"
              >
                <span className="h-4 w-0.5 rounded-full bg-foreground/20" />
                <span className="ml-3">{formatDate(post.date)}</span>
              </time>
              {showDescription && (
                <p className="mt-6 text-base text-muted-foreground">
                  {post.description}
                </p>
              )}
            </PageEnter>

            <PageEnter index={1}>
              {post.type === 'video' && (
                <YouTubeEmbed id={post.youtubeId} title={post.title} />
              )}

              {showCover && post.type === 'article' && post.coverImage && (
                <div className="mt-8 overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 42rem, 100vw"
                    priority
                  />
                </div>
              )}

              <Prose className="mt-8" data-mdx-content>
                {children}
              </Prose>
            </PageEnter>
          </article>
        </div>
      </div>
    </Container>
  )
}
