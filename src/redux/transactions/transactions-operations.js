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
    // const sortResponce = rawResponce.sort((first, second) => {
    //   const days = first.day - second.day
    //   const months = first.month - second.month
    //   const years = first.year - second.year

    //   if (days <= 0 && months <= 0 && years <= 0) {
    //     return 1
    //   }
    //   return -1
    // })

    dispatch(fetchTransactionsSucces(sortResponce));
  } catch (error) {
    console.log(error)
    dispatch(fetchTransactionsError(error));
  }
};

export const addTransaction =
  (data) => dispatch => {
    dispatch(addTransactionRequest);

    axios
      .post('/transactions/add', data)
      .then(responce => {
        dispatch(addTransactionSucces(responce.data.data.transactionData))
      })
      .catch(error => {
        dispatch(addTransactionError(error))
      });
  };
