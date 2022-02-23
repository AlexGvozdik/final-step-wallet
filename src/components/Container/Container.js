import Styles from './Container.module.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { authSelectors } from '../../redux/auth';

const Container = ({ children }) => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={isLogedIn ? Styles.container : Styles.login}>
      {' '}
      {children}{' '}
    </div>
  );
};

export default Container;
