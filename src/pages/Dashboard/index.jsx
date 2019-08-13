import React, { memo } from 'react';
import styles from './index.scss';

function Dashboard() {
  return <div className={styles.container}>Dashboard Page</div>;
}

export default memo(Dashboard);
