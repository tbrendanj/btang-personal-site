import React from 'react';

import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import { getStrapiImageUrl } from '@/app/utils/getStrapiImageUrl';

import styles from './CommonPage.module.css';

export interface CommonPageProps {
  title: string;
  text: BlocksContent;
  image: StrapiImage | null;
}

export default function CommonPage({ title, text, image }: CommonPageProps) {
  return (
    <div className={styles.commonPage}>
      <h2 className={styles.commonPageHeading}>{title}</h2>
      <div>
        <BlocksRenderer content={text} />
      </div>
      {image && image.url && (
        <Image
          className={styles.commonPageImage}
          alt={image.alternativeText ?? 'image'}
          width={image.width}
          height={image.height}
          src={`${getStrapiImageUrl(image.url)}`}
        />
      )}
    </div>
  );
}
