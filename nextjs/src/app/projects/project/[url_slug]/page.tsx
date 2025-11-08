'use client';
import React, { useEffect, useState, use } from 'react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { StrapiImage } from '@/app/types/StrapiImage';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPage from '@/components/CommonPage';
import { StatusValues } from '@/app/types/StatusValues';
import { useRouter } from 'next/navigation';

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
  const [status, setStatus] = useState<StatusValues | undefined>(undefined);
  const [link, setink] = useState<string>('');
  const { url_slug } = use(params);
  const router = useRouter();
  useEffect(() => {
    const fetchProjectPageData = async (url_slug: string) => {
      const { data } = await fetchProjects({
        url_slug: {
          $eqi: url_slug,
        },
      });
      if (!data.length) {
        router.push('/projects');
        return;
      }
      setTitle(data[0].title);
      setText(data[0].text);
      setMainImage(data[0].main_image);
      setImages(data[0].images);
      setStatus(
        data[0].status === 'active'
          ? StatusValues.active
          : StatusValues.inactive
      );
      setink(data[0].link);
    };
    fetchProjectPageData(url_slug);
  }, [url_slug]);
  return (
    <CommonPage
      title={title}
      text={text}
      mainImage={mainImage}
      images={images}
      status={status}
      link={link}
    />
  );
}
