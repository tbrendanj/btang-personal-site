'use client';
import React, { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import styles from './CommonPostPreviewPage.module.css';
import { Post } from '@/app/types/Post';
import CommonPostPreviewList from './CommonPostPreviewList';
import PageNumberNav from './PageNumberNav';

interface CommonPostPreviewPageProps {
  title: string;
  directory: string;
  posts: Array<Post>;
  pageNumber: number;
}

export default function CommonPostPreviewPage({
  title,
  directory,
  posts,
  pageNumber,
}: CommonPostPreviewPageProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const search = () => {
    router.push(
      `/${directory.split('/')[0]}/search/${inputRef.current ? encodeURIComponent(decodeURIComponent(inputRef.current.value)) : ''}`
    );
  };
  return (
    <div className={styles.commonPostPreviewPage}>
      <h2>{title}</h2>
      <div className={styles.commonPostPreviewSearch}>
        <input ref={inputRef} type="text"></input>
        <button onClick={search}>Search</button>
      </div>
      <CommonPostPreviewList posts={posts} directory={directory} />
      <PageNumberNav
        pageNumber={pageNumber}
        pageUrl={`${pathname.replace(/(?<!blog\/search)\/[1234567890]+$/, '/')}`}
        leftEnabled={pageNumber > 1}
        rightEnabled={posts.length > 9}
      />
    </div>
  );
}
