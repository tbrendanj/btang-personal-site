// import Navbar from './navbar'
// import Footer from './footer'
import React from 'react';

export interface LayoutChildren {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: LayoutChildren) {
  return (
    <>
      <div>Hello</div>
      <main>{children}</main>
    </>
  );
}
