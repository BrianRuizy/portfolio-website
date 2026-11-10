import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-09-22',
  title: 'A Week of Wandering in Kyoto',
  description:
    'A week of slow mornings, quiet gardens, and side streets in Kyoto. A photo journal about taking the long way, noticing the small details, and leaving room in the itinerary for unplanned moments.',
  coverImage:
    'https://images.unsplash.com/photo-1592368365898-f96c398d5469?w=900&auto=format',
} satisfies PostMeta
