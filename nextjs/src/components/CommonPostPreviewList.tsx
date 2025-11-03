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
  return (
    <div className={styles.commonPostPreviewList}>
      {posts.length &&
        posts.map((post, index) => {
          return (
            <CommonPostPreview
              key={'post_' + index}
              title={post.title}
              urlSlug={`${directory}${post.url_slug}`}
              shortDescription={post.short_description}
              mainImage={post.main_image}
              status={
                'project_status' in post ? post.project_status : undefined
              }
            />
          );
        })}
    </div>
  );
}
