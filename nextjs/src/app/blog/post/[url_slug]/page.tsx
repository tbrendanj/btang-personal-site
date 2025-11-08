'use client';
import React, { useEffect, useState, use } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import CommonPage from '@/components/CommonPage';
import { useRouter } from 'next/navigation';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';

export default function BlogPostPage({
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
  const router = useRouter();
  useEffect(() => {
    const fetchProjectPageData = async (url_slug: string) => {
      const { data } = await fetchBlogPosts({
        url_slug: {
          $eqi: url_slug,
        },
      });
      if (!data.length) {
        router.push('/blog');
        return;
      }
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
