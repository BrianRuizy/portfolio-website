import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

import {
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
} from '@/components/ContentCard'
import { Section } from '@/components/Section'
import { PageEnter } from '@/components/PageEnter'
import { SimpleLayout } from '@/components/SimpleLayout'
import { toolGroups, type ToolItem } from '@/app/gear/tools'
import { createPageMetadata } from '@/lib/metadata'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-12 sm:space-y-14">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, description }: ToolItem) {
  return (
    <ContentCard as="li">
      <div className="min-w-0">
        <ContentCardTitle
          as="h3"
          href={href}
          external={Boolean(href)}
          className={href ? 'text-accent' : undefined}
        >
          <span className="inline-flex items-center gap-2">
            {title}
            {href ? (
              <ArrowUpRightIcon
                className="size-4 text-accent transition"
                aria-hidden
              />
            ) : null}
          </span>
        </ContentCardTitle>
        <ContentCardDescription className="text-pretty">
          {description}
        </ContentCardDescription>
      </div>
    </ContentCard>
  )
}

const heroTitle = 'Things I use to build, create, and stay productive.'

export const metadata = createPageMetadata({
  title: 'Gear',
  description: 'Things I use to build, create, and stay productive.',
  heroTitle,
})

export default function Gear() {
  return (
    <SimpleLayout
      title={heroTitle}
      animateChildren={false}
      intro="Here are some of the tools I actually own and enjoy using on a daily basis. Mostly tech. Some links are affiliate links, I may earn a commission."
    >
      <div className="space-y-20">
        {toolGroups.map((group, index) => (
          <PageEnter key={group.title} index={index + 1}>
            <ToolsSection title={group.title}>
              {group.tools.map((tool) => (
                <Tool key={tool.title} {...tool} />
              ))}
            </ToolsSection>
          </PageEnter>
        ))}
      </div>
    </SimpleLayout>
  )
}
