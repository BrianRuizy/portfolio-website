import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  ContentCard,
  ContentCardCta,
  ContentCardDescription,
  ContentCardEyebrow,
  ContentCardTitle,
} from '@/components/ContentCard'
import { Newsletter } from '@/components/Newsletter'
import { PhotoGallery } from '@/components/PhotoGallery'
import { PageEnter } from '@/components/PageEnter'
import {
  GitHubIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { iconChromeClassName } from '@/lib/iconChrome'
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
      <ContentCardCta>View post</ContentCardCta>
    </ContentCard>
  )
}

const experience = [
  {
    company: 'Pan Am',
    role: 'Systems Engineer',
    dates: '1987 — 1991',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Pan_Am_Logo.svg',
    logoBackground: 'bg-transparent',
    logoMarkClassName: 'p-0',
  },
  {
    company: 'NeXT',
    role: 'Software Engineer',
    dates: '1994 — 1997',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/NeXT_logo.svg',
    logoBackground: 'bg-white',
    logoMarkClassName: 'p-1.5',
  },
  {
    company: 'Twitter',
    role: 'Software Engineer',
    dates: '2009 — 2023',
    logo: '/logos/twitter-bird.svg',
    logoBackground: 'bg-[#1DA1F2]',
    logoMarkClassName: 'p-1.5',
  },
]

const socials = [
  {
    href: 'https://www.instagram.com/brianruizy',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  { href: 'https://x.com/brianruizy', label: 'X', Icon: XIcon },
  {
    href: 'https://www.youtube.com/@brianruizy',
    label: 'YouTube',
    Icon: YouTubeIcon,
  },
  { href: 'https://github.com/brianruizy', label: 'GitHub', Icon: GitHubIcon },
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
            Software engineer and part-time YouTuber building thoughtful digital
            products. Based in New York City, usually working on an app, a side
            project, or a new video.
          </p>
          <div className="mt-6 flex gap-4">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="group p-1"
              >
                <Icon className="size-6 fill-muted-foreground transition group-hover:fill-foreground" />
              </Link>
            ))}
          </div>
        </PageEnter>
      </Container>

      <PhotoGallery />

      <Container className="mt-24 md:mt-28">
        <PageEnter index={3}>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 md:max-w-none md:grid-cols-2">
            <section aria-labelledby="latest-heading" className="space-y-10">
              <h2
                id="latest-heading"
                className="text-sm font-semibold tracking-tight"
              >
                Latest
              </h2>
              <div className="flex flex-col gap-16">
                {posts.map((post) => (
                  <LatestPost key={post.href} post={post} />
                ))}
              </div>
            </section>

            <div className="space-y-10 md:pl-8 lg:pl-16 xl:pl-24">
              <Newsletter />
              <section
                aria-labelledby="experience-heading"
                className="rounded-2xl border border-border p-6"
              >
                <h2
                  id="experience-heading"
                  className="text-sm font-semibold text-foreground"
                >
                  Experience
                </h2>
                <ol className="mt-6 space-y-5">
                  {experience.map((item) => (
                    <li
                      key={item.company}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className={`relative flex size-10 flex-none items-center justify-center overflow-hidden rounded-full p-1.5 ${iconChromeClassName}`}
                      >
                        <span
                          className={`flex size-full items-center justify-center overflow-hidden rounded-full ${item.logoBackground}`}
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={32}
                            height={32}
                            unoptimized
                            className={`size-full rounded-full object-contain ${item.logoMarkClassName}`}
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground">{item.role}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {item.dates}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </PageEnter>
      </Container>
    </>
  )
}
