import React from 'react';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';
import { Metadata } from 'next';
import { setUpSearchTermArray } from '@/app/utils/setUpSearchTermArray';

/**
 * As of now for the project MVP, searches only search by title.
 * Advanced search coming eventually. Maybe.
 */
export default async function BlogSearchPage({
  params,
}: {
  params: {
    term: string;
    page_number: number;
  };
}) {
  const { term, page_number } = await params;
  const searchTermsArray = setUpSearchTermArray(term);
  const searchParams = {
    $and: searchTermsArray,
  };
  const { data } = await fetchBlogPosts(searchParams, page_number, [
    'title',
    'url_slug',
    'short_description',
  ]);
  return (
    <CommonPostPreviewPage
      title="Blog"
      pageNumber={page_number}
      directory="blog/post"
      posts={data}
    />
  );
}

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Blog search results - ' + process.env.siteName,
};
