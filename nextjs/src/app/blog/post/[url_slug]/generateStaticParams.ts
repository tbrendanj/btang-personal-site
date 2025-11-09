import { Post } from '@/app/types/Post';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';

export default async function generateStaticParams() {
  const posts = await fetchBlogPosts({}).then((res) => res.json());
  return posts.map((post: Post) => ({ url_slug: post.url_slug }));
}
