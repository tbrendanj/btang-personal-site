import { fetchCollection } from './fetchCollection';

export async function fetchBlogPosts(
  searchTerm: string | null = null,
  fields: Array<string> = []
) {
  try {
    const path = '/blog-posts';
    return fetchCollection(path, searchTerm, fields);
  } catch (e) {
    console.error(e);
  }
}
