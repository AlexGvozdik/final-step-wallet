import React, { useState, useEffect } from "react";
import s from "./CurrencyRatesPanel.module.css";
import getCurrencyRate from "../../api/currencyApi";

function CurrencyRatesPanel() {
  const [currency, setCurrency] = useState([]);

  // useEffect(() => {
  //   getCurrencyRate().then((res) => setCurrency(res));
  // });

  useEffect(() => {
    getCurrencyRate().then((res) => {
      setCurrency(res.filter((n) => n.ccy !== "BTC"));
    });
  });

  return (
    <>
      <div className={s.currencyConteiner}>
        <div className={s.currencyName}>
          <p>Валюта</p>
          <p>Покупка</p>
          <p>Продажа</p>
        </div>
        <ul className={s.currencyList}>
          {currency.map((currency) => (
            <li className={s.currencyItem}>
              <p>{currency.ccy}</p>
              <p>{Number(currency.buy).toFixed(2)}</p>
              <p>{Number(currency.sale).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CurrencyRatesPanel;
