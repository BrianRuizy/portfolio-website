import { Suspense } from 'react'

import { PostsList } from '@/components/PostsList'
import { SimpleLayout } from '@/components/SimpleLayout'
import { createPageMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/posts'

const heroTitle = 'Notes, ideas, and things I have learned.'

export const metadata = createPageMetadata({
  title: 'Writing',
  description: 'Articles, project notes, and ideas by Brian Ruiz.',
  heroTitle,
})

export default async function Writing() {
  let posts = await getAllPosts()

  return (
    <SimpleLayout
      title={heroTitle}
      intro="Notes on the products I’m building, technology I’m exploring, and the occasional behind-the-scenes look at making things."
    >
      <Suspense fallback={null}>
        <PostsList posts={posts} />
      </Suspense>
    </SimpleLayout>
  )
}
