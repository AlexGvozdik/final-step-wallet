import Styles from './LoginView.module.css';
import React from 'react';
import Login from '../../components/Login';

const LoginView = () => {
  return (
    <div className={Styles.container}>
      <Login />
    </div>
  );
};

export default LoginView;
