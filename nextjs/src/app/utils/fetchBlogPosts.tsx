import { fetchCollection } from './fetchCollection';

export async function fetchBlogPosts(
  searchTitle: string | null = null,
  searchUrl: string | null = null,
  fields: Array<string> = []
) {
  try {
    const path = '/blog-posts';
    const searchValues: { [key: string]: object | Array<string> } = {};
    if (searchTitle) {
      searchValues.title = {
        $eqi: searchTitle,
      };
    }
    if (searchUrl) {
      searchValues.url_slug = {
        $eqi: searchUrl,
      };
    }
    return fetchCollection(path, searchValues, fields);
  } catch (e) {
    console.error(e);
  }
}
