'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAbout } from '../utils/fetchAbout';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import type { StrapiImage } from '../types/StrapiImage';
import CommonPage from '@/components/CommonPage';

export default function AboutPage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<BlocksContent>([]);
  const [mainImage, setMainImage] = useState<StrapiImage | null>(null);
  useEffect(() => {
    const fetchAboutPageData = async () => {
      const { data } = await fetchAbout();
      setTitle(data.title);
      setText(data.text);
      setMainImage(data.main_image);
    };
    fetchAboutPageData();
  }, []);
  return (
    <CommonPage title={title} text={text} mainImage={mainImage} images={[]} />
  );
}

export async function generateMetadata() {
  return {
    title: 'About',
    description: "About B. Tang's Internet Corner",
  };
}
