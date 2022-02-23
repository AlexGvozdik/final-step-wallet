import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  fetchCategoriesRequest,
  fetchCategoriesSucces,
  fetchCategoriesError,
} from './categories-actions';

const items = createReducer([], {
  [fetchCategoriesSucces]: (_, { payload }) => payload,
  [fetchCategoriesRequest]: (state, {payload}) => []
});

const loading = createReducer(false, {
  [fetchCategoriesRequest]: () => true,
  [fetchCategoriesSucces]: () => false,
  [fetchCategoriesError]: () => false,
});

const error = createReducer(null, {
  [fetchCategoriesError]: (_, { payload }) => payload,
  [fetchCategoriesRequest]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
