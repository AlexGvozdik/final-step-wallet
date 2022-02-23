import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  fetchTransactionsRequest,
  fetchTransactionsSucces,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSucces,
  addTransactionError
} from './transactions-actions'

const items = createReducer([], {
  [fetchTransactionsSucces]: (_, { payload }) => payload,
  [addTransactionSucces]: (state, { payload }) => [payload, ...state]
})

const loading = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSucces]: () => false,
  [fetchTransactionsError]: () => false,
  [addTransactionRequest]: () => true,
  [addTransactionSucces]: () => false,
  [addTransactionError]: ()=>false
})

const error = createReducer(null, {
  [fetchTransactionsError]: (_, { payload }) => payload,
  [addTransactionError]: (_, { payload }) => payload,
  [fetchTransactionsRequest]: () => null,
  [addTransactionRequest]: ()=>null
})

export default combineReducers({
  items,
  loading,
  error,
});