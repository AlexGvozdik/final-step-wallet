import axios from 'axios';

import {
  addTransactionRequest,
  addTransactionSucces,
  addTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSucces,
  fetchTransactionsError,
} from './transactions-actions';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';


export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const { data } = await axios.post('/transactions/get');
    const rawResponce = data.data.transactionsData
    const sortResponce = rawResponce.reverse()
    dispatch(fetchTransactionsSucces(sortResponce));
  } catch (error) {
    dispatch(fetchTransactionsError(error));
  }
};

export const addTransaction =
  (data) => dispatch => {
    dispatch(addTransactionRequest);
    console.log(data)

    axios
      .post('/transactions/add', data)
      .then(responce => {
        dispatch(addTransactionSucces(responce.data.data.transactionData))
      })
      .catch(error => {
        dispatch(addTransactionError(error))
      });
  };
