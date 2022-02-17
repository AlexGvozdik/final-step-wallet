import axios from 'axios';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import"@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {setIsModalAddTransactionOpen} from './transactions-actions'


axios.defaults.baseURL = 'https://final-step-wallet-back.herokuapp.com';


const showAsyncErrorNotification = message => {
  setTimeout(() => {
      error({
        text: `${message}`,
        delay: 4000,
        mouseReset: true
      })
  }, 0);
}

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const addTransaction = createAsyncThunk(
    'transactions/add',
    async (transaction, { getState, rejectWithValue, dispatch }) => {
      try {
        const state = getState();
        const persistedToken = state.auth.token;
        if (!persistedToken) {
        return rejectWithValue();
        }
        setToken(persistedToken);
        const { data } = await axios.post('/api/transactions/add', transaction);
        dispatch(setIsModalAddTransactionOpen(false));
        return data;
      } catch (error) {
        showAsyncErrorNotification('Oops, something went wrong');
        return rejectWithValue(error.message);
      }
    },
  );