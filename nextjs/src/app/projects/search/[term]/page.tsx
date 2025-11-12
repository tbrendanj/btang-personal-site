import React from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { Metadata } from 'next';

/**
 * As of now for the project MVP, searches only search by title.
 * Advanced search coming eventually. Maybe.
 */
export default async function ProjectSearchPage({
  params,
}: {
  params: {
    term: string;
  };
}) {
  const { term } = await params;
  const { data } = await fetchProjects(
    {
      title: {
        $containsi: term,
      },
    },
    1,
    ['title', 'url_slug', 'short_description', 'project_status']
  );
  return (
    <CommonPostPreviewPage
      title="Projects"
      directory="projects/project"
      posts={data}
    />
  );
}
export const metadata: Metadata = {
  title: 'Search Results',
  description: "Search results in B. Tang's personal projects",
};
