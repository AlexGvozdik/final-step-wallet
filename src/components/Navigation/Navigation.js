import React, { useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './BtnIcon';
// import { StyledListItem, StyledNavMenu } from './NavMenu.style';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

function createMenuData(Icon, MenuName, Path) {
  return { Icon, MenuName, Path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', '/main'),
  createMenuData(<StatisticIcon />, 'Statistics', '/statistic'),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', '/'),
];

const NavMenu = () => {
  const [checked, setChecked] = useState('Main');

  return (
    <ul className={s.navList}>
      {menuItems.map((menuItem) => (
        <li className={s.navItem}
          key={menuItem.MenuName}
          checked={checked === menuItem.MenuName}
          onClick={() => setChecked(menuItem.MenuName)}
        >
          {/* <NavLink
            to={menuItem.Path}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          > */}
            <ListItemIcon className={s.icon}>{menuItem.Icon}</ListItemIcon>
            <ListItemText primary={menuItem.MenuName} />
          {/* </NavLink> */}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;