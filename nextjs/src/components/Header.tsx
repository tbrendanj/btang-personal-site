import React from 'react';

import styles from './Header.module.css';
import NavBar, { NavBarProps } from './NavBar';
import HeaderTabs from '@/app/globals/HeaderTabs';
import Link from 'next/link';

export default function Header() {
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
