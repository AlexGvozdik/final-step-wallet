import Styles from './LogoutView.module.css';
import React from 'react';
import LogoutConfirm from '../../components/LogoutConfirm';

const LogoutView = () => {
  return (
    <div className={Styles.container}>
      <LogoutConfirm />
    </div>
  );
};

export default LogoutView;
