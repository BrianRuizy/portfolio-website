import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-11-04',
  title: 'Building a Small Search Feature',
  description:
    'A practical walkthrough of building a small, fast search experience with React, from preparing the data and matching queries to handling empty states and keeping the interface useful as a list grows.',
  coverImage:
    'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80',
} satisfies PostMeta
