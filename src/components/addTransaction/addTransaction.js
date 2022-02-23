import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'moment/locale/ru';
import { addTransaction } from '../../redux/transactions';
import { balance } from '../../redux/balance/balance-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'indicative/validator';

import { ReactSVG } from 'react-svg';
import svgPlus from '../../images/plus-icon.svg';
import svgMinus from '../../images/minus-icon.svg';
import svgCalendar from '../../images/calendar-icon.svg';
import svgListIcon from '../../images/categories-list-icon.svg';
import svgClose from '../../images/modal-close-icon.svg';
import minifyString from '../../utils/minifyString'

import styles from './styles.module.css';

import { alert, defaults } from '@pnotify/core';
defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;

function AddTransaction({ toggleModal, toggleAddTransaction }) {
  const [transactionType, setTransactionType] = useState('spending');
  const [category, setCategory] = useState('Выберите категорию');
  const [listActive, setListActive] = useState(false);
  const [summ, setSumm] = useState('');
  const [date, setDate] = useState(new Date());
  const [displayedComment, setDisplayedComment] = useState("");
  const [fullComment, setFullComment] = useState("");

  const currentBalance = useSelector(balance);
  const dispatch = useDispatch();

  useEffect(() => {
    const backdrop = document.querySelector('#backdrop');

    function clickListener(e) {
      if (e.target === backdrop) {
        toggleAddTransaction();
        toggleModal();
      }

      if (e.target !== backdrop && listActive) {
        setListActive(!listActive);
      }
    }

    function keyListener(e) {
      if (e.code === 'Escape') {
        toggleAddTransaction();
        toggleModal();
      }
    }

    document.addEventListener('click', clickListener);
    document.addEventListener('keydown', keyListener);

    return function cleanup() {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keydown', keyListener);
    };
  }, [toggleAddTransaction, toggleModal, listActive]);

  useEffect(() => {
    const dropDownList = document.querySelector('.' + styles.dropDownList);
    if (dropDownList) {
      dropDownList.style.cssText = 'height:' + dropDownList.scrollHeight + 'px';
    }
  }, [listActive]);
  //
  const SCHEMA = {
    type: 'required|boolean',
    category: 'required|string',
    sum: 'required|number',
    comment: 'string',
    day: 'required|number',
    month: 'required|number',
    year: 'required|number',
  };

  async function submitHandler(e) {
    e.preventDefault();
      const nextBalance = currentBalance - summ

    if (nextBalance <= 0 && transactionType === 'spending' && category !== 'Выберите категорию') {
      alert({
        text: 'Недостаточно средств',
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: 'down',
      });;
      return;
    }
    if (category === 'Выберите категорию') {
      alert({
        text: 'Пожалуйста выберите категорию',
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: 'down',
      });;
      return;
    }
    const userBalance = currentBalance.toString();
    // нормализация данных для бэка
    const transaction = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: transactionType === 'income' ? true : false,
      category: category,
      sum: parseFloat(summ),
      comment: fullComment,
      balance:
        transactionType === 'income'
          ? userBalance + parseFloat(summ)
          : userBalance - parseFloat(summ),
      // balance: currentBalance.toString()
    };

    const transactionNoComment = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: transactionType === 'income' ? true : false,
      category: category,
      sum: parseFloat(summ),
      balance:
        transactionType === 'income'
          ? userBalance + parseFloat(summ)
          : userBalance - parseFloat(summ),
      // balance: currentBalance.toString()
    };
    // нормализация данных бэк

    try {
      await validate(transaction, SCHEMA);
      dispatch(addTransaction(fullComment ? transaction : transactionNoComment));
      closeComponent();
    } catch (error) {
      console.log(error[0].message);
    }
  }

  function switchClickHandler(e) {
    if (e.target.checked) {
      setTransactionType('spending');
      setCategory('Выберите категорию');
      return;
    }
    setTransactionType('income');
    setCategory('Регулярный доход');
  }

  function categoryClickHandler(e) {
    setCategory(e.target.textContent);
    setListActive(!listActive);
  }

  function dateChange(e) {
    setDate(e._d);
  }

  function listOpen() {
    setListActive(!listActive);
  }

  function summChange(e) {
    const number = Number(e.target.value);
    const integer = Number.isInteger(number);

    if (!integer) {
      const [int, float] = String(number).split('.');
      setSumm(`${int}.${float.slice(0, 2)}`);
      return;
    }

    setSumm(e.target.value);
  }


  function handleMinifyingComment() {
    setFullComment(displayedComment);
    const minifiedComment = minifyString(displayedComment, 42);
    setDisplayedComment(minifiedComment);
  }

  function closeComponent() {
    toggleAddTransaction();
    toggleModal();
  }

  // задача данных функций, повесить дополнительный класс по условию.
  function DropMenuActiveTrigger() {
    if (category !== 'Выберите категорию') {
      const basic = styles.dropDownField;
      const active = styles.dropDownFieldActive;

      return `${basic} ${active}`;
    }

    return styles.dropDownField;
  }

  function incomeActiveTrigger() {
    if (transactionType === 'income') {
      const basic = styles.transTypeText;
      const active = styles.transTypeTextActive;
      return `${basic} ${active}`;
    }

    return styles.transTypeText;
  }

  function spendingActiveTrigger() {
    if (transactionType === 'spending') {
      const basic = styles.transTypeText;
      const active = styles.transTypeTextActive;
      const expense = styles.expense
      return `${basic} ${active} ${expense}`;
    }

    return styles.transTypeText;
  }

  function switchToggle() {
    if (transactionType === 'income') {
      return styles.switchToggleIncome;
    }

    return styles.switchToggleSpending;
  }
  // задача данных функции, повесить дополнительный класс по условию.

  // разметка для выпадающего списка
  const dropDownJSX = (
    <div className={styles.dropDownContainer}>
      <div className={DropMenuActiveTrigger()} onClick={listOpen}>
        <span className={styles.selectedCategory}>{category}</span>
      </div>

      {listActive && (
        <ul className={styles.dropDownList}>
          {/* категории для доходв */}
          {transactionType === 'income' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              Регулярный доход
            </li>
          )}
          {transactionType === 'income' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              Нерегулярный доход
            </li>
          )}

          {/* категории для расхода */}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>💰&ensp;</span>  Основной
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🍔&ensp;</span>Еда
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🚗&ensp;</span>  Авто
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🧘‍♂️&ensp;</span>  Развитие
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>👶&ensp;</span>  Дети
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🏡&ensp;</span>  Дом
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🎓&ensp;</span>  Образование
            </li>
          )}
          {transactionType === 'spending' && (
            <li onClick={categoryClickHandler} className={styles.dropDownItem}>
              <span role='img' aria-label='emoji'>🌐&ensp;</span>  Остальное
            </li>
          )}
        </ul>
      )}

      <ReactSVG className={styles.dropDownIcon} src={svgListIcon} />
    </div>
  );
  // разметка для выпадающего списка

  return (
    <div className={styles.addTransContainer}>
      <div onClick={closeComponent} className={styles.closeBtnBox}>
        <ReactSVG className={styles.closeIcon} src={svgClose} />
      </div>
      <h2 className={styles.title}>Добавить транзакцию</h2>
      <form onSubmit={submitHandler} id="transaction" className={styles.form}>
        <div className={styles.transTypeContainer}>
          <span className={incomeActiveTrigger()}>Доход</span>
          <div className={styles.switchToggleContainer}>
            <label
              className={styles.switchToggleBody}
              htmlFor="transType"
            ></label>
            <span className={switchToggle()}>
              <ReactSVG
                className={styles.switchToggleSvg}
                src={transactionType === 'income' ? svgPlus : svgMinus}
              />
            </span>
          </div>
          <input
            className={styles.switchToggleInput}
            onChange={switchClickHandler}
            name="transactionType"
            type="checkbox"
            id="transType"
            defaultChecked
          />
          <span className={spendingActiveTrigger()}>Расход</span>
        </div>

        {/* рендер списка по условию */}
        {dropDownJSX}
        {/* рендер списка по условию */}

        <div className={styles.summFieldContainer}>
          <input
            className={styles.summField}
            onChange={summChange}
            required
            min="0.00"
            step="0.01"
            type="number"
            placeholder="0.00"
            value={summ}
          />
        </div>

        <div className={styles.calendarContainer}>
          <Datetime
            onChange={dateChange}
            inputProps={{ className: styles.calendarField }}
            initialValue={date}
            closeOnSelect={true}
            timeFormat={false}
          />
          <ReactSVG className={styles.calendarIcon} src={svgCalendar} />
        </div>

        <div className={styles.commentFieldContainer}>
          <input
          type='text'
            onChange={({target: {value}}) => setDisplayedComment(value)} 
            onBlur={handleMinifyingComment}
            onFocus={() => setDisplayedComment(fullComment)}
            className={styles.commentField}
            maxLength={500}
            value={displayedComment} 
            placeholder="Комментарий"
          />
        </div>
      </form>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.submitButton}
          form="transaction"
          type="submit"
        >
          Добавить
        </button>
        <button onClick={closeComponent} className={styles.cancelButton}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
