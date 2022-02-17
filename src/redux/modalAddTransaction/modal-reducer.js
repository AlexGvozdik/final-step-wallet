import { createReducer } from '@reduxjs/toolkit';

export const isModalAddTransactionOpenReducer = createReducer(false, {
    'modal/setIsModalAddTransactionOpen': (_, { payload }) => payload,
  });