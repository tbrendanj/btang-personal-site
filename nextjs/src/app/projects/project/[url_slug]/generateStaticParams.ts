import { Post } from '@/app/types/Post';
import { fetchProjects } from '@/app/utils/fetchProjects';

export default async function generateStaticParams() {
  const posts = await fetchProjects({}).then((res) => res.json());
  return posts.map((post: Post) => ({ url_slug: post.url_slug }));
}
