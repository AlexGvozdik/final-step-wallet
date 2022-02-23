import { createAction } from '@reduxjs/toolkit';

export const fetchBalancePending = createAction('balance/fetchBalancePending')
export const fetchBalanceSuccess = createAction('balance/fetchBalanceSuccess')
export const fetchBalanceError = createAction('balance/fetchBalanceError')