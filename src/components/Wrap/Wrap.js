import React from 'react';
import CurrencyRatesPanel from '../CurrencyRatesPanel';
import Balance from '../Balance';
import Styles from './Wrap.module.css';
import Navigation from '../Navigation';

const Wrap = ({ children }) => {
  return (
    <div className={Styles.wrap}>
      <div className={Styles.border}>
        <Navigation />
        <div className={Styles.containerBalanceCurrencyRatesPanel}>
          <Balance />
          <CurrencyRatesPanel />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Wrap;
