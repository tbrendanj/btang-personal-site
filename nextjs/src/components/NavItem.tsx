import React from 'react';

import styles from './NavItem.module.css';
import { usePathname } from 'next/navigation';

export interface NavItemProps {
  href: string;
  text: string;
  forceCurrentPath?: boolean;
}

export default function NavItem({
  href,
  text,
  forceCurrentPath = false,
}: NavItemProps) {
  const currentPath = usePathname();
  const isCurrentPath = forceCurrentPath
    ? true
    : currentPath
      ? currentPath.includes(href)
      : false;
  return (
    <a className={styles.navItemWrapper} href={href}>
      <h3
        className={`${styles.navItem} ${isCurrentPath ? styles.current : ''}`}
      >
        {text}
      </h3>
    </a>
  );
}
