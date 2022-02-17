import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addTransaction } from './transactions-operations';

  const items = createReducer([], {
    [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  });

  const isLoading = createReducer(false, {
    [addTransaction.pending]: () => true,
    [addTransaction.fulfilled]: () => false,
    [addTransaction.rejected]: () => false,
  }); 

  export const transactionsReducer = combineReducers({
    items,
    isLoading,
  });
