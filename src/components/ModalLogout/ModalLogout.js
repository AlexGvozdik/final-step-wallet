import s from "./ModalLogout.module.css";
import iconClose from "../../images/exit-icon.svg";

function ModalLogout() {
  return (
    <div className={s.modalLogoutConteiner}>
      <h2 className={s.logoutHeader}>Выход из личного кабинета</h2>
      <p className={s.logoutText}>Вы действительно хотите выйти?</p>
      <div className={s.buttonGroup}>
        <button className={s.logoutButton}>Выйти</button>
        <button className={s.cancelButton}>Отменить</button>
      </div>
    </div>
  );
}

export default ModalLogout;
