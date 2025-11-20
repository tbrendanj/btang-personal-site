import React from 'react';

import styles from './Header.module.css';
import NavBar, { NavBarProps } from './NavBar';
import HeaderTabs from '@/app/globals/HeaderTabs';
import Link from 'next/link';

export default function Header() {
  /**
   * There's an argument that these are better off set in Strapi and requested,
   * but since this repo is built simply for my personal use and I don't see
   * these items changing often if at all, I've decided that it's better to just
   * hardcode them and not make the extra requests to Strapi for my use case.
   */
  const title = process.env.siteName;
  const navItems: NavBarProps = {
    navItems: HeaderTabs,
  };
  return (
    <div className={styles.header}>
      <Link className={styles.headerTitle} href="/">
        <h1>{title}</h1>
      </Link>
      <NavBar {...navItems} />
    </div>
  );
}
