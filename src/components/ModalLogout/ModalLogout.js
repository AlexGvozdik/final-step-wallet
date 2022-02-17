import React from "react";
import Backdrop from "@mui/material/Backdrop";
import s from "./ModalLogout.module.css";
import iconClose from "../../images/close.svg";
import { NavLink } from "react-router-dom";

function ModalLogout({ toggleModal, showModal, logout }) {
  return (
    <Backdrop open={showModal}>
      <div className={s.modal}>
        <div className={s.modalLogoutConteiner}>
          <h2 className={s.logoutHeader}>Выход из личного кабинета</h2>
          <p className={s.logoutText}>Вы действительно хотите выйти?</p>
          <div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <button type="submit" className={s.logoutButton} onClick={logout}>
                Выйти
              </button>
            </NavLink>

            <button
              type="button"
              className={s.cancelButton}
              onClick={toggleModal}
            >
              Отменить
            </button>
          </div>
        </div>
        <button type="button" className={s.buttonClose} onClick={toggleModal}>
          <img src={iconClose} width="14px" height="14px" />
        </button>
      </div>
    </Backdrop>
  );
}

export default ModalLogout;
