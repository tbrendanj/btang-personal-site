import { fetchAPI } from './fetchApi';

/**
 * Common function to fetch collection types that share certain common fields.
 * Said fields are:
 * release_date
 * title
 * main_image
 */
export async function fetchCollection(
  path: string,
  searchTerm: string | null = null,
  fields: Array<string> = []
) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject: { [key: string]: object | Array<string> } = {
      populate: {
        main_image: {
          populate: '*',
        },
      },
    };

    const currentDate = new Date();
    const filters: { [key: string]: object | Array<object> } = {
      release_date: {
        $lte: currentDate.toISOString(),
      },
    };
    if (searchTerm) {
      filters.title = {
        $containsi: searchTerm,
      };
    }
    urlParamsObject.filters = filters;

    if (fields.length > 0) {
      urlParamsObject.fields = fields;
    }

    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (e) {
    console.error(e);
  }
}
