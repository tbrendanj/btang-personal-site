import { fetchCollectionElementByUrlSlug } from './fetchCollectionElementByUrlSlug';

export async function fetchBlogPostByUrlSlug(searchTerm: string | null = null) {
  try {
    const path = '/blog-post';
    return fetchCollectionElementByUrlSlug(path, searchTerm);
  } catch (e) {
    console.error(e);
  }
}
