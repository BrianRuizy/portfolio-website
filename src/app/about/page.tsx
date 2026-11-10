import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import { PageEnter } from '@/components/PageEnter'
import {
  GitHubIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { Portrait, SocialLinksEnter } from '@/app/about/Portrait'
import { createPageMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'

const heroTitle = 'A little about me.'

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              mattis, neque nec bibendum posuere, massa lorem pretium erat, vel
              facilisis augue lacus vitae odio. Curabitur interdum sem vitae
              magna tempus, sed dictum justo pulvinar. Integer at mi vel magna
              ultrices feugiat. Suspendisse potenti. Aenean euismod, justo nec
              placerat gravida, ligula lacus varius lorem, vitae blandit magna
              urna et odio. Praesent faucibus libero et purus facilisis, vel
              tincidunt justo blandit. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Duis sed dolor
              vitae ante convallis ullamcorper.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat, mi quis posuere consequat, magna urna dapibus tellus, a
              interdum nulla arcu non sem. Donec sit amet ligula sed lectus
              posuere consequat. Morbi vel urna vitae risus gravida tristique.
              Nam pellentesque, ligula a eleifend dapibus, libero velit
              porttitor eros, vitae consequat risus nulla non nibh. Mauris
              volutpat, nulla at sagittis aliquet, tellus neque varius nunc,
              vitae aliquam magna ligula sed purus. Sed non est quis lorem
              vulputate viverra. Aliquam erat volutpat. Cras consequat nunc
              eget commodo facilisis, in vestibulum arcu suscipit.
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
