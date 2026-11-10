import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-11-04',
  title: 'Building a Small Search Feature',
  description:
    'A practical look at turning a simple search box into a useful part of a product.',
  coverImage:
    'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80',
} satisfies PostMeta
