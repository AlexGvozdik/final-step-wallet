// import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from './styles.module.css';

export default function LogoutConfirm() {
  const dispatch = useDispatch();

  return (
    <div className={styles.confirmContainer}>
      <p className={styles.text}>Вы уверены?</p>
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(authOperations.logout())}
        >
          <span>Выйти</span>
        </button>
        <NavLink to="/home" className={styles.btn}>
          <span className={styles.cancel}>Отмена</span>
        </NavLink>
      </div>
    </div>
  );
}
