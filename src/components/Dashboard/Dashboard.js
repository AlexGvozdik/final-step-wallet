import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../../redux/transactions';
import { getTransactions } from '../../redux/transactions';
import { balance } from '../../redux/balance/balance-selectors';
import minifyString from '../../utils/minifyString';

import styles from './Dashboard.module.css';

export default function Dashboard() {
  const dashboardData = useSelector(getTransactions);
  
  const currentBalance = useSelector(balance)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div className={styles.container}>
      {dashboardData.length > 0 ? (
        <div className={styles.scrollDiv}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHead}>
              <th>Дата</th>
              <th>Тип</th>
              <th>Категория</th>
              <th>Комментарий</th>
              <th>Сумма</th>
              <th>Баланс</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData &&
              dashboardData.map(el => {
                return (
                  <tr
                    key={el.id}
                    className={styles.tableElement}
                    style={{
                      borderLeft:
                        el.type === true
                          ? '5px solid #24cca7'
                          : '5px solid #ff6596',
                    }}
                  >
                    <td data-label="Дата">
                      {el.day < 10 ? `0${el.day}` : el.day}.
                      {el.month < 10 ? `0${el.month}` : el.month}.{el.year}
                    </td>
                    <td data-label="Тип">{el.type === true ? '+' : '-'}</td>
                    <td data-label="Категория">{el.category}</td>
                    <td data-label="Комментарий">{el.comment && minifyString(el.comment, 30)}</td>
                    <td
                      data-label="Сумма"
                      style={{
                        color: el.type === true ? '#24cca7' : '#ff6596',
                        fontWeight: 'bold',
                      }}
                    >
                      {el.sum}
                    </td>
                    <td data-label="Баланс">{el.balance}</td>
                  </tr>
                );
              })}
          </tbody>
          </table>
          </div>
      ) : (
          <h3 className={styles.title}>Привет! Добавь свою первую транзакцию!</h3>
      )}
    </div>
  );
}
