import React from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';

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

export async function generateMetadata() {
  return {
    title: 'Projects',
    description: "B. Tang's personal projects",
  };
}
