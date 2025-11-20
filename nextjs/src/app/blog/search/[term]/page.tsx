import React from 'react';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';
import { Metadata } from 'next';

/**
 * As of now for the project MVP, searches only search by title.
 * Advanced search coming eventually. Maybe.
 */
export default async function BlogSearchPage({
  params,
}: {
  params: {
    term: string;
  };
}) {
  const { term } = await params;
  const { data } = await fetchBlogPosts(
    {
      title: {
        $containsi: term,
      },
    },
    1,
    ['title', 'url_slug', 'short_description']
  );
  return (
    <CommonPostPreviewPage title="Blog" directory="blog/post" posts={data} />
  );
}

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Blog search results - ' + process.env.siteName,
};
