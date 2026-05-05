import React from 'react';

import styles from './PageNumberNav.module.css';

export interface PageNumberNavProps {
  pageNumber: number;
  pageUrl: string;
  leftEnabled: boolean;
  rightEnabled: boolean;
}

export default function Status({
  pageNumber,
  pageUrl,
  leftEnabled,
  rightEnabled,
}: PageNumberNavProps) {
  return (
    <div className={`${styles.pageNumberNav}`}>
      <div
        className={`${styles.pageNumberNavSubDiv} ${styles.pageNumberNavSubDivLeft} ${leftEnabled && pageNumber > 1 ? styles.buttonEnabled : ''}`}
      >
        {leftEnabled && pageNumber > 1 && (
          <a href={`${pageUrl}/${pageNumber - 1}`}>&lt;</a>
        )}
      </div>
      <div className={`${styles.pageNumberNavSubDiv}`}>
        <div>{pageNumber}</div>
      </div>
      <div
        className={`${styles.pageNumberNavSubDiv} ${styles.pageNumberNavSubDivRight} ${rightEnabled ? styles.buttonEnabled : ''}`}
      >
        {rightEnabled && <a href={`${pageUrl}/${pageNumber + 1}`}>&gt;</a>}
      </div>
    </div>
  );
}
