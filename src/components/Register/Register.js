import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "indicative/validator";
import { Link } from "react-router-dom";
import { authOperations } from "../../redux/auth";
import s from "./Register.module.css";
import { alert, defaults } from "@pnotify/core";

defaults.styling = "material";
defaults.icon = "material";
defaults.delay = 1000;

function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const schema = {
    name: "string|min:1|max:12",
    email: "required|email",
    password: "required|min:6|max:12|confirmed",
    password_confirmation: "required|min:6|max:12",
  };

  const messages = {
    required: "Make sure to enter email and password",
    email: "Enter valid email address",
    min: "The value of name or password is too small",
    max: "The value of name or password is too large",
    confirmed: "Entered passwords do not match",
  };

  function activePassword() {
    const passLength = password.length;

    if (passLength >= 1 && passLength < 6) {
      return s.short;
    }
    if (passLength >= 6 && passLength < 10) {
      return s.middle;
    }
    if (passLength >= 10) {
      return s.long;
    }
    return s.tooShort;
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "password_confirmation":
        return setConfirmPassword(value);

      default:
        return;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await validate(
        { name, email, password, password_confirmation },
        schema,
        messages
      );

      dispatch(authOperations.register({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert({
        text: error[0].message,
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: "down",
      });
    }
  }

  return (
    <>
      <div className={s.mainDivForm}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Wallet</h1>
        </div>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <label className={s.formLbl}>
            {/* <span className={s.mail}>
              <i className={s.mailIcon}></i>
            </span> */}
            <input
              type="email"
              name="email"
              value={email}
              // required
              onChange={handleChange}
              className={`${s.inputLbl} ${s.mail}`}
              // className={s.inputLbl}
              placeholder="E-mail"
            ></input>
          </label>

          <label className={s.formLbl}>
            <input
              id="inputcheck"
              className={`${s.inputLbl} ${s.password}`}
              placeholder="Пароль"
              onChange={handleChange}
              name="password"
              type="password"
              value={password}
              required
              autoComplete="off"
            ></input>
            {/* <svg width="16" height="21" className={s.inputIcon}>
              <path
                d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                fill="#E0E0E0"
              />
            </svg> */}
          </label>

          <label className={s.formLbl}>
            <input
              className={`${s.inputLbl} ${s.password}`}
              placeholder="Подтвердите пароль"
              onChange={handleChange}
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              autoComplete="off"
            ></input>
            {/* <input
              autoComplete="off"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={handleChange}
              className={`${s.inputLbl} ${s.password}`}
              placeholder="Подтвердите пароль"
            ></input> */}
            <div id="check" className={activePassword()}></div>
          </label>

          <label className={s.formLbl}>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={handleChange}
              className={`${s.inputLbl} ${s.name}`}
              placeholder="Ваше имя"
            ></input>
          </label>

          <div className={s.btnForm}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={s.btnRegister}
            >
              Регистрация
            </button>

            <Link to="/login" className={s.authLink}>
              <button type="submit" className={s.btnLogin}>
                Вход
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
