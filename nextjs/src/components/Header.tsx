import React from 'react';

import styles from './Header.module.css';
import NavBar, { NavBarProps } from './NavBar';

export default function Header() {
  /**
   * There's an argument that these are better off set in Strapi and requested,
   * but since this repo is built simply for my personal use and I don't see
   * these items changing often if at all, I've decided that it's better to just
   * hardcode them and not make the extra requests to Strapi for my use case.
   */
  const title = "B. Tang's Internet Corner";
  const navItems: NavBarProps = {
    navItems: [
      {
        href: '/',
        text: 'Home',
      },
      {
        href: '/about',
        text: 'About',
      },
      {
        href: '/projects',
        text: 'Projects',
      },
      {
        href: '/blog',
        text: 'Blog',
      },
      {
        href: '/contact',
        text: 'Contact',
      },
    ],
  };
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <NavBar {...navItems} />
    </div>
  );
}
