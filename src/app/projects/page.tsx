import Image, { type ImageProps } from 'next/image'
import { LinkIcon } from '@heroicons/react/24/outline'

import {
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
} from '@/components/ContentCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { iconChromeClassName } from '@/lib/iconChrome'
import { createPageMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'
import beamLogo from '@/images/logos/beam-dark.png'
import studioLogo from '@/images/logos/animaginary.svg'
import dashboardLogo from '@/images/logos/open-shuttle.svg'
import fieldNotesLogo from '@/images/logos/field-notes.svg'

interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  logo?: ImageProps['src']
}

const projects: Array<Project> = [
  {
    name: 'Beam',
    description:
      'A calm space for tasks, projects, notes, and your day, built for Apple devices.',
    link: {
      href: 'https://joinbeam.app',
      label: 'joinbeam.app',
    },
    logo: beamLogo,
  },
  {
    name: 'Studio UI Kit',
    description:
      'A flexible component library for building clear, accessible product interfaces.',
    link: {
      href: 'https://github.com/yourname/studio-ui-kit',
      label: 'github.com/yourname/studio-ui-kit',
    },
    logo: studioLogo,
  },
  {
    name: 'Orbit Dashboard',
    description:
      'A project workspace for organizing work, tracking progress, and sharing updates.',
    link: {
      href: 'https://github.com/yourname/orbit-dashboard',
      label: 'github.com/yourname/orbit-dashboard',
    },
    logo: dashboardLogo,
  },
  {
    name: 'Field Notes',
    description:
      'A quiet space for collecting ideas, observations, and inspiration, then shaping them into something useful.',
    link: {
      href: 'https://github.com/yourname/field-notes',
      label: 'github.com/yourname/field-notes',
    },
    logo: fieldNotesLogo,
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
              <div
                className={cn(
                  'relative z-20 flex size-12 items-center justify-center rounded-full text-sm font-semibold text-foreground',
                  iconChromeClassName,
                )}
              >
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 rounded-full"
                    unoptimized
                  />
                ) : (
                  project.name.slice(0, 2).toUpperCase()
                )}
              </div>
              <ContentCardTitle
                href={project.link.href}
                external={!project.link.href.startsWith('/')}
                className="mt-6"
              >
                {project.name}
              </ContentCardTitle>
              <ContentCardDescription className="line-clamp-3 text-pretty">
                {project.description}
              </ContentCardDescription>
              <p className="relative z-20 mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition group-hover:text-accent">
                <LinkIcon className="size-4 flex-none" />
                <span className="line-clamp-1">{project.link.label}</span>
              </p>
            </ContentCard>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
