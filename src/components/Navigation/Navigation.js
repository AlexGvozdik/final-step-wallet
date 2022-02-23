import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import style from '../Navigation/Navigation.module.css';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Homesvg } from '../../images/home.svg';
import { ReactComponent as Statissvg } from '../../images/statis.svg';
import { ReactComponent as Dollarsvg } from '../../images/dollar-icon.svg';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const { pathname } = useLocation();

  return (
    <nav className={style.container}>
      <div className={style.nav__link}>
        {isLogin && (
          <>
            <NavLink to="/home" className={style.home}>
              <Homesvg
                fill=" current"
                className={`${style.home__svg} ${
                  pathname === '/home' ? style.activ : ''
                } `}
              />
              <span
                className={`${style.home__word} ${
                  pathname === '/home' ? style.activ : ''
                }`}
              >
                Главная
              </span>
            </NavLink>

            <NavLink to="/statistic" className={style.statis}>
              <Statissvg
                className={`${style.statis__svg} ${
                  pathname === '/statistic' ? style.activ : ''
                }`}
              />
              <span
                className={`${style.statis__word} ${
                  pathname === '/statistic' ? style.activ : ''
                }`}
              >
                Статистика
              </span>
            </NavLink>

            <NavLink to="/diagram" className={style.curren}>
              <Dollarsvg
                className={`${style.curren__svg} ${
                  pathname === '/diagram' ? style.activ : ''
                }`}
              />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
