import { fetchCollectionElementByUrlSlug } from './fetchCollectionElementByUrlSlug';

export async function fetchBlogPostByUrlSlug(searchTerm: string | null = null) {
  try {
    const path = '/blog-posts';
    return fetchCollectionElementByUrlSlug(path, searchTerm);
  } catch (e) {
    console.error(e);
  }
}
