import React from 'react';

import styles from './Footer.module.css';
import HeaderTabs from '@/app/globals/HeaderTabs';

export default function Footer() {
  const footerItems = HeaderTabs;
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
