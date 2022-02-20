import transactions from '../transactions.json';
import s from './HomeTabMobile.module.css';

export default function HomeTabMobile() {
  const data = transactions.data;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {data.map(item => {
          const res = item.Expenses ? '-' : '+';

          return (
            <ul
              key={item.id}
              className={
                res === '+'
                  ? `${s.mobileList} ${s.mobileList__plus}`
                  : `${s.mobileList}`
              }
            >
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Date</span>
                <span className={s.mobileList__data}>{item.date}</span>
              </li>
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Type</span>
                <span className={s.mobileList__data}>{res}</span>
              </li>
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Category</span>
                <span className={s.mobileList__data}>{item.category}</span>
              </li>
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Comment</span>
                <span className={s.mobileList__data}>{item.comment}</span>
              </li>
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Sum</span>
                <span
                  className={
                    res === '+'
                      ? `${s.mobileList__data} ${s.mobileList__data_plus}`
                      : `${s.mobileList__data} ${s.mobileList__data_minus}`
                  }
                >
                  {item.sum}
                </span>
              </li>
              <li className={s.mobileList__item}>
                <span className={s.mobileList__category}>Balance</span>
                <span className={s.mobileList__data}>{item.balance}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
