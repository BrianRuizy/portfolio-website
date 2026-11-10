import Image from 'next/image'
import { LinkIcon } from '@heroicons/react/24/outline'

import {
  ContentCard,
  ContentCardDescription,
  ContentCardTitle,
} from '@/components/ContentCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { createPageMetadata } from '@/lib/metadata'
import beamLogo from '@/images/logos/beam-icon-borderless.svg'
import studioLogo from '@/images/logos/animaginary.svg'
import dashboardLogo from '@/images/logos/open-shuttle.svg'

const projects = [
  {
    name: 'Beam',
    description:
      'A calm space for tasks, projects, notes, and your day, built for Apple devices.',
    href: 'https://joinbeam.app',
    label: 'joinbeam.app',
    logo: beamLogo,
    logoBackground: 'bg-[#242424]',
  },
  {
    name: 'Studio UI Kit',
    description:
      'A flexible component library for building clear, accessible product interfaces.',
    href: 'https://github.com/yourname/studio-ui-kit',
    label: 'github.com/yourname/studio-ui-kit',
    logo: studioLogo,
    logoBackground: 'bg-transparent',
  },
  {
    name: 'Orbit Dashboard',
    description:
      'A project workspace for organizing work, tracking progress, and sharing updates.',
    href: 'https://github.com/yourname/orbit-dashboard',
    label: 'github.com/yourname/orbit-dashboard',
    logo: dashboardLogo,
    logoBackground: 'bg-transparent',
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
                className={`relative flex size-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-border ${project.logoBackground}`}
              >
                <Image
                  src={project.logo}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="size-8 object-contain"
                />
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
