export function getStrapiImageUrl(url: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL ?? 'http://localhost:1337';
  return url.includes(baseUrl) ? url : baseUrl + url;
}
