'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import CommonPostPreviewList from '@/components/CommonPostPreviewList';
import { Project } from '../types/Project';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const { data } = await fetchProjects(null, [
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
    <div>
      <h3>Projects</h3>
      <CommonPostPreviewList posts={projects} directory="projects/project/" />
    </div>
  );
}
