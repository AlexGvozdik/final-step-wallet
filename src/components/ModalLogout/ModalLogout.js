import Backdrop from "@mui/material/Backdrop";
import s from "./ModalLogout.module.css";
import iconClose from "../../images/close.svg";

function ModalLogout() {
  return (
    <Backdrop open="true">
      <div className={s.modal}>
        <div className={s.modalLogoutConteiner}>
          <h2 className={s.logoutHeader}>Выход из личного кабинета</h2>
          <p className={s.logoutText}>Вы действительно хотите выйти?</p>
          <div>
            <button className={s.logoutButton}>Выйти</button>
            <button className={s.cancelButton}>Отменить</button>
          </div>
        </div>
        <button className={s.buttonClose}>
          <img src={iconClose} width="14px" height="14px" />
        </button>
      </div>
    </Backdrop>
  );
}

export default ModalLogout;
