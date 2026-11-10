import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-09-22',
  title: 'Sample: A Week of Wandering in Kyoto',
  description:
    'A short travel journal about slow mornings, side streets, and seeing a city on foot.',
  coverImage:
    'https://images.unsplash.com/photo-1769921546096-7a648d953a3e?auto=format&fit=crop&w=1400&q=80',
} satisfies PostMeta
