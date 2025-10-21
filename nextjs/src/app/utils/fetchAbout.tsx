import { fetchAPI } from './fetchApi';

export async function fetchAbout() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = '/about-page';
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      populate: {
        image: {
          populate: '*',
        },
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (e) {
    console.error(e);
  }
}
