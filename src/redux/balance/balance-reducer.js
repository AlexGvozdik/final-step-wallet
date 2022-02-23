import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchBalancePending, fetchBalanceSuccess, fetchBalanceError } from './balance-actions';

const balance = createReducer(null, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [fetchBalancePending]: (_) => null,
  [fetchBalanceError]: (_) => null
})

const balanceLoading = createReducer(true, {
  [fetchBalancePending]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false
})

const balanceError = createReducer(null, {
  [fetchBalancePending]: (_) => null,
  [fetchBalanceSuccess]: (_) => null,
  [fetchBalanceError]: (_, { payload }) => payload,
})

export default combineReducers({
  balance,
  balanceLoading,
  balanceError,
});