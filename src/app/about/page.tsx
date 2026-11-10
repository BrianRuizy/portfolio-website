import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import { PageEnter } from '@/components/PageEnter'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { Portrait, SocialLinksEnter } from '@/app/about/Portrait'
import { createPageMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'

const heroTitle = 'A little about Brian.'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={cn(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-foreground transition hover:text-accent"
      >
        <Icon className="size-6 flex-none fill-muted-foreground transition group-hover:fill-accent" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = createPageMetadata({
  title: 'About',
  description: 'A little about Brian Ruiz, a software engineer and creator.',
  heroTitle,
})

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-y-12">
        <div className="md:pl-8 lg:pl-20">
          <Portrait />
        </div>
        <PageEnter className="md:order-first md:row-span-2">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            {heroTitle}
          </h1>
          <div className="mt-6 space-y-7 text-base text-muted-foreground">
            <p>
              I’m a software engineer and creator based in New York City. I like
              making useful things that feel simple, thoughtful, and a little
              delightful to use.
            </p>
            <p>
              Most days you’ll find me building products, exploring new ideas,
              or making videos about technology and the creative process. Away
              from the desk, I’m usually out taking photos or finding a new
              corner of the city to explore.
            </p>
            <p>
              This page is a starting point. Add the details, interests, and
              links that make your own story feel like yours.
            </p>
          </div>
        </PageEnter>
        <SocialLinksEnter>
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/brianruizy"
              icon={InstagramIcon}
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://x.com/brianruizy"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.youtube.com/@brianruizy"
              icon={YouTubeIcon}
              className="mt-4"
            >
              Subscribe on YouTube
            </SocialLink>
            <SocialLink
              href="https://www.github.com/brianruizy"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/brianruizy/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:partners@b-r.io"
              icon={EnvelopeIcon}
              className="mt-8 border-t border-border pt-8"
            >
              partners@b-r.io
            </SocialLink>
          </ul>
        </SocialLinksEnter>
      </div>
    </Container>
  )
}
