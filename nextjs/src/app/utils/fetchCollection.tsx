import { fetchAPI } from './fetchApi';

/**
 * Common function to fetch collection types that share certain common fields.
 * Said fields are:
 * release_date
 * title
 * main_image
 * images
 */
export async function fetchCollection(
  path: string,
  searchValues: { [key: string]: object | Array<string> },
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
        images: {
          populate: '*',
        },
      },
      filters: {
        ...searchValues,
        release_date: {
          $lte: new Date().toISOString(),
        },
      },
    };

    if (fields.length > 0) {
      urlParamsObject.fields = fields;
    }

    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (e) {
    console.error(e);
  }
}
