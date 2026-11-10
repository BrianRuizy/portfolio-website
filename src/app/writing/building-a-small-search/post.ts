import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-11-04',
  title: 'Sample: Building a Small Search Feature',
  description:
    'A practical look at turning a simple search box into a useful part of a product.',
  coverImage:
    'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1400&q=80',
} satisfies PostMeta
