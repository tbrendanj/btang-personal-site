'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchHome } from '../utils/fetchHome';
import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiImageUrl } from '../utils/getStrapiImageUrl';
import type { StrapiImage } from '../types/StrapiImage';

import styles from './home.module.css';

export default function HomePage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<Array<BlocksContent>>([]);
  const [image, setImage] = useState<StrapiImage | null>(null);
  useEffect(() => {
    const fetchHomePageData = async () => {
      const { data } = await fetchHome();
      console.log(data);
      setTitle(data.title);
      setText(data.text);
      setImage(data.image);
    };
    fetchHomePageData();
  }, []);
  return (
    <>
      <div>{title}</div>
      <div>
        <BlocksRenderer content={text} />
      </div>
      {image && image.url && (
        <Image
          className={styles.homeImage}
          alt={image.alternativeText ?? 'image'}
          width={image.width}
          height={image.height}
          src={`${getStrapiImageUrl(image.url)}`}
        />
      )}
    </>
  );
}
