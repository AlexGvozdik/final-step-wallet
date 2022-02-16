import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { authSelectors } from "../../redux/auth";
import styles from "./HeaderNav.module.css";
// import Logout from "../LogoutConfirm/LogoutConfirm";

function Header() {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  let name = useSelector(authSelectors.getUsername);
  if (!name) {
    name = "Имя";
  }

  const handleClickLogout = () => {
    dispatch(authOperations.logOut());
  };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <header className={styles.navigation_container}>
      <div className={styles.navigation_row}>
        <p className={styles.wallet}>Wallet</p>
      </div>
      <div className={styles.navigation_header}>
        <p className={styles.navigation_header_title}>{name}</p>

        <span className={styles.navigation_header_span}></span>

        <button
          type="submit"
          className={styles.navigation_icon_button_exit}
          onClick={handleClickLogout}
        >
          <p className={styles.navigation_title_button}>Выйти</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
