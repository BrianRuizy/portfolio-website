import { PostLayout } from '@/components/PostLayout'
import { createPostMetadata } from '@/lib/posts'
import Content from './content.mdx'
import { post } from './post'

export const metadata = createPostMetadata(post)

export default function Page() {
  return (
    <PostLayout post={post}>
      <Content />
    </PostLayout>
  )
}
