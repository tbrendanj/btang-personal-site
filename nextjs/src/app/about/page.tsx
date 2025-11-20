import React from 'react';
import { fetchAbout } from '../utils/fetchAbout';
import CommonPage from '@/components/CommonPage';

export default async function AboutPage() {
  const { data } = await fetchAbout();
  console.log(data);
  return (
    <CommonPage
      title={data.title}
      text={data.text}
      mainImage={data.mainImage}
      images={[]}
    />
  );
}

export async function generateMetadata() {
  return {
    title: 'About',
    description: 'About - ' + process.env.siteName,
  };
}
