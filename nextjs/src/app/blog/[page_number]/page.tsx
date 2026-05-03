import React from 'react';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';
import { Metadata } from 'next';

export default async function BlogPaginatedPage({
  params,
}: {
  params: {
    page_number: number;
  };
}) {
  const { page_number } = await params;
  const { data } = await fetchBlogPosts({}, page_number, [
    'title',
    'url_slug',
    'short_description',
  ]);
  return (
    <CommonPostPreviewPage title="Blog" directory="blog/post" posts={data} />
  );
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog - ' + process.env.siteName,
};
