import s from "./ModalLogout.module.css";

function ModalLogout() {
  return (
    <div className={s.modalLogoutConteiner}>
      <h2 className={s.logoutHeader}>Выход из личного кабинета</h2>
      <p className={s.logoutText}>Вы действительно хотите выйти?</p>
      <div>
        <button className={s.logoutButton}>Выйти</button>
        <button className={s.cancelButton}>Отменить</button>
      </div>
      <button className={s.buttonClose}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </button>
    </div>
  );
}

export default ModalLogout;
