import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const dispatch = useDispatch();

  const validationsSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 character")
      .max(12, "Must be 12 characters or less")
      .required("Password is required"),
  });

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.wrapper}>
          <p className={styles.wallet}>Wallet</p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={({ email, password }) => {
            dispatch(authOperations.login({ email, password }));
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <form style={styles.form} autoComplete="off">
              <div className={styles.labelsDivFirst}>
                <label className={styles.label}>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.email}`}
                    placeholder="E-mail"
                  />
                </label>
                <span className={styles.span}>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className={styles.labelsDivSecond}>
                <label style={styles.label}>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.password}`}
                    placeholder="Пароль"
                  />
                </label>
                <span className={styles.span}>
                  {errors.password && touched.password && errors.password}
                </span>
              </div>

              <div className={styles.wrapperBtn}>
                <button
                  type="submit"
                  disabled={!isValid && !dirty}
                  className={`${styles.button} ${styles.enter}`}
                  onClick={handleSubmit}
                >
                  Вход
                </button>

                <NavLink
                  className={`${styles.button} ${styles.register}`}
                  to="/register"
                >
                  Регистрация
                </NavLink>
              </div>
            </form>
          )}
        </Formik>
        <button type="submit" onClick={() => dispatch(authOperations.logout())}>
          Выйти
        </button>
      </div>
    </>
  );
}

export default LoginForm;
