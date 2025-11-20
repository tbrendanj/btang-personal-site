import React from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { Metadata } from 'next';

export default async function ProjectsPage() {
  const { data } = await fetchProjects({}, 1, [
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
