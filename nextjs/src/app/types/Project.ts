import { StrapiImage } from './StrapiImage';

export interface Project {
  title: string;
  url_slug: string;
  short_description: string;
  main_image: StrapiImage;
}
