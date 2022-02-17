import React from 'react';
import { useSelector } from 'react-redux';
import balanceSelectors from '../../redux/balance/balance-selectors';
import styles from "./Balance.module.css";

const Balance = () => {
  // const userBalance = useSelector(balanceSelectors.getBalance);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ваш Баланс</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {/* {userBalance} */ 255555}
      </p>
    </div>
  );
};

export default Balance;
