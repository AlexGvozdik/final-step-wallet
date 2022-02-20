import React from 'react';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../../redux/auth/auth-selectors';
import transactions from '../transactions.json';
import s from './HomeTabDesktop.module.css';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
    // const arr = useSelector(authSelectors.getIsFetchingCurrent);
  const data = transactions.data;

  return (
    <>
      <table className={s.homeTab}>
        <thead className={s.head}>
          <tr className={s.head__row}>
            {tableHeadData.map(head => (
              <th className={s.head__data} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={s.body}>
          {data?.map(
            ({ id, Expenses, type, date, sum, category, comment, balance }) => (
              <tr key={id} className={s.body__row}>
                <td className={s.body__data}>{date}</td>
                <td className={s.body__data}>
                  {Expenses ? (type = '-') : (type = '+')}
                </td>
                <td className={s.body__data}>{category}</td>
                <td className={s.body__data}>{comment}</td>
                <td
                  className={
                    type === '+'
                      ? `${s.body__data} ${s.body__data_plus}`
                      : `${s.body__data} ${s.body__data_minus}`
                  }
                >
                  {sum}
                </td>
                <td className={s.body__data}>{balance}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
