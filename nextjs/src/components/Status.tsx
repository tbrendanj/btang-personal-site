import React from 'react';

import styles from './Status.module.css';
import { StatusValues } from '@/app/types/StatusValues';

export interface StatusProps {
  status: StatusValues;
}

export default function Status({ status }: StatusProps) {
  return (
    <div
      className={`${styles.status} ${status === StatusValues.active ? styles.active : styles.inactive}`}
    >
      {status}
    </div>
  );
}
