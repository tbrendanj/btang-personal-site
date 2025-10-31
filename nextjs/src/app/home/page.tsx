'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchHome } from '../utils/fetchHome';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import type { StrapiImage } from '../types/StrapiImage';

import CommonPage from '@/components/CommonPage';

export default function HomePage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<BlocksContent>([]);
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
  return <CommonPage title={title} text={text} image={image} />;
}
