import React from 'react';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';
import { Metadata } from 'next';

export default async function BlogPage() {
  const pageNumber = 1;
  const { data } = await fetchBlogPosts({}, pageNumber, [
    'title',
    'url_slug',
    'short_description',
  ]);
  return (
    <CommonPostPreviewPage
      title="Blog"
      pageNumber={pageNumber}
      directory="blog/post"
      posts={data}
    />
  );
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog - ' + process.env.siteName,
};
