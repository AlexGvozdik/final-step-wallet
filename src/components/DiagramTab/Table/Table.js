import React from 'react';
import styles from './Table.module.css';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categories';

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

export default function Table() {
  const categories = useSelector(getCategories);

  const totalFields = {};
  for (const item of categories) {
    if (item.name === 'income' || item.name === 'spending') {
      totalFields[item.name] = item.summ;
    }
    continue;
  }

  const groupFields = [];
  for (const item of categories) {
    if (item.name === 'income' || item.name === 'spending') {
      continue;
    }
    groupFields.push(item);
  }

  return (
    <div className={styles.container}>
      <p className={styles.head}>
        <b>Категория</b>
        <b>Сумма</b>
      </p>
      <ul>
        {groupFields && groupFields.map((item, idx) => {
          return (
            <li className={styles.listItem} key={idx + 1}>
              <span
                style={{ backgroundColor: colors[idx] }}
                className={styles.marker}
              ></span>
              <div className={styles.itemContainer}>
                <span className={styles}>{item.name}</span>
                <span className={styles}>{item.summ}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <p className={styles.total}>
        <b className={styles.totalItem}>
          <span>Расходы</span>
          <span style={{ color: '#FF6596' }}>{totalFields.spending}</span>
        </b>
        <b className={styles.totalItem}>
          <span>Доходы</span>
          <span style={{ color: '#24CCA7' }}>{totalFields.income}</span>
        </b>
      </p>
    </div>
  );
}
