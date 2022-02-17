import React from "react";
import styles from "./LoginView.module.css";
import LoginForm from "../../components/Login/Login";

function LoginView() {
  return (
    <>
      <div className={styles.authBackdrop}></div>

      <div className={styles.authLoginContainer}>
        <div className={styles.backgroundWrapper}>
          <p className={styles.backgroundWrapper_title}>Finance App</p>
        </div>

        <LoginForm />
      </div>
    </>
  );
}
export default LoginView;
