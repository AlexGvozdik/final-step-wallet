import React from 'react';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './BtnIcon';

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function createMenuData(Icon, MenuName, Path) {
  return { Icon, MenuName, Path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', '/main'),
  createMenuData(<StatisticIcon />, 'Statistics', '/statistic'),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', '/'),
];

const NavMenu = () => {
  

  return (
    <ul className={s.navList}>
      {menuItems.map(menuItem => (
        <li className={s.navItem} key={menuItem.MenuName}>
          {/* <NavLink
            to={menuItem.Path}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          > */}
          <div >{menuItem.Icon}</div>
          <span className={s.navText}>{menuItem.MenuName} </span>
          {/* </NavLink> */}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
