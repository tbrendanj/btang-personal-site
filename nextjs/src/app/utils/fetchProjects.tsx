import { fetchCollection } from './fetchCollection';

export async function fetchProjects(
  searchValues: { [key: string]: object | Array<string> },
  fields: Array<string> = []
) {
  try {
    const path = '/projects';
    return fetchCollection(path, searchValues, fields);
  } catch (e) {
    console.error(e);
  }
}
