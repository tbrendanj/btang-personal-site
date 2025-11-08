import { fetchCollection } from './fetchCollection';

export async function fetchBlogPosts(
  searchValues: { [key: string]: object | Array<string> },
  page: number = 1,
  fields: Array<string> = []
) {
  try {
    const path = '/blog-posts';
    return fetchCollection(path, searchValues, page, fields);
  } catch (e) {
    console.error(e);
  }
}
