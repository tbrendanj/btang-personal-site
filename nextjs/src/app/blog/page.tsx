import React from 'react';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '../utils/fetchBlogPosts';

export default async function BlogPage() {
  const { data } = await fetchBlogPosts({}, 1, [
    'title',
    'url_slug',
    'short_description',
  ]);
  return (
    <CommonPostPreviewPage title="Blog" directory="blog/post" posts={data} />
  );
}

export async function generateMetadata() {
  return {
    title: 'Blog',
    description: "B. Tang's personal blog",
  };
}
