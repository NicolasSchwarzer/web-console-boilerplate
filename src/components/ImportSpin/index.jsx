/**
 * Spin component for dynamic import.
 */

import React from 'react';
import { Icon } from 'antd';
import styles from './index.scss';

export default function ImportSpin() {
  return (
    <div className={styles.container}>
      <Icon className={styles.spinner} type="loading" />
    </div>
  );
}
