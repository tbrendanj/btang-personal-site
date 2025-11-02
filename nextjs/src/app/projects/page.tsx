'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/fetchProjects';
import CommonPostPreview from '@/components/CommonPostPreview';
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
      {projects.length > 0 &&
        projects.map((project, index) => {
          return (
            <CommonPostPreview
              key={'project_' + index}
              title={project.title}
              urlSlug={project.url_slug}
              shortDescription={project.short_description}
              mainImage={project.main_image}
            />
          );
        })}
    </div>
  );
}
