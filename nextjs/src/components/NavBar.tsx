import React from 'react';

import styles from './NavBar.module.css';
import NavItem, { NavItemProps } from './NavItem';

export interface NavBarProps {
  navItems: Array<NavItemProps>;
}

export default function NavBar({ navItems }: NavBarProps) {
  return (
    <div className={styles.navBar}>
      {navItems.map((navItem, index) => {
        return <NavItem key={'navItem_' + index} {...navItem} />;
      })}
    </div>
  );
}
