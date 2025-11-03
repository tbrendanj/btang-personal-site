import React from 'react';

import styles from './CommonPostPreview.module.css';
import { StatusValues } from '@/app/types/StatusValues';
import Status from './Status';
import { StrapiImage } from '@/app/types/StrapiImage';
import Image from 'next/image';
import { getStrapiImageUrl } from '@/app/utils/getStrapiImageUrl';

export interface CommonPostPreviewProps {
  title: string;
  urlSlug: string;
  shortDescription: string;
  mainImage: StrapiImage | null;
  status?: StatusValues;
}

export default function CommonPostPreview({
  title,
  urlSlug,
  shortDescription,
  mainImage,
  status = undefined,
}: CommonPostPreviewProps) {
  return (
    <a href={'/' + urlSlug}>
      <div className={styles.commonPostPreview}>
        <div className={styles.commonPostPreviewHeading}>
          <h3>{title}</h3>
          {status && <Status status={status} />}
        </div>
        <div className={styles.commonPostPreviewBody}>{shortDescription}</div>
        {mainImage && (
          <Image
            className={styles.commonPostPreviewImage}
            alt={mainImage.alternativeText ?? 'image'}
            width={mainImage.width}
            height={mainImage.height}
            src={`${getStrapiImageUrl(mainImage.url)}`}
          />
        )}
      </div>
    </a>
  );
}
