import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-09-22',
  title: 'A Week of Wandering in Kyoto',
  description:
    'A travel journal about Kyoto: taking the long way, noticing small details, and leaving room for unplanned stops.',
  coverImage:
    'https://images.unsplash.com/photo-1592368365898-f96c398d5469?w=900&auto=format',
} satisfies PostMeta
