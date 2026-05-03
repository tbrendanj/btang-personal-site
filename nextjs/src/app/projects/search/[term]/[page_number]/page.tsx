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
    page_number: number;
  };
}) {
  const { term, page_number } = await params;
  const { data } = await fetchProjects(
    {
      title: {
        $containsi: term,
      },
    },
    page_number,
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
  description: 'Project search results - ' + process.env.siteName,
};
