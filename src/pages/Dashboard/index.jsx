import React, { memo } from 'react';
import styles from './index.scss';
import logo from '@/assets/react.svg';

function Dashboard() {
  return (
    <>
      <img className={styles.logo} src={logo} />
      <div className={styles.container}>
        <a
          className={styles.icon}
          href="https://github.com/NicolasSchwarzer/web-console-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        />
        <span className={styles.title}>Dashboard Page</span>
      </div>
    </>
  );
}

export default memo(Dashboard);
