import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

import {
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
} from '@/components/ContentCard'
import { Section } from '@/components/Section'
import { PageEnter } from '@/components/PageEnter'
import { SimpleLayout } from '@/components/SimpleLayout'
import { toolGroups } from '@/app/gear/tools'
import { createPageMetadata } from '@/lib/metadata'

const heroTitle = 'Things I use to build, create, and stay productive.'

export const metadata = createPageMetadata({
  title: 'Gear',
  description:
    'Hardware and camera gear I use to build, create, and stay productive.',
  heroTitle,
})

export default function Gear() {
  return (
    <SimpleLayout
      title={heroTitle}
      animateChildren={false}
      intro="A selection of the hardware and camera gear I use every day. Some links are affiliate links, so I may earn a commission."
    >
      <div className="space-y-20">
        {toolGroups.map((group, index) => (
          <PageEnter key={group.title} index={index + 1}>
            <Section title={group.title}>
              <ul role="list" className="space-y-8">
                {group.tools.map((tool) => (
                  <li
                    key={tool.title}
                    className="border-b border-border pb-6 last:border-0"
                  >
                    <ContentCard>
                      <ContentCardTitle
                        as="h3"
                        href={tool.href}
                        external={Boolean(tool.href)}
                      >
                        <span className="inline-flex items-center gap-2">
                          {tool.title}
                          {tool.href && (
                            <ArrowUpRightIcon
                              className="size-4 text-muted-foreground"
                              aria-hidden
                            />
                          )}
                        </span>
                      </ContentCardTitle>
                      <ContentCardDescription className="text-pretty">
                        {tool.description}
                      </ContentCardDescription>
                    </ContentCard>
                  </li>
                ))}
              </ul>
            </Section>
          </PageEnter>
        ))}
      </div>
    </SimpleLayout>
  )
}
