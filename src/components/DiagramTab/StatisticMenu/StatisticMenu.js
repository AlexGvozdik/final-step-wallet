import * as React from 'react';

import DropDownJSX from '../utils/DropDownJSX';
import styles from './StatisticMenu.module.css';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const years = [
  new Date().getFullYear().toString(),
  (new Date().getFullYear() - 1).toString(),
  (new Date().getFullYear() - 2).toString()
]

export default function StatisticMenu({monthClicker, yearClicker}) {

  return (
    <div className={styles.container}>
      <DropDownJSX dateClicker={monthClicker} categoryName={'Месяц'} categoryArray={months} />
      <DropDownJSX dateClicker={yearClicker} categoryName={'Год'} categoryArray={years} />
    </div>
  );
}
