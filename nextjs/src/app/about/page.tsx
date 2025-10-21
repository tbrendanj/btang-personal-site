'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAbout } from '../utils/fetchAbout';
import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiImageUrl } from '../utils/getStrapiImageUrl';
import type { StrapiImage } from '../types/StrapiImage';

export default function AboutPage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<Array<BlocksContent>>([]);
  const [image, setImage] = useState<StrapiImage | null>(null);
  useEffect(() => {
    const fetchAboutPageData = async () => {
      const { data } = await fetchAbout();
      setTitle(data.title);
      setText(data.text);
      setImage(data.image);
    };
    fetchAboutPageData();
  }, []);
  return (
    <>
      <div>{title}</div>
      <div>
        <BlocksRenderer content={text} />
      </div>
      {image && image.url && (
        <Image
          alt={image.alternativeText ?? 'image'}
          width={image.width}
          height={image.height}
          src={`${getStrapiImageUrl(image.url)}`}
        />
      )}
    </>
  );
}
