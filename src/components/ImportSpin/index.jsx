/**
 * Spin component for dynamic import.
 */

import React, { memo } from 'react';
import { Icon } from 'antd';
import styles from './index.scss';

function ImportSpin() {
  return (
    <div className={styles.container}>
      <Icon className={styles.spinner} type="loading" />
    </div>
  );
}

export default memo(ImportSpin);
