import React from 'react';

import styles from './CommonPostPreviewList.module.css';
import CommonPostPreview from './CommonPostPreview';
import { Post } from '@/app/types/Post';

interface CommonPostPreviewListProps {
  posts: Array<Post>;
  directory: string;
}

export default function CommonPostPreviewList({
  posts,
  directory,
}: CommonPostPreviewListProps) {
  if (posts === null) {
    return (
      <div className={styles.commonPostPreviewList}>
        <div>No posts found.</div>
      </div>
    );
  }
  return (
    <div className={styles.commonPostPreviewList}>
      {posts.length > 0 &&
        posts.map((post, index) => {
          return (
            <CommonPostPreview
              key={'post_' + index}
              title={post.title}
              urlSlug={`${directory}/${post.url_slug}`}
              shortDescription={post.short_description}
              mainImage={post.main_image}
              status={
                'project_status' in post ? post.project_status : undefined
              }
            />
          );
        })}
      {posts.length === 0 && <div>No posts found.</div>}
    </div>
  );
}
