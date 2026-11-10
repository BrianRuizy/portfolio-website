import { Container } from '@/components/Container'
import { PageEnter } from '@/components/PageEnter'
import { createPageMetadata } from '@/lib/metadata'

const heroTitle = 'A little about Your Name.'

export const metadata = createPageMetadata({
  title: 'About',
  description: 'Learn more about Your Name and the work they do.',
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
            Introduce yourself here. Share where you are based, how you got into
            your work, and the kinds of things you enjoy making.
          </p>
          <p>
            Add a little more detail about your experience, interests, or
            approach. This starter keeps the page intentionally simple so it is
            easy to shape around your own story.
          </p>
          <p>
            Replace this paragraph with a way for readers to get in touch, or
            add links to the places where you share your work.
          </p>
        </div>
      </PageEnter>
    </Container>
  )
}
