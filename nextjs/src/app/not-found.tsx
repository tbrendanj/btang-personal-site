import React from 'react';

import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Oops!</h2>
      <p>This page does not seem to exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
