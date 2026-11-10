import { Container } from '@/components/Container'
import { PageEnter } from '@/components/PageEnter'
import { createPageMetadata } from '@/lib/metadata'

const heroTitle = 'A little about Brian.'

export const metadata = createPageMetadata({
  title: 'About',
  description: 'A little about Brian Ruiz, a software engineer and creator.',
  heroTitle,
})

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <PageEnter className="max-w-2xl">
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
            Most days you’ll find me building products, exploring new ideas, or
            making videos about technology and the creative process. Away from
            the desk, I’m usually out taking photos or finding a new corner of
            the city to explore.
          </p>
          <p>
            This page is a starting point. Add the details, interests, and links
            that make your own story feel like yours.
          </p>
        </div>
      </PageEnter>
    </Container>
  )
}
