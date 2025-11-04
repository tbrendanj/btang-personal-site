import { fetchCollectionElementByUrlSlug } from './fetchCollectionElementByUrlSlug';

export async function fetchProjectByUrlSlug(searchTerm: string | null = null) {
  try {
    const path = '/projects';
    return fetchCollectionElementByUrlSlug(path, searchTerm);
  } catch (e) {
    console.error(e);
  }
}
