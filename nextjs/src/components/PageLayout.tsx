'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './PageLayout.module.css';

export interface LayoutChildren {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: LayoutChildren) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
