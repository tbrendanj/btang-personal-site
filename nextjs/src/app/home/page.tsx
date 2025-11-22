import React from 'react';
import { fetchHome } from '../utils/fetchHome';

import CommonPage from '@/components/CommonPage';
import { Metadata } from 'next';

export default async function HomePage() {
  const { data } = await fetchHome();
  console.log(data);
  console.log('home log');
  return (
    <CommonPage
      title={data.title}
      text={data.text}
      mainImage={data.main_image}
      images={[]}
    />
  );
}

export const metadata: Metadata = {
  title: process.env.siteName,
  description: 'Home - ' + process.env.siteName,
};
