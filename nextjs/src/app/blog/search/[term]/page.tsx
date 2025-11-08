'use client';
import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { Post } from '@/app/types/Post';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '@/app/utils/fetchBlogPosts';

/**
 * As of now for the project MVP, searches only search by title.
 * Advanced search coming eventually. Maybe.
 */
export default function BlogSearchPage({
  params,
}: {
  params: Promise<{
    term: string;
  }>;
}) {
  const [blogPosts, setBlogPosts] = useState<Array<Post>>([]);
  const { term } = use(params);
  useEffect(() => {
    const fetchBlogData = async () => {
      const { data } = await fetchBlogPosts(
        {
          title: {
            $containsi: term,
          },
        },
        1,
        ['title', 'url_slug', 'short_description']
      );
      setBlogPosts(data);
    };
    fetchBlogData();
  }, [term]);
  return (
    <CommonPostPreviewPage
      title="Blog"
      directory="blog/post"
      posts={blogPosts}
    />
  );
}
