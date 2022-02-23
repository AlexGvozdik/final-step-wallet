import Styles from './Register.module.css';
import React from 'react';
import Register from '../../components/Register/Register';

const RegisterView = () => {
  return (
    <div className={Styles.container}>
      <Register />
    </div>
  );
};

export default RegisterView;
