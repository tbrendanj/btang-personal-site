import { fetchCollectionElementsBySearchValue } from './fetchCollectionElementsBySearchValue';

export async function fetchBlogPostByUrlSlug(searchTerm: string | null = null) {
  try {
    const path = '/blog-posts';
    const searchValues = {
      url_slug: {
        $eqi: searchTerm,
      },
    };
    return fetchCollectionElementsBySearchValue(path, searchValues);
  } catch (e) {
    console.error(e);
  }
}
