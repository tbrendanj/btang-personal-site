'use client';
import React, { useEffect, useState, use } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import { fetchProjectByUrlSlug } from '@/app/utils/fetchProjectByUrlSlug';
import CommonPage from '@/components/CommonPage';

export default function ProjectPage({
  params,
}: {
  params: Promise<{
    url_slug: string;
  }>;
}) {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<BlocksContent>([]);
  const [mainImage, setMainImage] = useState<StrapiImage | null>(null);
  const [images, setImages] = useState<Array<StrapiImage | null>>([]);
  const { url_slug } = use(params);
  useEffect(() => {
    const fetchProjectPageData = async (url_slug: string) => {
      const { data } = await fetchProjectByUrlSlug(url_slug);
      console.log(data);
      setTitle(data[0].title);
      setText(data[0].text);
      setMainImage(data[0].main_image);
      setImages(data[0].images);
    };
    fetchProjectPageData(url_slug);
  }, [url_slug]);
  return (
    <CommonPage
      title={title}
      text={text}
      mainImage={mainImage}
      images={images}
    />
  );
}
