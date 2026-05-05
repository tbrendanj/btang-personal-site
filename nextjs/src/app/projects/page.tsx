import React from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { Metadata } from 'next';

export default async function ProjectsPage() {
  const pageNumber = 1;
  const { data } = await fetchProjects({}, pageNumber, [
    'title',
    'url_slug',
    'short_description',
    'project_status',
  ]);
  return (
    <CommonPostPreviewPage
      title="Projects"
      pageNumber={pageNumber}
      directory="projects/project"
      posts={data}
    />
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects - ' + process.env.siteName,
};
