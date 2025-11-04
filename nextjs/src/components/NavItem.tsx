import React from 'react';

import styles from './NavItem.module.css';
import Link from 'next/link';

export interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <Link className={styles.navItemWrapper} href={href}>
      <h3 className={styles.navItem}>{text}</h3>
    </Link>
  );
}
