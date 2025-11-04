import React from 'react';

import styles from './Footer.module.css';
import HeaderTabs from '@/app/globals/HeaderTabs';
import Link from 'next/link';

export default function Footer() {
  const footerItems = HeaderTabs;
  return (
    <div className={styles.footer}>
      {footerItems.map((footerItem, index) => {
        return (
          <Link key={'footerItem_' + index} href={footerItem.href}>
            {footerItem.text}
          </Link>
        );
      })}
    </div>
  );
}
