import React from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPostPreviewPage from '@/components/CommonPostPreviewPage';
import { Metadata } from 'next';
import { setUpSearchTermArray } from '@/app/utils/setUpSearchTermArray';

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
  const searchTermsArray = setUpSearchTermArray(term);
  const searchParams = {
    $and: searchTermsArray,
  };
  const { data } = await fetchProjects(searchParams, 1, [
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
  title: 'Search Results',
  description: 'Project search results - ' + process.env.siteName,
};
