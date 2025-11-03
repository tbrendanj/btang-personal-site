import React from 'react';

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
  return (
    <div className={styles.commonPostPreviewPage}>
      <h2>{title}</h2>
      <CommonPostPreviewList posts={posts} directory={directory} />
    </div>
  );
}
