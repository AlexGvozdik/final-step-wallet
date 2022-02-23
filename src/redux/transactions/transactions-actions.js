import { createAction } from '@reduxjs/toolkit';

export const fetchTransactionsRequest = createAction(
  'transactions/fetchTransactionsRequest'
)

export const fetchTransactionsSucces = createAction(
  'transactions/fetchTransactionsSucces'
)
export const fetchTransactionsError = createAction(
  'transactions/fetchTransactionsError'
)

export const addTransactionRequest = createAction(
  'transactions/addTransactionRequest'
)
export const addTransactionSucces = createAction(
  'transactions/addTransactionSucces'
)
export const addTransactionError = createAction(
  'transactions/addTransactionError'
)