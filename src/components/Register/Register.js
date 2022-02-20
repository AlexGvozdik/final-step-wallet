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

// import { PasswordStrenght } from "./ProgressBar";

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

  async function handleSubmit() {
    // e.preventDefault();
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
    } catch (er) {
      alert({
        text: er[0].message,
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
            <input
              type="email"
              name="email"
              value={email}
              // required
              onChange={handleChange}
              className={`${s.inputLbl} ${s.mail}`}
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
            {/* <input
              id="inputcheck"
              autoComplete="off"
              type="password"
              name="password"
              value={password}
              // required
              onChange={handleChange}
              className={`${s.inputLbl} ${s.password}`}
              placeholder="Пароль"
            ></input> */}
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
