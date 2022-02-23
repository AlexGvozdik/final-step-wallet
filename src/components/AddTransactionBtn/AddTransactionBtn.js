import { ReactSVG } from 'react-svg';
import svgPlus from '../../images/plus-icon.svg';
import styles from './AddTransactionBtn.module.css';
import React from 'react';

export default function OpenTransactionBtn({ toggleModal, toggleAddTransaction }) {
  function openAddTransaction() {
    toggleAddTransaction()
    toggleModal()
  }

  return (
    <button type="button" className={styles.btn} onClick={openAddTransaction}>
      <ReactSVG className={styles.svgComponent} src={svgPlus} />
    </button>
  );
}
