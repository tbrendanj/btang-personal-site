'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import { Post } from '../types/Post';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Array<Post>>([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const { data } = await fetchProjects({}, [
        'title',
        'url_slug',
        'short_description',
        'project_status',
      ]);
      setProjects(data);
    };
    fetchProjectsData();
  }, []);
  return (
    <CommonPostPreviewPage
      title="Projects"
      directory="projects/project"
      posts={projects}
    />
  );
}
