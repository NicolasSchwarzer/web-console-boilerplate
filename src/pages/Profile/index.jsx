import React, { memo } from 'react';
import styles from './index.scss';

function Profile() {
  return <div className={styles.container}>Profile Page</div>;
}

export default memo(Profile);
