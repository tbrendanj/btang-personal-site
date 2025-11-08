import { fetchAPI } from './fetchApi';

/**
 * @param path which Strapi endpoint to query
 * @param searchValues Object defining search paramters
 * @param fields Array of fields to query for
 * @returns
 */
export async function fetchCollectionElementsBySearchValue(
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
