import React from 'react';
import { fetchProjects } from '@/app/utils/fetchProjects';
import CommonPage from '@/components/CommonPage';
import { redirect } from 'next/navigation';

export default async function ProjectPage({
  params,
}: {
  params: {
    url_slug: string;
  };
}) {
  const { url_slug } = await params;
  const { data } = await fetchProjects({
    url_slug: {
      $eqi: url_slug,
    },
  });
  if (!data.length) {
    redirect('/projects');
  }
  return (
    <CommonPage
      title={data[0].title}
      text={data[0].text}
      mainImage={data[0].mainImage}
      images={data[0].images}
      status={data[0].status}
      link={data[0].link}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: {
    url_slug: string;
  };
}) {
  const { url_slug } = await params;
  const { data } = await fetchProjects({
    url_slug: {
      $eqi: url_slug,
    },
  });
  return {
    title: data[0].title,
    description: data[0].short_description,
  };
}
