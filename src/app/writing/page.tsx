import { Suspense } from 'react'

import { PostsList } from '@/components/PostsList'
import { SimpleLayout } from '@/components/SimpleLayout'
import { createPageMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/posts'

const heroTitle = 'Notes, ideas, and things I have learned.'

export const metadata = createPageMetadata({
  title: 'Writing',
  description: 'Articles and notes by Your Name.',
  heroTitle,
})

export default async function Writing() {
  let posts = await getAllPosts()

  return (
    <SimpleLayout
      title={heroTitle}
      intro="A place for articles, project notes, and ideas worth sharing. Replace this sample copy with a short description of your writing."
    >
      <Suspense fallback={null}>
        <PostsList posts={posts} />
      </Suspense>
    </SimpleLayout>
  )
}
