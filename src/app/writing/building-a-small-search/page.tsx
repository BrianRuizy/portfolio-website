import ArticleContent from './content.mdx'
import { post } from './post'
import { PostLayout } from '@/components/PostLayout'
import { createPostMetadata } from '@/lib/posts'

export const metadata = createPostMetadata(post)

export default function BuildingASmallSearch() {
  return (
    <PostLayout post={post}>
      <ArticleContent />
    </PostLayout>
  )
}
