import React from "react";
import RegisterForm from "../../components/Register/Register";
import s from "./RegisterView.module.css";

const RegisterPage = () => {
  return (
    <>
      <div className={s.backdrop}></div>

      <div className={s.bgContainer}>
        <div className={s.bgImage}>
          <p className={s.title}>Finance App</p>
        </div>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
