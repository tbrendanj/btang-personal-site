import React from 'react';
import CommonPage from '@/components/CommonPage';
import { redirect } from 'next/navigation';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';

export default async function BlogPostPage({
  params,
}: {
  params: {
    url_slug: string;
  };
}) {
  const { url_slug } = await params;
  const { data } = await fetchBlogPosts({
    url_slug: {
      $eqi: url_slug,
    },
  });
  if (!data.length) {
    redirect('/blog');
  }
  return (
    <CommonPage
      title={data[0].title}
      text={data[0].text}
      mainImage={data[0].mainImage}
      images={data[0].images}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: {
    url_slug: string;
  };
}) {
  const { url_slug } = await params;
  const { data } = await await fetchBlogPosts({
    url_slug: {
      $eqi: url_slug,
    },
  });
  return {
    title: data[0].title,
    description: data[0].short_description,
  };
}
