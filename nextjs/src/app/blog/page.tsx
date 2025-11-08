'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Post } from '../types/Post';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { fetchBlogPosts } from '../utils/fetchBlogPosts';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<Array<Post>>([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const { data } = await fetchBlogPosts({}, 1, [
        'title',
        'url_slug',
        'short_description',
      ]);
      setBlogPosts(data);
    };
    fetchProjectsData();
  }, []);
  return (
    <CommonPostPreviewPage
      title="Blog"
      directory="blog/post"
      posts={blogPosts}
    />
  );
}
