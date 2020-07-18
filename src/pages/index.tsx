import React from 'react';
import styles from './index.less';
import App from './animate/app';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <App />
    </div>
  );
};
