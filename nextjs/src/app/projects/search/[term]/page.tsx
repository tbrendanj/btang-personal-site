'use client';
import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import { Post } from '@/app/types/Post';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';

/**
 * As of now for the project MVP, searches only search by title.
 * Advanced search coming eventually. Maybe.
 */
export default function ProjectSearchPage({
  params,
}: {
  params: Promise<{
    term: string;
  }>;
}) {
  const [projects, setProjects] = useState<Array<Post>>([]);
  const { term } = use(params);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const { data } = await fetchProjects(
        {
          title: {
            $containsi: term,
          },
        },
        ['title', 'url_slug', 'short_description', 'project_status']
      );
      setProjects(data);
    };
    fetchProjectsData();
  }, [term]);
  return (
    <CommonPostPreviewPage
      title="Projects"
      directory="projects/project"
      posts={projects}
    />
  );
}
