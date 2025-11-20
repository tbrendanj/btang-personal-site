import React from 'react';
import { fetchHome } from '../utils/fetchHome';

import CommonPage from '@/components/CommonPage';
import { Metadata } from 'next';

export default async function HomePage() {
  const { data } = await fetchHome();
  return (
    <CommonPage
      title={data.title}
      text={data.text}
      mainImage={data.mainImage}
      images={[]}
    />
  );
}

export const metadata: Metadata = {
  title: "B. Tang's Internet Corner",
  description: "B. Tang's blog and personal projects",
};
