import React, { memo } from 'react';
import styles from './index.scss';

function NotFound() {
  return <div className={styles.container}>Page Not Found</div>;
}

export default memo(NotFound);
