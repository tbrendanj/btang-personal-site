import { fetchCollection } from './fetchCollection';

export async function fetchProjects(
  searchTerm: string | null = null,
  fields: Array<string> = []
) {
  try {
    const path = '/projects';
    return fetchCollection(path, searchTerm, fields);
  } catch (e) {
    console.error(e);
  }
}
