export function getStrapiImageUrl(url: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:1337';
  return baseUrl + url;
}
