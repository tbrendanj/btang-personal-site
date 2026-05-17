export function getStrapiImageUrl(url: string) {
  const baseUrl = process.env.STRAPI_URL ?? 'http://localhost:1337';
  return baseUrl + url;
}
