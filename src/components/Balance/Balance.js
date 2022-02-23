import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Balance.module.css';
import { fetchBalance } from '../../redux/balance/balance-operations';
import { balance as balanceSelector } from '../../redux/balance/balance-selectors';
import { getTransactions } from "../../redux/transactions";
import { useLocation } from "react-router";

function Balance() {
    const balance = useSelector(balanceSelector);
    const dispatch = useDispatch();
    const location = useLocation();

    const isHome = location.pathname === '/home';

    // Добавил переменную которая вытягивает значение поля Transactions из редакса, для того чтобы баланс обновлялся каждый раз, как только добавится новая транзакция.
    // записал эту переменную в зависимости useEffect.
    // теперь баланс обновляется после каждой транзакции
    const ReduxTransations = useSelector(getTransactions)
    // 

    useEffect(() => {
        dispatch(fetchBalance)
    }, [dispatch, ReduxTransations]);

    const formatBalance = balance => balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 }).replace(',', '.');

    return (
        <div className={`${styles.balance} ${isHome ? '' : styles.hidden}`}>
            <h2 className={styles.balanceTitle}>Ваш баланс</h2>
            <h2 className={styles.balanceValue}> <span className={styles.currencySymbol}>&#8372;</span> {balance ? formatBalance(balance) : formatBalance(0)}</h2>
        </div>
    );
}

export default Balance;