import React from 'react';

import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import { getStrapiImageUrl } from '@/app/utils/getStrapiImageUrl';

import styles from './CommonPage.module.css';

export interface CommonPageProps {
  title: string;
  text: BlocksContent;
  mainImage: StrapiImage | null;
  images: Array<StrapiImage | null>;
}

export default function CommonPage({
  title,
  text,
  mainImage,
  images,
}: CommonPageProps) {
  return (
    <div className={styles.commonPage}>
      <h2 className={styles.commonPageHeading}>{title}</h2>
      {mainImage && mainImage.url && (
        <Image
          className={styles.commonPageImage}
          alt={mainImage.alternativeText ?? 'image'}
          width={mainImage.width}
          height={mainImage.height}
          src={`${getStrapiImageUrl(mainImage.url)}`}
        />
      )}
      <div>
        <BlocksRenderer content={text} />
      </div>
      {images.length > 0 &&
        images.map((image, index) => {
          if (!(image && image.url)) {
            return '';
          }
          return (
            <Image
              key={'images_' + index}
              className={styles.commonPageImage}
              alt={image.alternativeText ?? 'image'}
              width={image.width}
              height={image.height}
              src={`${getStrapiImageUrl(image.url)}`}
            />
          );
        })}
    </div>
  );
}
