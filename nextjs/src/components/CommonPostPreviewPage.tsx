import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

import styles from './CommonPostPreviewPage.module.css';
import { Post } from '@/app/types/Post';
import CommonPostPreviewList from './CommonPostPreviewList';

interface CommonPostPreviewPageProps {
  title: string;
  directory: string;
  posts: Array<Post>;
}

export default function CommonPostPreviewPage({
  title,
  directory,
  posts,
}: CommonPostPreviewPageProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const search = () => {
    router.push(
      `${directory.split('/')[0]}/search/${inputRef.current ? inputRef.current.value : ''}`
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
    </div>
  );
}
