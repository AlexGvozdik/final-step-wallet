import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Exitsvg } from '../../images/exit-icon.svg';
import { ReactComponent as Logosvg } from '../../images/wallet.svg';
import style from './HeaderNav.module.css';

export default function HeaderNav() {
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <NavLink to="/home" className={style.home}>
          <Logosvg className={style.logo__svg} />
          <span className={style.logo}>Wallet</span>
        </NavLink>

        <div className={style.author}>
          <span className={style.name}>{name}</span>

          <div className={style.line}></div>

          <NavLink to="/logout" className={style.button}>
            <Exitsvg className={style.output__svg} />
            <span className={style.output}>Выйти</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
