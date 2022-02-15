import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import styles from './Balance.module.scss';

const Balance = () => {
  // const userBalance = useSelector(authSelectors.getBalance);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {5400000}
      </p>
    </div>
  );
};

export default Balance;
