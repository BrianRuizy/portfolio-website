import { generateOgImage } from '@/lib/og'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Your Name'

  return generateOgImage({ title })
}
