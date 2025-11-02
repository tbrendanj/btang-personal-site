import React from 'react';

import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import { getStrapiImageUrl } from '@/app/utils/getStrapiImageUrl';

import styles from './CommonPage.module.css';
import { StatusValues } from '@/app/types/StatusValues';
import Status from './Status';

export interface CommonPageProps {
  title: string;
  text: BlocksContent;
  mainImage: StrapiImage | null;
  images: Array<StrapiImage | null>;
  status?: StatusValues;
}

export default function CommonPage({
  title,
  text,
  mainImage = null,
  images = [],
  status = undefined,
}: CommonPageProps) {
  return (
    <div className={styles.commonPage}>
      <h2 className={styles.commonPageHeading}>{title}</h2>
      {status && <Status status={status} />}
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
