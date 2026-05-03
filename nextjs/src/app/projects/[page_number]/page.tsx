import React from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { Metadata } from 'next';

export default async function ProjectsPaginatedPage({
  params,
}: {
  params: {
    page_number: number;
  };
}) {
  const { page_number } = await params;
  const { data } = await fetchProjects({}, page_number, [
    'title',
    'url_slug',
    'short_description',
    'project_status',
  ]);
  return (
    <CommonPostPreviewPage
      title="Projects"
      directory="projects/project"
      posts={data}
    />
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects - ' + process.env.siteName,
};
