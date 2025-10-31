import React from 'react';

import styles from './NavItem.module.css';

export interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <a className={styles.navItemWrapper} href={href}>
      <h3 className={styles.navItem}>{text}</h3>
    </a>
  );
}
