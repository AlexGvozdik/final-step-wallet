import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../../redux/currency/currencyOperations';
import currencySelector from '../../redux/currency/currencySelectors';
import Vector from '../../images/vector.svg';
import styles from './CurrencyRatesPanel.module.css';
import Loader from "../Loader";
import { useLocation } from 'react-router';

function CurrencyRatesPanel() {
  const currencyRates = useSelector(currencySelector.currencyRates);
  const currencyRatesLoading = useSelector(currencySelector.currencyRatesLoading);
  const location = useLocation();
  const isDiagram = location.pathname === '/diagram';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies);
  }, [dispatch]);

  const formatRate = rate =>
    rate > 9 ? '' + Number(rate).toFixed(2) : '0' + Number(rate).toFixed(2);

  return (
    <div className={`${styles.currencyRatesPanel} ${isDiagram ? '' : styles.hidden}`}>
      <ul className={styles.currencyRatesHead}>
        <li>Валюта</li>
        <li>Покупка</li>
        <li>Продажа</li>
      </ul>
      <div className={styles.conteinerdata}>
          {currencyRatesLoading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : (
            <ul className={styles.currencyRatesList}>
              {currencyRates.map(({ ccy, buy, sale }) => (
                <li className={styles.currencyRatesListItem} key={ccy}>
                  <p>{ccy}</p>
                  <p>{formatRate(buy)}</p>
                  <p>{formatRate(sale)}</p>
                </li>
              ))}
            </ul>
          )}
          <img src={Vector} alt="vector" className={styles.vector} />
      </div>
    </div>
  );
}

export default CurrencyRatesPanel;
