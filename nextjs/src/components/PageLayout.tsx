'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutChildren {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: LayoutChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
