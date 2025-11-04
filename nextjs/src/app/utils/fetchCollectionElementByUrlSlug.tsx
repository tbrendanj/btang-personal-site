import { fetchAPI } from './fetchApi';

export async function fetchCollectionElementByUrlSlug(
  path: string,
  searchTerm: string | null = null
) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      populate: {
        main_image: {
          populate: '*',
        },
        images: {
          populate: '*',
        },
      },
      filters: {},
    };
    if (searchTerm) {
      urlParamsObject.filters = {
        url_slug: {
          $eqi: searchTerm,
        },
        release_date: {
          $lte: new Date().toISOString(),
        },
      };
    }
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (e) {
    console.error(e);
  }
}
