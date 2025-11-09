import { StrapiImage } from './StrapiImage';
import { StatusValues } from './StatusValues';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface PostPreview {
  title: string;
  url_slug: string;
  short_description: string;
  main_image: StrapiImage | null;
  // just projects
  project_status?: StatusValues;
}

export interface Post {
  title: string;
  url_slug: string;
  text: BlocksContent;
  short_description: string;
  main_image: StrapiImage | null;
  images: Array<StrapiImage>;
  // just projects
  project_status?: StatusValues;
}
