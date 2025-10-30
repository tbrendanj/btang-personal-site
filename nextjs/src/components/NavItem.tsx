import React from 'react';

import styles from './NavItem.module.css';

export interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <a className={styles.navItemWrapper} href={href}>
      <div className={styles.navItem}>{text}</div>
    </a>
  );
}
