import { LinkIcon } from '@heroicons/react/24/outline'

import {
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
} from '@/components/ContentCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { createPageMetadata } from '@/lib/metadata'

const projects = [
  {
    name: 'Beam',
    description:
      'A calm space for tasks, projects, notes, and your day, built for Apple devices.',
    href: 'https://joinbeam.app',
    label: 'joinbeam.app',
  },
  {
    name: 'COVID-19 Dashboard',
    description:
      'An interactive dashboard for exploring public health data and trends.',
    href: 'https://github.com/brianruizy/covid19-dashboard',
    label: 'GitHub',
  },
  {
    name: 'Portfolio Starter',
    description:
      'A personal site for sharing projects, writing, photos, and the tools behind the work.',
    href: 'https://github.com/BrianRuizy/portfolio-website',
    label: 'GitHub',
  },
]

const heroTitle = 'A few things I’ve made.'

export const metadata = createPageMetadata({
  title: 'Projects',
  description: 'A selection of projects and products by Brian Ruiz.',
  heroTitle,
})

export default function Projects() {
  return (
    <SimpleLayout
      title={heroTitle}
      intro={
        <>
          Products, experiments, and tools I’ve worked on. Find more of my code
          on{' '}
          <a href="https://github.com/brianruizy" className="link-underline">
            GitHub
          </a>
          .
        </>
      }
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li key={project.name}>
            <ContentCard className="h-full">
              <div className="flex size-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground ring-1 ring-border">
                {project.name.slice(0, 2).toUpperCase()}
              </div>
              <ContentCardTitle href={project.href} external className="mt-6">
                {project.name}
              </ContentCardTitle>
              <ContentCardDescription className="text-pretty">
                {project.description}
              </ContentCardDescription>
              <p className="relative z-20 mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <LinkIcon className="size-4 flex-none" aria-hidden />
                {project.label}
              </p>
            </ContentCard>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
