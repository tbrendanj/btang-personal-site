import { fetchCollectionElementsBySearchValue } from './fetchCollectionElementsBySearchValue';

export async function fetchProjectByUrlSlug(searchTerm: string | null = null) {
  try {
    const path = '/projects';
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
