import { StrapiImage } from './StrapiImage';
import { StatusValues } from './StatusValues';

export interface Post {
  title: string;
  url_slug: string;
  short_description: string;
  main_image: StrapiImage;
  // just projects
  project_status?: StatusValues;
}
