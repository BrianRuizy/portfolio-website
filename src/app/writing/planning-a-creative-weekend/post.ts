import type { PostMeta } from '@/lib/posts'

export const post = {
  type: 'article',
  author: 'Brian Ruiz',
  date: '2026-10-18',
  title: 'Sample: A More Thoughtful Content Workflow',
  description:
    'A lightweight routine for turning an idea into a finished video or article.',
  coverImage:
    'https://images.unsplash.com/photo-1639426090332-69e939822d99?auto=format&fit=crop&w=1400&q=80',
} satisfies PostMeta
