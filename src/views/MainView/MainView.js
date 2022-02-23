import React, { useState } from 'react';

import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import AddTransaction from '../../components/addTransaction';
import Backdrop from '../../components/Backdrop';

import Styles from './MainView.module.css';

const MainView = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddTransaction, setAddTransaction] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  function toggleAddTransaction() {
    setAddTransaction(!showAddTransaction);
  }

  return (
    <div className={Styles.container}>
      <Dashboard />
      <AddTransactionBtn
        toggleAddTransaction={toggleAddTransaction}
        toggleModal={toggleModal}
      />

      {showModal && (
        <Backdrop>
          {showAddTransaction && (
            <AddTransaction
              toggleAddTransaction={toggleAddTransaction}
              toggleModal={toggleModal}
            />
          )}
        </Backdrop>
      )}
    </div>
  );
};

export default MainView;
