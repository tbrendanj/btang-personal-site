import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  const footerItems = [
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
  ];
  return (
    <div className={styles.footer}>
      {footerItems.map((footerItem, index) => {
        return (
          <a key={'footerItem_' + index} href={footerItem.href}>
            {footerItem.text}
          </a>
        );
      })}
    </div>
  );
}
